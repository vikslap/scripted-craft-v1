import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";

export default async function Blog() {
  // 1. Fetch posts from the server-side filesystem
  const allPosts = await getAllPosts();
  
  // 2. Take the most recent 3 for the home page snippet
  const recentPosts = allPosts
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6 bg-white scroll-margin-top-[100px]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy border-l-4 border-brand-gold pl-6 uppercase tracking-wider">
              Notes
            </h2>
            <p className="text-brand-charcoal/60 mt-2 ml-10">
              Notes on effective instructional design and e-learning development.
            </p>
          </div>
          
          <Link href="/blog" className="hidden md:block text-brand-blue font-bold hover:underline group">
            Browse All Notes <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentPosts.length > 0 ? (
            recentPosts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                <article className="p-8 rounded-3xl bg-brand-neutral border border-brand-navy/5 hover:border-brand-blue/20 transition-all h-full flex flex-col shadow-sm hover:shadow-md">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    {post.tag}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy mt-3 mb-4 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/70 mb-6 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="text-brand-blue font-bold text-xs uppercase">
                    Read More →
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <p className="text-brand-charcoal/40 italic">No notes found in /content folder.</p>
          )}
        </div>
        
        {/* Mobile View All */}
        <Link href="/blog" className="md:hidden block mt-10 text-center bg-brand-blue/5 text-brand-blue font-bold py-4 rounded-2xl">
          Browse All Notes
        </Link>
      </div>
    </section>
  );
}