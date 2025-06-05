import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  FaLightbulb,
  FaHandshake,
  FaBalanceScale,
  FaGlobe,
  FaBookOpen
} from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import { HiAcademicCap } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";

export const metadata: Metadata = {
  title: "About Us | Survey 360 Research Solutions",
  description: "Learn about Survey 360 Research Solutions, our mission, vision, values, team, and the impact we create through evidence-based research.",
  keywords: ["about", "research organization", "non-profit", "survey 360", "research team"],
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Angela Kyerewaa Ayisi-Addo",
      role: "Head of Operations (Training and Field Works)",
      bio: "Angela holds a Ph.D. in Adult Education & Human Resource studies (University of Ghana), MPhil in Adult Education (University of Ghana), BA in Philosophy & History (University of Ghana) and a Diploma in Human Resource Management. Angela also studied as a DAAD scholar at the Julius Maximillian University of Wurzburg, Germany.",
      image: "/images/team/angela.png",
      specializations: ["Adult Education", "Human Resource Studies", "Training & Development"],
      education: ["Ph.D. in Adult Education & Human Resource Studies - University of Ghana", "DAAD Scholar - Julius Maximillian University of Wurzburg, Germany"]
    },
    {
      name: "Dr. Michael Karikari Appiah",
      role: "Director of Operations",
      bio: "As an accomplished Scholar, Dr. Karikari obtained his Doctor of Philosophy (Ph. D) Degree from the University Malaysia, Terengganu, a Master of Science (MSc.) from Coventry University (United Kingdom), a Commonwealth Executive Master's in Public Administration (CEMPA) from KNUST, Post Graduate Diploma from GIMPA, and a Bachelor of Art Degree from the University for Development Studies (UDS, Tamale).",
      image: "/images/team/michael.png",
      specializations: ["Public Administration", "Research Management", "Academic Publishing"],
      education: ["Ph.D. - University Malaysia, Terengganu", "MSc. - Coventry University (UK)", "CEMPA - KNUST"],
      publications: "50+ articles in high-impact journals including Emerald, Elsevier, Sage, and Taylor & Francis"
    },
    {
      name: "Deborah Amoako",
      role: "Head of Human Resources and Audit",
      bio: "Deborah Amoako is a seasoned professional with over 15 years of experience in Human Resources and Audit. She holds a Bachelor of Business Administration (BBA) degree in Human Resource Management from the University of Ghana, and a Master of Science (MSc) in Management and Human Resource Strategy from KNUST.",
      image: "/images/team/deborah.png",
      specializations: ["Human Resource Management", "Audit & Compliance", "Organizational Development"],
      education: ["MSc. in Management and Human Resource Strategy - KNUST", "BBA in Human Resource Management - University of Ghana"],
      experience: "15+ years across Ghana Education Service, Ghana Police Service, and Ghana Revenue Authority"
    }
  ];

  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8 text-peach-500" />,
      title: "Excellence",
      description: "We pursue the highest standards in our research methodologies, mentorship programs, and business coaching services.",
      gradient: "from-peach-50 to-orange-50"
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-peach-500" />,
      title: "Collaboration",
      description: "We believe in the power of partnerships and collaborative approaches to solving complex problems.",
      gradient: "from-blue-50 to-peach-50"
    },
    {
      icon: <FaBalanceScale className="w-8 h-8 text-peach-500" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in our research, mentorship, and coaching practices.",
      gradient: "from-green-50 to-peach-50"
    },
    {
      icon: <IoMdPeople className="w-8 h-8 text-peach-500" />,
      title: "Inclusivity",
      description: "We are committed to diversity, equity, and inclusion in all aspects of our work.",
      gradient: "from-purple-50 to-peach-50"
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-peach-500" />,
      title: "Global Impact",
      description: "We measure our success by the positive change we create in communities and organizations worldwide.",
      gradient: "from-teal-50 to-peach-50"
    },
    {
      icon: <PiCertificateFill className="w-8 h-8 text-peach-500" />,
      title: "Evidence-Based",
      description: "We ground our work in rigorous research and data-driven insights for sustainable solutions.",
      gradient: "from-indigo-50 to-peach-50"
    }
  ];

  const partners = [
    { name: "University of Ghana", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=80&fit=crop&crop=center" },
    { name: "KNUST", logo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=100&h=80&fit=crop&crop=center" },
    { name: "Coventry University", logo: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=100&h=80&fit=crop&crop=center" },
    { name: "University Malaysia", logo: "https://images.unsplash.com/photo-1591040248420-3066d1c1b4d3?w=100&h=80&fit=crop&crop=center" },
    { name: "GIMPA", logo: "https://images.unsplash.com/photo-1574932142425-67da20c5b6ba?w=100&h=80&fit=crop&crop=center" },
    { name: "Ghana Education Service", logo: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=100&h=80&fit=crop&crop=center" }
  ];

  const milestones = [
    { year: "2015", title: "Foundation", description: "Survey 360 Research Solutions was established with a mission to advance knowledge through research." },
    { year: "2017", title: "First Major Research", description: "Completed our first comprehensive community development research project." },
    { year: "2019", title: "Mentorship Launch", description: "Launched our flagship mentorship program for young researchers and entrepreneurs." },
    { year: "2021", title: "Business Coaching", description: "Expanded services to include business coaching for SMEs and startups." },
    { year: "2023", title: "International Recognition", description: "Received recognition for outstanding contribution to research and development." }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-peach-50 via-white to-orange-50"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #f97316 2px, transparent 2px), radial-gradient(circle at 75% 75%, #f97316 1px, transparent 1px)', backgroundSize: '50px 50px, 25px 25px' }}></div>

        <div className="container-page relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-peach-100 rounded-full text-peach-700 font-medium text-sm mb-6">
              <FaBookOpen className="w-4 h-4 mr-2" />
              About Survey 360 Research Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-orange-600"> Knowledge</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              We are a not-for-profit research and development organization dedicated to advancing knowledge and empowering individuals and institutions through evidence-based research, mentorship, and business coaching.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="bg-peach-500 text-white hover:bg-peach-500/90 rounded-lg px-8 py-4 font-semibold transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl">
                <span>Our Services</span>
                <GoArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="bg-white border-2 border-peach-300 text-peach-600 hover:bg-peach-50 rounded-lg px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-peach-500 to-orange-500/50 rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <FaLightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To advance knowledge and empower individuals and institutions through high-quality, evidence-based research, comprehensive mentorship programs, and strategic business coaching services.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-peach-500 to-orange-500/50 rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <FaGlobe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading catalyst for positive change through research excellence, fostering innovation, and building capacity across communities and organizations globally.
              </p>
            </div>

            {/* Impact */}
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 bg-gradient-to-br from-peach-500 to-orange-500/50 rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <IoMdPeople className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating sustainable solutions that bridge the gap between research and practice, fostering growth, and empowering the next generation of leaders and innovators.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="text-center mb-16">
            <span className="text-peach-600 font-semibold tracking-wider uppercase text-sm mb-2 inline-block">Core Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Drives Us Forward</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-peach-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`bg-gradient-to-br ${value.gradient} p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group`}>
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-peach-50">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="text-peach-600 font-semibold tracking-wider uppercase text-sm mb-2 inline-block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Milestones & Growth</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-peach-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <span className="text-2xl font-bold text-peach-600">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-peach-500 rounded-full mt-2 mr-8 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="text-peach-600 font-semibold tracking-wider uppercase text-sm mb-2 inline-block">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Excellence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-peach-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Our leadership team brings together decades of experience in research, education, human resources, and organizational development, driving our mission forward with expertise and passion.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
                <div className="h-80 relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-peach-600 font-semibold mb-4">{member.role}</p>

                  {member.publications && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-peach-50 rounded-lg">
                      <p className="text-sm text-gray-700 font-medium">{member.publications}</p>
                    </div>
                  )}

                  {member.experience && (
                    <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-peach-50 rounded-lg">
                      <p className="text-sm text-gray-700 font-medium">{member.experience}</p>
                    </div>
                  )}

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

                  {member.specializations && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specializations.map((spec, specIndex) => (
                          <span key={specIndex} className="px-3 py-1 bg-peach-100 text-peach-700 text-xs rounded-full font-medium">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {member.education && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <HiAcademicCap className="w-4 h-4 mr-1" />
                        Key Education:
                      </h4>
                      <ul className="space-y-1">
                        {member.education.map((edu, eduIndex) => (
                          <li key={eduIndex} className="text-xs text-gray-600 leading-relaxed">• {edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-peach-600 to-orange-600 text-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-peach-100 mb-8 leading-relaxed">
                Ready to collaborate or learn more about our research, mentorship, and coaching services?
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaGlobe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-peach-100">
                      105 Eastwood Avenue<br />
                      Off Lake Bosomtwe Road<br />
                      Atonsu-Monaco, Kumasi<br />
                      Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FaHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Contact</h3>
                    <p className="text-peach-100">
                      TEL: 0322494556 / 0550102130<br />
                      EMAIL: info@survey360.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
                <p className="text-peach-100 mb-8">
                  Join us in making a difference through research, mentorship, and strategic business development.
                </p>
                <Link
                  href="/contact"
                  className="bg-white text-peach-600 hover:bg-peach-50 rounded-lg px-8 py-4 font-bold transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-xl"
                >
                  <span>Contact Us Today</span>
                  <GoArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="text-peach-600 font-semibold tracking-wider uppercase text-sm mb-2 inline-block">Collaborations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Academic & Strategic Partners</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-peach-500 to-orange-500 mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              We collaborate with leading institutions and organizations to advance research and create meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <div className="h-24 bg-white rounded-2xl flex items-center justify-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="relative w-full h-12 rounded overflow-hidden">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                <p className="text-gray-700 text-sm text-center mt-3 font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
