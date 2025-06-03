import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Director, Community Foundation",
      organization: "Ghana Development Initiative",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b602?w=200&h=200&fit=crop&crop=face",
      quote: "Survey 360 Research Solutions has been an invaluable partner in our community development initiatives. Their research insights and mentorship programs have transformed how we approach sustainable development.",
      rating: 5,
      category: "Research Partnership"
    },
    {
      name: "Prof. Michael Kofi",
      role: "Policy Director",
      organization: "West African Research Institute",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      quote: "The quality of research and strategic insights provided by Survey 360 has directly influenced policy decisions across multiple sectors. Their evidence-based approach is exactly what our region needs.",
      rating: 5,
      category: "Policy Research"
    },
    {
      name: "Ama Asante",
      role: "PhD Candidate",
      organization: "University of Ghana",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      quote: "The mentorship program completely transformed my research approach. The guidance and support I received helped me publish my first paper in an international journal.",
      rating: 5,
      category: "Mentorship Program"
    },
    {
      name: "James Okyere",
      role: "CEO & Founder",
      organization: "TechStart Ghana",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      quote: "The business coaching services helped scale our startup from 5 to 50 employees. The strategic insights and growth frameworks were game-changers for our business.",
      rating: 5,
      category: "Business Coaching"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-peach-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-peach-200/30 to-orange-200/30 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-200/30 to-peach-200/30 rounded-full translate-x-40 translate-y-40 blur-3xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-peach-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/6 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-peach-700 font-semibold text-sm mb-6 shadow-lg border border-peach-200">
            <HiSparkles className="w-4 h-4 mr-2 text-peach-500" />
            Client Testimonials
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-orange-600">Partners</span>
            <br />Say About Us
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Discover how our research, mentorship, and business coaching services have transformed organizations and empowered individuals across Africa and beyond.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:scale-105">
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-peach-100 to-orange-100 rounded-full text-peach-700 font-medium text-sm mb-6">
                  {testimonial.category}
                </div>

                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-peach-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaQuoteLeft className="w-6 h-6 text-white" />
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="w-5 h-5 text-yellow-500 mr-1" />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">{testimonial.rating}.0</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 relative shadow-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-peach-600 font-semibold">{testimonial.role}</p>
                    <p className="text-gray-600 text-sm">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Organizations
            </h3>
            <p className="text-gray-600 text-lg">
              Building lasting partnerships through excellence and impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-peach-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                98%
              </div>
              <div className="text-gray-700 font-medium">Client Satisfaction</div>
            </div>

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-peach-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-700 font-medium">Research Projects</div>
            </div>

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-peach-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <div className="text-gray-700 font-medium">Partner Organizations</div>
            </div>

            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-peach-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-gray-700 font-medium">Lives Impacted</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-peach-600 to-orange-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-peach-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s collaborate to create evidence-based solutions that drive meaningful impact in your organization or community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-peach-600 hover:bg-peach-50 rounded-xl px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Your Journey
              </a>
              <a
                href="/services"
                className="bg-white/20 border-2 border-white text-white hover:bg-white/30 rounded-xl px-8 py-4 font-semibold transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
