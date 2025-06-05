import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { FaPlay, FaChartLine, FaUsers, FaLightbulb } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const HeroSection = () => {
  const stats = [
    { number: "50+", label: "Research Publications", icon: <FaChartLine className="w-5 h-5" /> },
    { number: "200+", label: "Mentorship Success Stories", icon: <FaUsers className="w-5 h-5" /> },
    { number: "15+", label: "Years of Excellence", icon: <FaLightbulb className="w-5 h-5" /> }
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach-50 via-white to-orange-50"></div>
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #f97316 2px, transparent 2px), radial-gradient(circle at 75% 75%, #f97316 1px, transparent 1px)',
          backgroundSize: '60px 60px, 30px 30px'
        }} className="w-full h-full"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-peach-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>

      <div className="container-page relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-peach-700 font-semibold text-sm mb-8 shadow-lg border border-peach-200">
              <HiSparkles className="w-4 h-4 mr-2 text-peach-500" />
              Leading Research & Development Organization
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Advancing</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-600 via-orange-500 to-peach-700">
                Knowledge
              </span>
              <br />
              <span className="text-gray-900">Through Excellence</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              Empowering individuals and institutions through <strong className="text-peach-600">evidence-based research</strong>,
              strategic mentorship, and transformative business coaching.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/services"
                className="group bg-gradient-to-r from-peach-600 to-orange-600 text-white hover:from-peach-700 hover:to-orange-700 rounded-xl px-8 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Explore Our Services</span>
                <GoArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="group bg-white/90 backdrop-blur-sm border-2 border-peach-300 text-peach-700 hover:bg-peach-50 rounded-xl px-8 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <FaPlay className="mr-2 w-4 h-4" />
                <span>Our Story</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-peach-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative hidden lg:block">
            <div className="relative h-[600px] w-[500px] mx-auto">
              {/* Background shapes */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-peach-200 to-orange-200 rounded-3xl transform rotate-12 opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100 to-peach-100 rounded-3xl transform -rotate-12 opacity-60"></div>

              {/* Main image container */}
              <div className="absolute inset-8 z-10 shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1653565685060-e15e492a7fda?w=1200&h=800&fit=crop&crop=center"
                  alt="African research team collaborating on data analysis"
                  fill
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peach-900/40 via-transparent to-transparent"></div>

                {/* Floating card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                  <h3 className="font-bold text-gray-900 mb-2">Research Excellence</h3>
                  <p className="text-sm text-gray-600">Driving innovation through evidence-based methodologies and collaborative partnerships.</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-16 left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-bounce">
                <FaChartLine className="w-6 h-6 text-peach-600" />
              </div>

              <div className="absolute bottom-32 right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 animate-pulse">
                <FaUsers className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
