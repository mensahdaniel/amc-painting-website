import { Metadata } from "next";
import { MdMailOutline } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Survey 360 Research Solutions",
  description: "Get in touch with Survey 360 Research Solutions for inquiries about our research services, mentorship programs, and business coaching.",
  keywords: ["contact", "research inquiries", "mentorship", "business coaching", "survey 360"],
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-peach-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container-page relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-3 inline-block">Contact Us</span>
            <h1 className="text-peach-900 mb-6 text-4xl md:text-5xl font-serif leading-tight">
              Get in Touch With Our <span className="text-peach-600">Team</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Have questions about our research services, mentorship programs, or business coaching? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold text-peach-800 mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-peach-500 focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-peach-500 focus:border-transparent"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Subject</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-peach-500 focus:border-transparent"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Message</label>
                    <textarea
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-peach-500 focus:border-transparent h-36"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-peach-600 text-white hover:bg-peach-700 rounded-md px-6 py-3 font-medium transition-colors inline-block"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 mb-8">
                <h2 className="text-2xl font-semibold text-peach-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <IoLocationOutline className="text-peach-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-800">Address</h3>
                      <p className="text-gray-600 mt-1">35 Avenue Street, Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MdMailOutline className="text-peach-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <a href="mailto:info@survey360research.org" className="text-gray-600 hover:text-peach-600 transition-colors mt-1 block">
                        info@survey360research.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <HiOutlinePhone className="text-peach-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-800">Phone</h3>
                      <a href="tel:+11234567890" className="text-gray-600 hover:text-peach-600 transition-colors mt-1 block">
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-semibold text-peach-800 mb-6">Connect With Us</h2>
                <div className="flex space-x-4">
                  <Link href="https://twitter.com" className="text-gray-500 hover:text-peach-600 transition-colors" aria-label="Twitter">
                    <FaXTwitter className="h-6 w-6" />
                  </Link>
                  <Link href="https://linkedin.com" className="text-gray-500 hover:text-peach-600 transition-colors" aria-label="LinkedIn">
                    <FaLinkedin className="h-6 w-6" />
                  </Link>
                  <Link href="https://facebook.com" className="text-gray-500 hover:text-peach-600 transition-colors" aria-label="Facebook">
                    <FiFacebook className="h-6 w-6" />
                  </Link>
                  <Link href="https://instagram.com" className="text-gray-500 hover:text-peach-600 transition-colors" aria-label="Instagram">
                    <FaInstagram className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-peach-900 mb-4 text-3xl font-serif">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We welcome visitors to our office. Please feel free to schedule an appointment in advance.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100 aspect-video w-full max-w-5xl mx-auto">
            {/* Replace with actual map component or embed when available */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 text-lg">Interactive Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
