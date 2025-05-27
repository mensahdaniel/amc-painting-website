import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Metadata } from "next";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


export const metadata: Metadata = {
  title: "Contact Us | Survey 360 Research Solutions",
  description: "Get in touch with Survey 360 Research Solutions for inquiries about our research services, mentorship programs, and business coaching.",
  keywords: ["contact", "research inquiries", "mentorship", "business coaching", "survey 360"],
};


export default function ContactPage() {
  return (

    <>
      <section className="relative py-16 md:py-24 bg-peach-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=center"
            alt="Modern African office environment with professional team"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f07316 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container-page relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-3 inline-block">Contact Us</span>
            <h1 className="text-peach-900 mb-6 text-4xl md:text-5xl font-serif leading-tight">Get in Touch With Our <span className="text-peach-600">Team</span></h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">Have questions about our research services, mentorship programs, or business coaching? We&apos;d love to hear from you.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-page">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">

                <h2 className="text-2xl font-semibold text-peach-800 mb-12">Send Us a Message</h2>

                {/* Contact Form Section */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Full Name</label>
                      <Input type="text"
                        placeholder="eg. Kofi John"
                        className=" rounded-md px-4 py-3"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium text-gray-700">Email Address</label>
                      <Input
                        type="email"
                        placeholder="eg. kofi.john@gmail.com"
                        className="rounded-md px-4 py-3"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Subject</label>
                    <Input
                      type="text"
                      placeholder="How can we help you?"
                      className="rounded-md px-4 py-3"
                      required
                    />
                  </div>


                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Message</label>
                    <Textarea
                      placeholder="Your Message here ..."
                      className="rounded-md px-3 py-2 h-32"
                      required
                    />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 mb-8">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1742134516442-2f51982ce675?w=600&h=400&fit=crop&crop=center"
                    alt="African business office environment and team collaboration"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-peach-600/20"></div>
                </div>
                <h2 className="text-2xl font-semibold text-peach-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <IoLocationOutline className="text-peach-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h6 className="font-bold text-gray-800">Address</h6>
                      <p className="text-gray-600 mt-1">35 Avenue Street, Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MdMailOutline className="text-peach-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h6 className="font-bold text-gray-800">Email</h6>
                      <a href="mailto:info@survey360research.org" className="text-gray-600 hover:text-peach-600 transition-colors mt-1 block">
                        info@survey360research.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <HiOutlinePhone className="text-peach-500 w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h6 className="font-bold text-gray-800">Phone</h6>
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
            {/*   Map component */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d128019.5888770854!2d-0.10230801147599392!3d5.602671246028471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1748263840563!5m2!1sen!2sgh" width="1600" height="550" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="inherit"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
