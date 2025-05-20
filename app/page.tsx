import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-peach-50">
        <div className="container-page">
          <div className="max-w-3xl mb-12 animate-fade-in">
            <h1 className="mb-6 text-peach-900">Empowering Through Research & Mentorship</h1>
            <p className="text-xl text-foreground mb-8">
              Survey 360 Research Solutions is dedicated to advancing knowledge and empowering individuals and institutions through evidence-based research, mentorship, and business coaching.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="button-brand">
                About Our Mission
              </Link>
              <Link href="/contact" className="bg-white border border-peach-300 text-peach-600 hover:bg-peach-50 rounded-md px-4 py-2 font-medium transition-colors">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 bg-background">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-peach-900 mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We offer a comprehensive range of services designed to drive innovation, growth, and sustainable development.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 animate-slide-up">
            <div className="rounded-lg bg-white p-8 shadow-md border border-gray-100 hover:border-peach-200 transition-colors">
              <div className="w-12 h-12 bg-peach-100 text-peach-700 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m4 6 8-4 8 4" /><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" /><path d="M14 22v-4a2 2 0 0 0-4 0v4" /><path d="M18 5v17" /><path d="M6 5v17" /></svg>
              </div>
              <h3 className="mb-3 text-xl text-peach-700">Research Services</h3>
              <p className="text-gray-600 mb-4">
                Cutting-edge research in social, economic, environmental, and political spheres to inform policy and drive institutional reforms.
              </p>
              <Link href="/services/research" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md border border-gray-100 hover:border-peach-200 transition-colors">
              <div className="w-12 h-12 bg-peach-100 text-peach-700 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
              </div>
              <h3 className="mb-3 text-xl text-peach-700">Mentorship Programs</h3>
              <p className="text-gray-600 mb-4">
                Empowering individuals and communities with knowledge, skills, and guidance through structured mentorship programs.
              </p>
              <Link href="/services/mentorship" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-md border border-gray-100 hover:border-peach-200 transition-colors">
              <div className="w-12 h-12 bg-peach-100 text-peach-700 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
              <h3 className="mb-3 text-xl text-peach-700">Business Coaching</h3>
              <p className="text-gray-600 mb-4">
                Tailored coaching services to help entrepreneurs, startups, and SMEs achieve sustainable growth and success.
              </p>
              <Link href="/services/coaching" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact section */}
      <section className="py-16 bg-peach-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-peach-900 mb-4">Our Impact</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              At Survey 360 Research, we measure our success by the positive change we create in communities and organizations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-peach-600 mb-2">25+</div>
              <p className="text-gray-600">Research Projects</p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-peach-600 mb-2">500+</div>
              <p className="text-gray-600">Individuals Mentored</p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-peach-600 mb-2">12</div>
              <p className="text-gray-600">Community Partnerships</p>
            </div>

            <div className="text-center p-6">
              <div className="text-4xl font-bold text-peach-600 mb-2">8</div>
              <p className="text-gray-600">Policy Contributions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-peach-600 text-white">
        <div className="container-page text-center">
          <h2 className="mb-6">Ready to Partner with Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-peach-100">
            Whether you're interested in our research services, mentorship programs, or business coaching, we're here to help you succeed.
          </p>
          <Link href="/contact" className="bg-white text-peach-700 hover:bg-peach-100 transition-colors rounded-md px-6 py-3 font-medium inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
