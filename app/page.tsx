import { useState } from 'react';
import Link from 'next/link';
import Process from '../components/Process/Process';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

// Header Component with Mobile Menu
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            AMC Company Limited
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay - Slides in from the side */}
        {isMenuOpen && (
          <>
            {/* Background overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Menu panel */}
            <nav className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out">
              <div className="p-5">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="mb-6 p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative py-32 bg-gray-900">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80')" }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Headline - Now in white */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transform Your Space With Expert Painting
            </h1>
            
            {/* Subheadline - Now in white */}
            <p className="text-lg md:text-xl text-white mb-10 opacity-90">
              Professional residential and commercial painting services that deliver quality, reliability, and stunning results for AMC Company Limited.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-8 py-3 rounded-lg transition-colors"
              >
                Get a Free Estimate
              </a>
              <a
                href="#projects"
                className="border border-white hover:border-blue-300 text-white font-medium px-8 py-3 rounded-lg transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <Process />

      {/* Our Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
      
    </main>
  );
}
