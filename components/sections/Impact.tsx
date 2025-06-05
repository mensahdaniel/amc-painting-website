import Image from "next/image";
import { FaChartLine, FaUsers, FaHandshake, FaGlobe, FaAward, FaRocket } from "react-icons/fa";
import { HiSparkles, HiTrendingUp } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const Impact = () => {
  const impactStats = [
    {
      number: "50+",
      label: "Research Publications",
      description: "High-impact studies published in prestigious journals",
      icon: <FaChartLine className="w-8 h-8" />,
      gradient: "from-peach-600/20 to-peach-400/80",
      bgGradient: "from-blue-50 to-peach-50"
    },
    {
      number: "500+",
      label: "Lives Transformed",
      description: "Individuals empowered through our mentorship programs",
      icon: <FaUsers className="w-8 h-8" />,
      gradient: "from-peach-600/20 to-peach-400/80",
      bgGradient: "from-green-50 to-peach-50"
    },
    {
      number: "25+",
      label: "Strategic Partnerships",
      description: "Collaborations with leading institutions worldwide",
      icon: <FaHandshake className="w-8 h-8" />,
      gradient: "from-peach-600/20 to-peach-400/80",
      bgGradient: "from-purple-50 to-peach-50"
    },
    {
      number: "15+",
      label: "Policy Contributions",
      description: "Research-driven policy recommendations implemented",
      icon: <FaGlobe className="w-8 h-8" />,
      gradient: "from-peach-600/20 to-peach-400/80",
      bgGradient: "from-indigo-50 to-peach-50"
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "50+ peer-reviewed publications in top-tier journals including Emerald, Elsevier, Sage, and Taylor & Francis",
      icon: <FaAward className="w-6 h-6" />,
      color: "text-peach-600"
    },
    {
      title: "Global Recognition",
      description: "International partnerships with universities in Ghana, UK, Germany, and Malaysia",
      icon: <FaGlobe className="w-6 h-6" />,
      color: "text-peach-600"
    },
    {
      title: "Innovation Leadership",
      description: "Pioneering research methodologies in adult education and human resource development",
      icon: <FaRocket className="w-6 h-6" />,
      color: "text-peach-600"
    },
    {
      title: "Community Impact",
      description: "Direct positive impact on communities through evidence-based research and mentorship",
      icon: <HiTrendingUp className="w-6 h-6" />,
      color: "text-peach-600"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-peach-900 to-orange-900"></div>
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&h=800&fit=crop&crop=center"
          alt="African community development and growth"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, #ffffff 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)',
        backgroundSize: '50px 50px, 25px 25px'
      }}></div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-peach-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
            <HiSparkles className="w-4 h-4 mr-2 text-peach-300" />
            Making A Difference
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-300 to-orange-300">Measurable</span>
            <br />Impact
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-gray-200 leading-relaxed">
            At Survey 360 Research, we measure our success by the positive change we create in communities and organizations worldwide through evidence-based research and strategic partnerships.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-white mb-3">{stat.label}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">{stat.description}</p>

                {/* Animated line */}
                <div className="w-full h-0.5 bg-white/20 mt-6 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${stat.gradient} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Achievements</h3>
            <p className="text-gray-200 text-lg">Recognition and milestones that define our journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 ${achievement.color}`}>
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Preview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Real Stories, Real Impact
            </h3>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Our research doesn&apos;t just inform policy—it transforms lives. From empowering young researchers to helping SMEs achieve sustainable growth, every project creates ripple effects of positive change.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-peach-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Research Excellence</h4>
                  <p className="text-gray-300">Publications driving policy change across West Africa</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-peach-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Mentorship Success</h4>
                  <p className="text-gray-300">500+ individuals empowered with career guidance and skills</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-peach-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Business Growth</h4>
                  <p className="text-gray-300">SMEs achieving 200%+ growth through strategic coaching</p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-peach-500 to-orange-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span>Learn Our Story</span>
              <GoArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1645263012668-a6617115f9b9?w=600&h=450&fit=crop&crop=center"
                alt="Research team analyzing data for community impact"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Floating success metric */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-peach-600/20 to-peach-500 rounded-xl flex items-center justify-center">
                    <HiTrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-peach-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
