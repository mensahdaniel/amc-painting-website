import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (

    <>
      <section className="relative py-16 md:py-24 bg-peach-50 overflow-hidden">
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

            {/* Business Address Section - No Border */}
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-lg">Survey 360 Research Solutions</p>
              <p>Accra, Ghana</p>
              <p>Email: info@survey360.org</p>
              <p>Phone: +233 123 456 789</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
