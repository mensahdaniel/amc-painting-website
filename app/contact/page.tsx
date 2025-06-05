"use client";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaHandshake, FaRocket } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { useContactForm } from "@/lib/hooks/useContactForm";

// Note: metadata is handled in layout.tsx for client components

export default function ContactPage() {
  const { formData, isLoading, handleInputChange, handleSubmit } = useContactForm();
  // const contactMethods = [
  //   {
  //     icon: <FaMapMarkerAlt className="w-8 h-8" />,
  //     title: "Visit Our Office",
  //     details: [
  //       "105 Eastwood Avenue",
  //       "Off Lake Bosomtwe Road",
  //       "Atonsu-Monaco, Kumasi",
  //       "Ghana"
  //     ],
  //     action: "Get Directions",
  //     href: "https://maps.google.com",
  //     gradient: "from-peach-500 to-orange-600/60"
  //   },
  //   {
  //     icon: <FaEnvelope className="w-8 h-8" />,
  //     title: "Email Us",
  //     details: [
  //       "info@survey360.org"
  //     ],
  //     action: "Send Email",
  //     href: "mailto:info@survey360.org",
  //     gradient: "from-peach-500 to-orange-600/60"
  //   },
  //   {
  //     icon: <FaPhoneAlt className="w-8 h-8" />,
  //     title: "Call Us",
  //     details: [
  //       "0322494556",
  //       "0550102130"
  //     ],
  //     action: "Call Now",
  //     href: "tel:+233322494556",
  //     gradient: "from-peach-500 to-orange-600/60"
  //   }
  // ];

  const services = [
    {
      title: "Research Services",
      description: "Evidence-based research in social, economic, and policy areas",
      icon: <FaRocket className="w-6 h-6" />
    },
    {
      title: "Mentorship Programs",
      description: "Structured guidance for researchers and professionals",
      icon: <FaHandshake className="w-6 h-6" />
    },
    {
      title: "Business Coaching",
      description: "Strategic coaching for startups and SMEs",
      icon: <HiSparkles className="w-6 h-6" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-peach-50 via-white to-orange-50"></div>
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop&crop=center"
            alt="Modern African office environment with professional team"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #f97316 2px, transparent 2px), radial-gradient(circle at 75% 75%, #f97316 1px, transparent 1px)',
          backgroundSize: '50px 50px, 25px 25px'
        }}></div>

        <div className="container-page relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-peach-700 font-semibold text-sm mb-8 shadow-lg border border-peach-200">
              <HiSparkles className="w-4 h-4 mr-2 text-peach-500" />
              Contact Us
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let&apos;s Start a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-orange-600"> Conversation</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Have questions about our research services, mentorship programs, or business coaching? We&apos;d love to hear from you and explore how we can collaborate to drive meaningful impact.
            </p>

            {/* Quick Contact Stats */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-peach-600 mb-2">24hrs</div>
                <div className="text-gray-600 font-medium">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-peach-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-peach-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      {/* <section className="py-20 bg-white">
        <div className="container-page">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Multiple ways to connect with our team of experts
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>

                  <div className="space-y-2 mb-6">
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>

                  <Link
                    href={method.href}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                  >
                    <span>{method.action}</span>
                    <GoArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-peach-50">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                  <p className="text-gray-600 text-lg">
                    Ready to discuss your project? Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-3 font-semibold text-gray-800">Full Name *</label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        className="h-14 rounded-xl border-gray-200 focus:border-peach-500 focus:ring-peach-500"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-3 font-semibold text-gray-800">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="h-14 rounded-xl border-gray-200 focus:border-peach-500 focus:ring-peach-500"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-3 font-semibold text-gray-800">Phone Number</label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="h-14 rounded-xl border-gray-200 focus:border-peach-500 focus:ring-peach-500"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-3 font-semibold text-gray-800">Organization</label>
                      <Input
                        type="text"
                        placeholder="Your organization name"
                        className="h-14 rounded-xl border-gray-200 focus:border-peach-500 focus:ring-peach-500"
                        value={formData.organization}
                        onChange={(e) => handleInputChange('organization', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-3 font-semibold text-gray-800">Service Interest</label>
                    <select
                      className="w-full h-14 rounded-xl border border-gray-200 focus:border-peach-500 focus:ring-peach-500 px-4 bg-white"
                      value={formData.serviceInterest}
                      onChange={(e) => handleInputChange('serviceInterest', e.target.value)}
                    >
                      <option value="">Select a service</option>
                      <option value="research">Research Services</option>
                      <option value="mentorship">Mentorship Programs</option>
                      <option value="coaching">Business Coaching</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-3 font-semibold text-gray-800">Subject *</label>
                    <Input
                      type="text"
                      placeholder="Brief subject of your inquiry"
                      className="h-14 rounded-xl border-gray-200 focus:border-peach-500 focus:ring-peach-500"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-3 font-semibold text-gray-800">Message *</label>
                    <Textarea
                      placeholder="Tell us about your project or inquiry in detail..."
                      className="min-h-32 rounded-xl border-gray-200 focus:border-peach-500 focus:ring-peach-500 resize-none"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-14 bg-gradient-to-r from-peach-600 to-orange-600 hover:from-peach-700 hover:to-orange-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <GoArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8">

              {/* Office Hours */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-peach-500 to-orange-600/60 rounded-xl flex items-center justify-center mr-4">
                    <FaClock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>

              {/* Services Quick Info */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-peach-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="text-peach-600">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center mt-6 text-peach-600 hover:text-peach-700 font-semibold"
                >
                  <span>Learn More</span>
                  <GoArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              {/* Social Media */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-peach-500 to-peach-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="Twitter"
                  >
                    <FaXTwitter className="h-5 w-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-peach-500 to-peach-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-peach-500 to-peach-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="Facebook"
                  >
                    <FiFacebook className="h-5 w-5 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-peach-500 to-peach-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-5 w-5 text-white" />
                  </Link>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  Follow us for the latest updates on our research and community impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Located in the heart of Kumasi, we welcome visitors to our office. Please schedule an appointment in advance.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2!2d-1.6!3d6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJOIDHCsDM2JzAwLjAiVw!5e0!3m2!1sen!2sgh!4v1640000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-none"
              ></iframe>
            </div>

            {/* Map Overlay Info */}
            <div className="p-8 bg-gradient-to-r from-peach-600 to-orange-600 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-peach-100 text-sm">105 Eastwood Avenue, Atonsu-Monaco, Kumasi</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-peach-100 text-sm">0322494556 / 0550102130</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="w-6 h-6 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-peach-100 text-sm">info@survey360.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
