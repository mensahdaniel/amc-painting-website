import Link from "next/link";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="py-20 bg-peach-700 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop&crop=center"
          alt="African team collaborating and transforming research capabilities"
          fill
          className="object-cover opacity-20"
        />
      </div>
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container-page relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Transform Your Research Capabilities?</h2>
          <p className="text-xl mx-auto mb-10 text-peach-100 leading-relaxed">
            Whether you&apos;re interested in our research services, mentorship programs, or business coaching, our team of experts is ready to partner with you to achieve exceptional results.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-white text-peach-700 hover:bg-peach-50 transition-colors rounded-md px-8 py-4 font-medium inline-block">
              Explore Our Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors rounded-md px-8 py-4 font-medium inline-block">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
