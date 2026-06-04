import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Helpful primary care articles from All Care Family Medicine, PC."
};

export default function BlogPage() {
  return (
    <main>
      <PageBanner title="Blog" imageSrc="/images/care.jpg" />
      <AnimatedSection className="section-padding bg-[#f8fbff]">
        <div className="container-shell">
        <SectionHeading
          eyebrow="Blog"
          title="SEO-friendly health education for patients."
          description="Practical articles that answer common questions before primary care and medical exam visits."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[16/10]">
                <Image src={post.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1677b9]">{post.date} - {post.readTime}</p>
                <h2 className="mt-3 text-xl font-bold text-slate-950">{post.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </AnimatedSection>
    </main>
  );
}
