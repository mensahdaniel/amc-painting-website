'use client'
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
// import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaChartLine, FaUsers, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Research Services", href: "/services/research", icon: <FaChartLine className="w-4 h-4" /> },
    { name: "Mentorship Programs", href: "/services/mentorship", icon: <FaUsers className="w-4 h-4" /> },
    { name: "Business Coaching", href: "/services/coaching", icon: <FaBriefcase className="w-4 h-4" /> }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Our Impact", href: "/about#impact" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-peach-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px), radial-gradient(circle at 75% 75%, #ffffff 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px, 20px 20px'
        }} className="w-full h-full"></div>
      </div>

      {/* Main Footer Content */}
      <div className="container-page relative z-10 pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

          {/* Company Information */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/survey360light.png"
                alt="Survey 360 Research Solutions"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-lg">
              A not-for-profit research and development organization dedicated to advancing knowledge and empowering individuals and institutions through evidence-based research, mentorship, and business coaching.
            </p>

            {/* Mission Statement */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
              <div className="flex items-center mb-3">
                <HiSparkles className="w-5 h-5 text-peach-400 mr-2" />
                <h4 className="font-semibold text-white">Our Mission</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                To advance knowledge and empower individuals through high-quality, evidence-based research and strategic development programs.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                className="group w-12 h-12 bg-white/10 hover:bg-peach-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Twitter"
              >
                <FaXTwitter className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="group w-12 h-12 bg-white/10 hover:bg-peach-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://facebook.com"
                className="group w-12 h-12 bg-white/10 hover:bg-peach-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Facebook"
              >
                <FiFacebook className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </Link>
              <Link
                href="https://instagram.com"
                className="group w-12 h-12 bg-white/10 hover:bg-peach-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-300 hover:text-peach-300 transition-all duration-300"
                  >
                    <FaArrowRight className="w-3 h-3 mr-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-gray-300 hover:text-peach-300 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-peach-500 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-peach-500 to-orange-500 text-white font-semibold rounded-xl hover:from-peach-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>View All Services</span>
                <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>



        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Survey 360 Research Solutions. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              A not-for-profit research and development organization
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-peach-500/10 to-transparent rounded-full -translate-x-32 translate-y-32 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
    </footer>
  );
};

export default Footer;
