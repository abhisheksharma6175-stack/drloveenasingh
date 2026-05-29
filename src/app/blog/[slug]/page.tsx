import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
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

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

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
        <div className="prose prose-slate mt-10 max-w-none">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
