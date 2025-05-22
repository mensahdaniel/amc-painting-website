import Link from "next/link";
import { Metadata } from "next";
import {
  FaLightbulb,
  FaHandshake,
  FaBalanceScale,
  FaGlobe,
  FaChartLine
} from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidBriefcaseAlt2 } from "react-icons/bi";

export const metadata: Metadata = {
  title: "About Us | Survey 360 Research Solutions",
  description: "Learn about Survey 360 Research Solutions, our mission, vision, values, team, and the impact we create through evidence-based research.",
  keywords: ["about", "research organization", "non-profit", "survey 360", "research team"],
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Amara Johnson",
      role: "Executive Director",
      bio: "Dr. Johnson has over 15 years of experience in research methodology and economic development. She holds a Ph.D. in Development Economics from Harvard University.",
      image: "/team/placeholder-1.png"
    },
    {
      name: "Dr. Michael Chen",
      role: "Research Director",
      bio: "Dr. Chen specializes in quantitative research methods and has led numerous large-scale research projects across Africa and Asia. Ph.D. from Stanford University.",
      image: "/team/placeholder-2.png"
    },
    {
      name: "Dr. Sarah Nkrumah",
      role: "Mentorship Program Lead",
      bio: "Dr. Nkrumah has dedicated her career to empowering young researchers through structured mentorship. She holds a Ph.D. in Education from University of Ghana.",
      image: "/team/placeholder-3.png"
    },
    {
      name: "James Osei",
      role: "Business Coaching Director",
      bio: "With an MBA from INSEAD and 12 years of experience in business consulting, James leads our business coaching initiatives for startups and SMEs.",
      image: "/team/placeholder-4.png"
    }
  ];

  const values = [
    {
      icon: <FaLightbulb className="w-12 h-12 text-peach-500" />,
      title: "Excellence",
      description: "We pursue the highest standards in our research methodologies, mentorship programs, and business coaching services."
    },
    {
      icon: <FaHandshake className="w-12 h-12 text-peach-500" />,
      title: "Collaboration",
      description: "We believe in the power of partnerships and collaborative approaches to solving complex problems."
    },
    {
      icon: <FaBalanceScale className="w-12 h-12 text-peach-500" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in our research, mentorship, and coaching practices."
    },
    {
      icon: <IoMdPeople className="w-12 h-12 text-peach-500" />,
      title: "Inclusivity",
      description: "We are committed to diversity, equity, and inclusion in all aspects of our work."
    },
    {
      icon: <FaGlobe className="w-12 h-12 text-peach-500" />,
      title: "Impact",
      description: "We measure our success by the positive change we create in communities and organizations."
    },
    {
      icon: <PiCertificateFill className="w-12 h-12 text-peach-500" />,
      title: "Evidence-Based",
      description: "We ground our work in rigorous research and data-driven insights."
    }
  ];

  const partners
 = [
    { name: "Ghana Ministry of Education", logo: "/partners/placeholder-1.png" },
    { name: "University of Ghana", logo: "/partners/placeholder-2.png" },
    { name: "African Development Foundation", logo: "/partners/placeholder-3.png" },
    { name: "Global Research Alliance", logo: "/partners/placeholder-4.png" },
    { name: "UNICEF Ghana", logo: "/partners/placeholder-5.png" },
    { name: "The World Bank", logo: "/partners/placeholder-6.png" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-peach-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container-page relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-3 inline-block">About Us</span>
            <h1 className="text-peach-900 mb-6 text-4xl md:text-5xl font-serif leading-tight">
              Advancing Knowledge Through <span className="text-peach-600">Evidence-Based</span> Research
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Survey 360 Research Solutions is dedicated to empowering individuals and institutions through cutting-edge research, mentorship, and business coaching.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Our Story</span>
              <h2 className="text-peach-900 mb-6 text-3xl md:text-4xl font-serif">A Journey of Impact and Innovation</h2>
              <div className="w-20 h-1 bg-peach-500 mb-6"></div>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  Founded in 2015, Survey 360 Research Solutions emerged from a vision to bridge the gap between academic research and practical application in African communities and beyond.
                </p>
                <p className="mb-4">
                  What began as a small team of dedicated researchers has grown into a comprehensive not-for-profit organization with a global reach, collaborating with governments, academic institutions, NGOs, and businesses to drive positive change through evidence-based approaches.
                </p>
                <p>
                  Our journey has been marked by a commitment to excellence, integrity, and meaningful impact. Over the years, we have expanded our focus from purely research-based initiatives to include structured mentorship programs and business coaching services, creating a holistic approach to knowledge advancement and capacity building.
                </p>
              </div>
            </div>
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-peach-200 rounded-lg transform translate-x-8 -translate-y-4"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-peach-100 rounded-lg transform -translate-x-8 translate-y-4"></div>
              <div className="absolute inset-4 z-10 shadow-xl rounded-lg overflow-hidden bg-peach-300 flex items-center justify-center">
                <FaChartLine className="w-28 h-28 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Guiding Principles</span>
            <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Our Mission, Vision & Values</h2>
            <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-peach-500">
              <h3 className="text-2xl font-semibold text-peach-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To advance knowledge and empower individuals and institutions through evidence-based research, mentorship, and business coaching, creating sustainable solutions for complex societal challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-peach-500">
              <h3 className="text-2xl font-semibold text-peach-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where evidence-based research drives decision-making at all levels, where mentorship bridges knowledge gaps, and where businesses thrive through informed strategies, collectively contributing to equitable and sustainable development.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-peach-800 mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-peach-700 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Our People</span>
            <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Leadership Team</h2>
            <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Our diverse team of experts brings together decades of experience in research, education, mentorship, and business development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="h-60 bg-peach-200 relative flex items-center justify-center">
                  <BiSolidBriefcaseAlt2 className="w-20 h-20 text-peach-500 absolute transition-all duration-300 group-hover:opacity-0" />
                  {/* Uncomment when you have actual images */}
                  {/* <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover" 
                  /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-peach-800">{member.name}</h3>
                  <p className="text-peach-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-20 bg-gray-50">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Organizational Structure</span>
            <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Governance</h2>
            <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-peach-800 mb-4">Board of Directors</h3>
              <p className="text-gray-700 mb-4">
                Our organization is governed by a diverse board of directors comprising experts in research, education, business, and community development. The board provides strategic direction and ensures our work aligns with our mission and values.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-peach-800 mb-4">Advisory Council</h3>
              <p className="text-gray-700 mb-4">
                Our advisory council brings together thought leaders from various disciplines to provide insights and guidance on our research agenda, mentorship programs, and business coaching services.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-peach-800 mb-4">Research Ethics Committee</h3>
              <p className="text-gray-700">
                All our research activities are overseen by an independent ethics committee that ensures adherence to the highest ethical standards and protects the rights and welfare of research participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Collaborators</span>
            <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Our Partners & Affiliations</h2>
            <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              We collaborate with a diverse range of organizations committed to advancing knowledge and creating positive impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="h-24 bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                <div className="text-center">
                  {/* Uncomment when you have actual logos */}
                  {/* <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    width={120} 
                    height={60} 
                    className="object-contain h-12" 
                  /> */}
                  <p className="text-gray-700 text-sm mt-2">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-peach-700 text-white relative overflow-hidden">
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
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Us in Creating Positive Change</h2>
            <p className="text-xl mx-auto mb-10 text-peach-100 leading-relaxed">
              Whether you&apos;re interested in partnering with us, participating in our programs, or supporting our mission, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-peach-700 hover:bg-peach-50 transition-colors rounded-md px-8 py-4 font-medium inline-block">
                Contact Our Team
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors rounded-md px-8 py-4 font-medium inline-block">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}