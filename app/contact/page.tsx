import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Business Address Section - No Border */}
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-lg">Survey 360 Research Solutions</p>
          <p>Accra, Ghana</p>
          <p>Email: info@survey360.org</p>
          <p>Phone: +233 123 456 789</p>
        </div>

        {/* Contact Form Section */}
        <form className="space-y-6">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <textarea
            placeholder="Your Message"
            className="w-full rounded-md px-3 py-2 h-32 bg-gray-100 focus:outline-none"
          />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  )
}
