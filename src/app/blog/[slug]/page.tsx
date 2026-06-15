import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { posts } from "@/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  const url = `/blog/${post.slug}`;

  return {
    metadataBase: new URL(site.url),
    title: post.title,
    description: post.excerpt,
    keywords: [
      "health blog",
      "family medicine blog",
      "preventive healthcare",
      "wellness tips",
      post.title,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "article",
      publishedTime: `${post.date}T00:00:00.000Z`,
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const content = post.content as Array<
    | string
    | { type: "heading"; text: string }
    | { type: "lead"; text: string }
    | { type: "text"; text: string }
    | { type: "list"; items: string[] }
    | { type: "callout"; text: string }
  >;

  return (
    <article className="bg-white">
      <div className="container-shell section-padding max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1677b9]">
          {post.date} - {post.readTime}
        </p>
        <h1 className="mt-4 font-[var(--font-serif)] text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl">
          <Image src={post.image} alt="" fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>
        <div className="mt-10 space-y-6">
          {content.map((block, index) => {
            if (typeof block === "string" || block.type === "text") {
              const text = typeof block === "string" ? block : block.text;
              return (
                <p key={`${index}-${text}`} className="text-lg leading-8 text-slate-700">
                  {text}
                </p>
              );
            }

            if (block.type === "lead") {
              return (
                <p key={`${index}-${block.text}`} className="text-xl leading-8 text-slate-600">
                  {block.text}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h2 key={`${index}-${block.text}`} className="pt-2 font-[var(--font-serif)] text-2xl font-semibold text-slate-950">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={`${index}-${block.items.join("-")}`} className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-700">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <div key={`${index}-${block.text}`} className="rounded-2xl border border-[#cde5f3] bg-[#f3f9fd] p-6">
                <p className="text-lg leading-8 text-slate-700">{block.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
