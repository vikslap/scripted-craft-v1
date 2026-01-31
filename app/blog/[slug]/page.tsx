import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Footer from "@/components/Footer";

// Note: Next.js 15+ requires params to be awaited
export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 1. Await the params to get the slug correctly
  const { slug } = await params;

  // 2. Fetch the post data using the slug
  const { frontMatter, content } = await getPostBySlug(slug);

  return (
    <main className="min-h-screen bg-brand-neutral">
      <div className="max-w-3xl mx-auto py-24 px-6">
        <Link href="/blog" className="text-brand-blue font-bold mb-12 inline-block hover:underline">
          ← Back to the Archive
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
            <span>{frontMatter.date}</span>
            <span className="w-1 h-1 rounded-full bg-brand-navy/20" />
            <span>{frontMatter.tag}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight">
            {frontMatter.title}
          </h1>
        </header>

        {/* This renders your Markdown content */}
        <article className="prose prose-lg prose-slate max-w-none text-brand-charcoal/80">
          <MDXRemote source={content} />
        </article>
      </div>
      <Footer />
    </main>
  );
}