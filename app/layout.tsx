import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Survey 360 Research Solutions",
  description: "Advancing knowledge through evidence-based research, mentorship, and business coaching.",
  keywords: ["research", "mentorship", "business coaching", "non-profit", "survey 360"],
  authors: [{ name: "Survey 360 Research Solutions" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-background border-b border-border">
          <div className="container-page py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-medium text-primary">
              Survey 360 Research
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
            <button className="md:hidden">
              Menu
            </button>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container-page">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <h4 className="text-lg font-medium mb-4">Survey 360 Research</h4>
                <p className="text-gray-300">
                  Advancing knowledge and empowering individuals through evidence-based research.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                  <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/services/research" className="hover:text-primary transition-colors">Research</Link></li>
                  <li><Link href="/services/mentorship" className="hover:text-primary transition-colors">Mentorship</Link></li>
                  <li><Link href="/services/coaching" className="hover:text-primary transition-colors">Business Coaching</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Connect With Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-300 hover:text-primary">Twitter</a>
                  <a href="#" className="text-gray-300 hover:text-primary">LinkedIn</a>
                  <a href="#" className="text-gray-300 hover:text-primary">Facebook</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Survey 360 Research Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
