import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ScriptedCraft | Instructional Design & e-Learning",
  description: "Custom Learning Solutions for Global Teams. Specializing in storytelling, explainer videos, and high-impact e-learning.",
  keywords: ["Instructional Design", "Storyline 360", "Explainer Videos", "E-learning", "ScriptedCraft"],
  // Added the favicon here without touching your existing SEO
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22 fill=%22%23D4AF37%22>▷</text></svg>`,
  },
  openGraph: {
    title: "ScriptedCraft",
    description: "Custom Learning Solutions for Global Teams.",
    url: "https://scriptedcraft.com", 
    siteName: "ScriptedCraft",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}