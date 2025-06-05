'use client'
import Link from "next/link";
import { FaHome, FaSearch, FaArrowLeft, FaEnvelope, FaPhone } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";

export default function NotFound() {
  const quickLinks = [
    { name: "Home", href: "/", icon: <FaHome className="w-4 h-4" /> },
    { name: "About Us", href: "/about", icon: <HiSparkles className="w-4 h-4" /> },
    { name: "Our Services", href: "/services", icon: <FaSearch className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-peach-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #f97316 2px, transparent 2px), radial-gradient(circle at 75% 75%, #f97316 1px, transparent 1px)',
          backgroundSize: '60px 60px, 30px 30px'
        }} className="w-full h-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-peach-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-peach-300 rounded-full animate-bounce"></div>

      <div className="container-page relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* 404 Illustration */}
          <div className="mb-12 relative">
            <div className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-orange-600 mb-4">
              404
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-white/80 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center border border-peach-200">
                <FaSearch className="w-12 h-12 text-peach-500" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-peach-700 font-semibold text-sm mb-6 shadow-lg border border-peach-200">
              <HiSparkles className="w-4 h-4 mr-2 text-peach-500" />
              Page Not Found
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Oops! This Page Seems to Have
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-orange-600">
                Gone Missing
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              The page you&apos;re looking for might have been moved, deleted, or doesn&apos;t exist.
              Don&apos;t worry though - our research team is always here to help you find what you need!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="group bg-gradient-to-r from-peach-600 to-orange-600 text-white hover:from-peach-700 hover:to-orange-700 rounded-xl px-8 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaHome className="mr-2 w-5 h-5" />
              <span>Back to Home</span>
              <GoArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="group bg-white border-2 border-peach-300 text-peach-600 hover:bg-peach-50 rounded-xl px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <FaEnvelope className="mr-2 w-5 h-5" />
              <span>Get Help</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-gray-100 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Or explore these popular pages:
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="group p-4 bg-white/80 hover:bg-white rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-peach-100 to-orange-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-peach-600">
                        {link.icon}
                      </div>
                    </div>
                    <span className="font-semibold text-gray-900 group-hover:text-peach-600 transition-colors">
                      {link.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-peach-600 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Still Can&apos;t Find What You&apos;re Looking For?</h3>
            <p className="text-peach-100 mb-6 text-lg">
              Our team at Survey 360 Research Solutions is here to help. Contact us directly and we&apos;ll assist you in finding the information you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-white/90">
                <FaPhone className="w-5 h-5 mr-2" />
                <a href="tel:+233322494556" className="hover:text-white transition-colors">
                  0322494556 / 0550102130
                </a>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="flex items-center text-white/90">
                <FaEnvelope className="w-5 h-5 mr-2" />
                <a href="mailto:info@survey360.org" className="hover:text-white transition-colors">
                  info@survey360.org
                </a>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <button
              onClick={() => window.history.back()}
              className="group inline-flex items-center text-gray-600 hover:text-peach-600 font-medium transition-colors"
            >
              <FaArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span>Go back to previous page</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-peach-500/10 to-transparent rounded-full -translate-x-32 translate-y-32 blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
    </div>
  );
}
