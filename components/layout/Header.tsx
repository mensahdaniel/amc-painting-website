'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-background border-b border-border transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className='container-page flex items-center justify-between'>
        <Link href='/' className="relative z-10">
          <Image
            src="/survey360.png"
            alt="Survey 360 Research Solutions"
            width={140}
            height={140}
            className="h-14 aspect-3/2"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li><Link href="/about" className="font-medium hover:text-primary transition-colors py-2">About</Link></li>
            <li>
              <Link href="/services" className="font-medium hover:text-primary transition-colors py-2 flex items-center">
                Services
              </Link>
            </li>
            {/* <li><Link href="/projects" className="font-medium hover:text-primary transition-colors py-2">Projects</Link></li> */}
            {/* <li><Link href="/resources" className="font-medium hover:text-primary transition-colors py-2">Resources</Link></li> */}
            <li><Link href="/contact" className="font-medium hover:text-primary transition-colors py-2">Contact</Link></li>
            <li><Link href="/contact" className="ml-4 inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-colors">Get Started</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current my-1.5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-0 bg-background transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-24 px-6">
            <nav>
              <ul className="space-y-6 text-lg">
                <li><Link href="/" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                <li><Link href="/about" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
                <li>
                  <p className="block py-2 font-medium mb-2">Services</p>
                  <ul className="pl-4 space-y-3">
                    <li><Link href="/services/research" className="block py-1" onClick={() => setMobileMenuOpen(false)}>Research Services</Link></li>
                    <li><Link href="/services/mentorship" className="block py-1" onClick={() => setMobileMenuOpen(false)}>Mentorship Programs</Link></li>
                    <li><Link href="/services/coaching" className="block py-1" onClick={() => setMobileMenuOpen(false)}>Business Coaching</Link></li>
                  </ul>
                </li>
                <li><Link href="/projects" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
                <li><Link href="/resources" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Resources</Link></li>
                <li><Link href="/contact" className="block py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                <li><Link href="/contact" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-colors" onClick={() => setMobileMenuOpen(false)}>Get Started</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
