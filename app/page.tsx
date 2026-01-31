import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog"; 
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Note: No "use client" here. This makes the main page a Server Component,
// which is exactly what we need to render the Blog correctly.
export default function Home() {
  return (
    <main className="min-h-screen bg-brand-charcoal overflow-x-hidden">
      <Hero />
      <Portfolio />
      <Blog /> 
      <Contact />
      <Footer />
    </main>
  );
}