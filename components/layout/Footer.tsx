'use client'
import Image from "next/image";
import Link from "next/link";
// import {  FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaInstagram, FaLocationDot, FaPhp, FaPhone } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/survey360light.png"
                alt="Survey 360 Research Solutions"
                width={160}
                height={160}
                className="h-14 aspect-3/2 object-contain"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Survey 360 Research Solutions is a not-for-profit research and development organization
              dedicated to advancing knowledge and empowering individuals and institutions through
              evidence-based research, mentorship, and business coaching.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-gray-300 hover:text-primary transition-colors" aria-label="Twitter">
                <FaXTwitter className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-300 hover:text-primary transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com" className="text-gray-300 hover:text-primary transition-colors" aria-label="Facebook">
                <FiFacebook className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-300 hover:text-primary transition-colors" aria-label="Instagram">
                <FaInstagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              {/* <li><Link href="/projects" className="text-gray-300 hover:text-primary transition-colors">Projects</Link></li> */}
              {/* <li><Link href="/resources" className="text-gray-300 hover:text-primary transition-colors">Resources</Link></li> */}
              <li><Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/#services#research" className="text-gray-300 hover:text-primary transition-colors">Research Services</Link></li>
              <li><Link href="/#services#mentorship" className="text-gray-300 hover:text-primary transition-colors">Mentorship Programs</Link></li>
              <li><Link href="/#services#coaching" className="text-gray-300 hover:text-primary transition-colors">Business Coaching</Link></li>
              <li><Link href="/#services" className="text-gray-300 hover:text-primary transition-colors">View All Services</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 text-gray-400 rounded-md focus:outline-none ring-2 focus:ring-2 focus:ring-primary focus:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-opacity-90 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <IoLocationOutline className="text-peach-500 w-6 h-6" />
              <span className="text-gray-300">35 Avenue Street, Accra, Ghana</span>
            </div>
            <div className="flex items-center">
              <MdMailOutline className="text-peach-500 w-6 h-6" />
              <a href="mailto:info@survey360research.org" className="text-gray-300 hover:text-primary transition-colors">info@survey360research.org</a>
            </div>
            <div className="flex items-center">
              <HiOutlinePhone className="text-peach-500 w-6 h-6" />
              <a href="tel:+11234567890" className="text-gray-300 hover:text-primary transition-colors">+1 (123) 456-7890</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Survey 360 Research Solutions. All rights reserved. | A not-for-profit research organization
          </p>
          {/* <div className="mt-2 space-x-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-primary transition-colors">Sitemap</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
