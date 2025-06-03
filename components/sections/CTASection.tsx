import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { FaRocket, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const CTASection = () => {
  const features = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Research Excellence",
      description: "Evidence-based insights that drive policy and innovation"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Expert Mentorship",
      description: "Personalized guidance from seasoned professionals"
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Strategic Growth",
      description: "Business coaching that delivers measurable results"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-peach-600 via-orange-600 to-peach-700"></div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image 
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop&crop=center"
          alt="African team collaborating and transforming research capabilities"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div style={{ 
          backgroundImage: 'radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)', 
          backgroundSize: '60px 60px, 30px 30px' 
        }} className="w-full h-full animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-orange-300/50 rounded-full animate-ping"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>

      <div className="container-page relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8 border border-white/30">
              <HiSparkles className="w-4 h-4 mr-2" />
              Ready to Get Started?
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Transform Your
              <br />
              <span className="text-orange-200">Research Capabilities</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              Whether you&apos;re interested in our research services, mentorship programs, or business coaching, our team of experts is ready to partner with you to achieve exceptional results and drive meaningful impact.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/services" 
                className="group bg-white text-peach-600 hover:bg-orange-50 rounded-2xl px-10 py-5 font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <FaRocket className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Our Services</span>
                <GoArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className="group bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 rounded-2xl px-10 py-5 font-bold text-lg transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <FaHandshake className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/25 transition-all duration-300 group-hover:scale-105 shadow-xl">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Contact Info */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Start the Conversation</h3>
              <p className="text-white/90 mb-6 text-lg">
                Ready to make a difference? Get in touch with our team today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80">
                <div className="flex items-center">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:info@survey360.org" className="ml-2 hover:text-white transition-colors">
                    info@survey360.org
                  </a>
                </div>
                <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center">
                  <span className="font-semibold">Phone:</span>
                  <a href="tel:+233322494556" className="ml-2 hover:text-white transition-colors">
                    0322494556
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/20 rounded-full translate-x-40 translate-y-40 blur-3xl"></div>
    </section>
  );
};

export default CTASection;