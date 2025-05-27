import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-peach-50">
        {/* Background pattern instead of image that might be missing */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      <div className="container-page relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-peach-900 font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Advancing Knowledge Through <span className="text-peach-600">Excellence</span> in Research
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Survey 360 Research Solutions is a not-for-profit organization dedicated to advancing knowledge and empowering individuals and institutions through evidence-based research, mentorship, and business coaching.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="bg-peach-600 text-white hover:bg-peach-700 rounded-md px-6 py-3 font-medium transition-colors inline-flex items-center">
                <span>Discover Our Mission</span>
                <GoArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/contact" className="bg-white border border-peach-300 text-peach-600 hover:bg-peach-50 rounded-md px-6 py-3 font-medium transition-colors">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative h-[450px] w-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-peach-200 rounded-lg transform translate-x-8 -translate-y-4"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-peach-100 rounded-lg transform -translate-x-8 translate-y-4"></div>
              <div className="absolute inset-4 z-10 shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1742134516442-2f51982ce675?w=400&h=400&fit=crop&crop=center"
                  alt="African research team collaborating on data analysis"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-peach-600/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
