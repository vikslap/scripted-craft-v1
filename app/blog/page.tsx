import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import Footer from "@/components/Footer";

// This is a Server Component - it reads your /content folder directly
export default async function BlogArchive() {
  const posts = await getAllPosts();

  // Sort posts by date so the newest research is always at the top
  const sortedPosts = posts.sort((a: any, b: any) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="min-h-screen bg-brand-neutral flex flex-col">
      <div className="flex-grow py-24 px-6 max-w-4xl mx-auto w-full">
        {/* Breadcrumb Navigation */}
        <Link href="/#blog" className="text-brand-blue font-bold mb-8 inline-block hover:underline">
          ← Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-5xl font-extrabold text-brand-navy mb-4 italic">
            The Archive
          </h1>
          <p className="text-brand-charcoal/60 text-xl max-w-2xl leading-relaxed">
            A complete collection of notes on effective instructional design and e-learning development.
          </p>
        </header>

        {/* The List of All Posts */}
        <div className="space-y-12">
          {sortedPosts.length > 0 ? (
            sortedPosts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                <div className="border-b border-brand-navy/10 pb-10 transition-colors group-hover:border-brand-blue/30">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">
                      {post.tag}
                    </span>
                    <span className="text-xs text-brand-charcoal/40 font-medium">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-brand-charcoal/70 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 text-brand-blue font-bold text-xs uppercase tracking-tighter inline-flex items-center gap-2">
                    Read More <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-brand-navy/20">
              <p className="text-brand-charcoal/40 italic text-lg">Posts are currently being indexed...</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}