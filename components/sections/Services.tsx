import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { FaChartLine, FaUsers, FaBriefcase, FaLightbulb, FaGraduationCap } from "react-icons/fa";
import { HiSparkles, HiTrendingUp } from "react-icons/hi";

const Services = () => {
  const services = [
    {
      title: "Research Services",
      description: "Cutting-edge research in social, economic, environmental, and political spheres to inform policy and drive institutional reforms.",
      features: ["Policy Research", "Data Analysis", "Impact Assessment", "Strategic Planning"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      icon: <FaChartLine className="w-8 h-8" />,
      href: "/services/research",
      gradient: "from-peach-600 to-peach-400",
      bgGradient: "from-peach-50 to-peach-50"
    },
    {
      title: "Mentorship Programs",
      description: "Empowering individuals and communities with knowledge, skills, and guidance through structured mentorship programs.",
      features: ["Academic Mentoring", "Career Guidance", "Skill Development", "Leadership Training"],
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=center",
      icon: <FaUsers className="w-8 h-8" />,
      href: "/services/mentorship",
      gradient: "from-peach-600 to-peach-400",
      bgGradient: "from-green-50 to-peach-50"
    },
    {
      title: "Business Coaching",
      description: "Tailored coaching services to help entrepreneurs, startups, and SMEs achieve sustainable growth and success.",
      features: ["Strategic Planning", "Growth Strategies", "Performance Optimization", "Market Analysis"],
      image: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=600&h=400&fit=crop&crop=center",
      icon: <FaBriefcase className="w-8 h-8" />,
      href: "/services/coaching",
      gradient: "from-peach-600 to-peach-400",
      bgGradient: "from-purple-50 to-peach-50"
    }
  ];

  const stats = [
    { number: "50+", label: "Research Projects", icon: <FaLightbulb className="w-6 h-6" /> },
    { number: "200+", label: "Mentees Supported", icon: <FaGraduationCap className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <HiTrendingUp className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-peach-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-peach-200/30 to-orange-200/30 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-peach-200/30 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-peach-700 font-semibold text-sm mb-6 shadow-lg border border-peach-200">
            <HiSparkles className="w-4 h-4 mr-2 text-peach-500" />
            What We Offer
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-orange-600">Services</span>
            <br />for Your Success
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            We offer a comprehensive range of services designed to drive innovation, growth, and sustainable development for individuals and organizations across Africa and beyond.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                <div className="text-peach-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className={`group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}>
              {/* Image Section */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                  {/* Floating icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/20">
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2">
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.bgGradient} rounded-full text-gray-700 font-medium text-sm mb-6`}>
                  {service.icon}
                  <span className="ml-2">Professional Service</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{service.title}</h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={service.href}
                  className={`group/btn inline-flex items-center px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <span>Learn More</span>
                  <GoArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Organization?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let&apos;s collaborate to create evidence-based solutions that drive meaningful impact in your community or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-peach-600 to-orange-600 text-white hover:from-peach-700 hover:to-orange-700 rounded-xl px-8 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <span>Start Your Journey</span>
                <GoArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white border-2 border-peach-300 text-peach-600 hover:bg-peach-50 rounded-xl px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
