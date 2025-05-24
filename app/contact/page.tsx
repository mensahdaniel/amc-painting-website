// app/contact/page.tsx or wherever your contact page lives
"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Header section */}
      <section className="w-full bg-red-100 py-16 text-center">
        <p className="text-sm">Contact Us</p>
        <h1 className="text-3xl font-bold mt-2">Get in Touch With Our Team</h1>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
          Have questions about our research services, mentorship programs, or business coaching? We’d love to hear from you.
        </p>
      </section>

      {/* Contact form and info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-4 py-16">
        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border-input text-sm rounded-md border bg-transparent px-3 py-2 shadow-xs"
          />
          <Button type="submit" className="w-fit bg-pink-500 text-white hover:bg-pink-600">
            Send Message
          </Button>
        </form>

        {/* Contact Info */}
        <div className="text-center md:text-left flex flex-col justify-center gap-2 text-sm">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p>Survey 360 Research Solutions</p>
          <p>Accra, Ghana</p>
          <p>Email: <a href="mailto:info@survey360.org" className="underline">info@survey360.org</a></p>
          <p>Phone: +233 123 456 789</p>
        </div>
      </section>
    </div>
  )
}
