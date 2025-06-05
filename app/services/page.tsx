import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FaChartLine,
  FaUsers,
  FaBullhorn,
  FaHandshake,
  FaGraduationCap,
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";
import {
  HiOutlineAcademicCap,
  HiOutlineClipboardList
} from "react-icons/hi";
import {
  MdTrendingUp,
  MdGroup,
  MdAssessment
} from "react-icons/md";
import {
  TbTargetArrow,
  TbBulb
} from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";

export const metadata: Metadata = {
  title: "Our Services | Survey 360 Research Solutions",
  description: "Explore our comprehensive range of services including research, mentorship programs, and business coaching designed to drive innovation and sustainable development.",
  keywords: ["research services", "mentorship programs", "business coaching", "non-profit services", "survey 360"],
};

export default function ServicesPage() {
  const researchAreas = [
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Economic Development Research",
      description: "Analyzing economic trends, policy impacts, and development strategies for sustainable growth."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Social Impact Studies",
      description: "Evaluating social programs, community interventions, and their effects on target populations."
    },
    {
      icon: <MdAssessment className="w-6 h-6" />,
      title: "Policy Analysis & Evaluation",
      description: "Comprehensive assessment of public policies and their implementation effectiveness."
    },
    {
      icon: <FaBullhorn className="w-6 h-6" />,
      title: "Environmental Research",
      description: "Investigating environmental challenges and developing evidence-based sustainability solutions."
    }
  ];

  const mentorshipPrograms = [
    {
      icon: <HiOutlineAcademicCap className="w-6 h-6" />,
      title: "Research Mentorship",
      description: "Guiding emerging researchers through methodologies, publication processes, and career development.",
      target: "Graduate students, early-career researchers"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Academic Development",
      description: "Supporting students and young professionals in academic and professional skill building.",
      target: "University students, recent graduates"
    },
    {
      icon: <MdGroup className="w-6 h-6" />,
      title: "Community Leadership",
      description: "Empowering community leaders with tools and knowledge for effective local development.",
      target: "Community organizers, local leaders"
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Professional Networking",
      description: "Facilitating connections between mentees and industry professionals for career advancement.",
      target: "Young professionals, career changers"
    }
  ];

  const coachingServices = [
    {
      icon: <TbTargetArrow className="w-6 h-6" />,
      title: "Strategic Planning",
      description: "Developing comprehensive business strategies aligned with market opportunities and organizational goals."
    },
    {
      icon: <MdTrendingUp className="w-6 h-6" />,
      title: "Business Growth",
      description: "Scaling strategies for startups and SMEs to achieve sustainable growth and market expansion."
    },
    {
      icon: <TbBulb className="w-6 h-6" />,
      title: "Innovation Consulting",
      description: "Fostering innovation culture and implementing creative solutions for business challenges."
    },
    {
      icon: <HiOutlineClipboardList className="w-6 h-6" />,
      title: "Operational Excellence",
      description: "Optimizing business processes and systems for improved efficiency and productivity."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a comprehensive assessment of your needs, goals, and current situation."
    },
    {
      step: "02",
      title: "Customized Strategy",
      description: "Our experts develop a tailored approach that aligns with your specific objectives and context."
    },
    {
      step: "03",
      title: "Implementation Support",
      description: "We provide ongoing guidance and support throughout the implementation process."
    },
    {
      step: "04",
      title: "Impact Measurement",
      description: "Regular evaluation and feedback ensure measurable outcomes and continuous improvement."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-peach-50 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop&crop=center"
            alt="African professionals providing expert services and consultation"
            fill
            className="object-cover opacity-8"
          />
        </div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container-page relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-3 inline-block">Our Services</span>
            <h1 className="text-peach-900 mb-6 text-4xl md:text-5xl font-serif leading-tight">
              Empowering Change Through <span className="text-peach-600">Expert Services</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We offer comprehensive research, mentorship, and business coaching services designed to drive innovation,
              foster growth, and create sustainable impact for individuals, organizations, and communities.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-peach-600 text-white hover:bg-peach-700 transition-colors rounded-md px-8 py-4 font-medium inline-flex items-center">
                Get Started Today
                <GoArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="#services-overview" className="bg-white border border-peach-300 text-peach-600 hover:bg-peach-50 transition-colors rounded-md px-8 py-4 font-medium">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="overview" className="py-20 bg-white">
        <div className="container-page">
          <div className="text-center mb-16">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">What We Offer</span>
            <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Comprehensive Service Portfolio</h2>
            <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Our integrated approach combines research excellence, personalized mentorship, and strategic business coaching
              to deliver transformative outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-xl border-t-4 border-peach-500 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                  alt="African researchers collaborating on data analysis"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-peach-600/10 group-hover:bg-peach-600/20 transition-all duration-300"></div>
              </div>
              <div className="p-8 pt-0">
                <h3 className="text-2xl font-semibold text-peach-800 mb-4 text-center">Research Services</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Evidence-based research across social, economic, environmental, and political spheres to inform
                  policy decisions and drive institutional reforms.
                </p>
                <div className="text-center">
                  <Link href="#research-services" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center border-b border-dashed border-peach-300 pb-1 group-hover:border-solid transition-all">
                    Learn More
                    <GoArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl border-t-4 border-peach-500 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=center"
                  alt="African mentor guiding young students in classroom setting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-peach-600/10 group-hover:bg-peach-600/20 transition-all duration-300"></div>
              </div>
              <div className="p-8 pt-0">
                <h3 className="text-2xl font-semibold text-peach-800 mb-4 text-center">Mentorship Programs</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Structured mentorship programs that empower individuals and communities with knowledge,
                  skills, and guidance for personal and professional development.
                </p>
                <div className="text-center">
                  <Link href="#mentorship-programs" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center border-b border-dashed border-peach-300 pb-1 group-hover:border-solid transition-all">
                    Learn More
                    <GoArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl border-t-4 border-peach-500 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="relative h-48 mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=600&h=400&fit=crop&crop=center"
                  alt="African business professionals in coaching session"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-peach-600/10 group-hover:bg-peach-600/20 transition-all duration-300"></div>
              </div>
              <div className="p-8 pt-0">
                <h3 className="text-2xl font-semibold text-peach-800 mb-4 text-center">Business Coaching</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Tailored coaching services for entrepreneurs, startups, and SMEs to achieve sustainable
                  growth, operational excellence, and strategic success.
                </p>
                <div className="text-center">
                  <Link href="#business-coaching" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center border-b border-dashed border-peach-300 pb-1 group-hover:border-solid transition-all">
                    Learn More
                    <GoArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Services Detail */}
      <section id="research-services" className="py-20 bg-gray-50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Research Excellence</span>
              <h2 className="text-peach-900 mb-6 text-3xl md:text-4xl font-serif">Evidence-Based Research Services</h2>
              <div className="w-20 h-1 bg-peach-500 mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our research services combine rigorous methodologies with practical applications to generate
                actionable insights that inform policy decisions, guide institutional reforms, and drive
                sustainable development initiatives.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Quantitative and qualitative research methodologies</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Multi-disciplinary research teams</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Ethical research practices and protocols</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive reporting and dissemination</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-peach-200 rounded-lg transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-peach-100 rounded-lg transform -translate-x-6 translate-y-6"></div>
              <div className="absolute inset-4 z-10 shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                  alt="African researchers conducting data analysis and research"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-peach-600/20"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-peach-100 text-peach-600 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-peach-800 mb-2">{area.title}</h4>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Programs Detail */}
      <section id="mentorship-programs" className="py-20 bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <div className="absolute top-0 left-0 w-48 h-48 bg-peach-200 rounded-lg transform -translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-peach-100 rounded-lg transform translate-x-6 translate-y-6"></div>
              <div className="absolute inset-4 z-10 shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=center"
                  alt="African mentor guiding students in educational setting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-peach-600/20"></div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Empowerment Through Guidance</span>
              <h2 className="text-peach-900 mb-6 text-3xl md:text-4xl font-serif">Structured Mentorship Programs</h2>
              <div className="w-20 h-1 bg-peach-500 mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our mentorship programs create transformative relationships that bridge knowledge gaps,
                build capacity, and empower individuals to achieve their personal and professional goals
                while contributing to community development.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">One-on-one and group mentorship options</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Structured curriculum and milestone tracking</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Expert mentors from diverse backgrounds</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Networking and community building opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mentorshipPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-peach-100 text-peach-600 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                    {program.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-peach-800 mb-2">{program.title}</h4>
                    <p className="text-gray-600 mb-3">{program.description}</p>
                    <div className="bg-white px-3 py-1 rounded-full inline-block">
                      <span className="text-xs font-medium text-peach-600">Target: {program.target}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Coaching Detail */}
      <section id="business-coaching" className="py-20 bg-gray-50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Strategic Growth</span>
              <h2 className="text-peach-900 mb-6 text-3xl md:text-4xl font-serif">Professional Business Coaching</h2>
              <div className="w-20 h-1 bg-peach-500 mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our business coaching services provide entrepreneurs, startups, and SMEs with the strategic
                guidance, practical tools, and ongoing support needed to navigate challenges, capitalize on
                opportunities, and achieve sustainable growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Customized coaching approaches for different business stages</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Industry-experienced business coaches</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Data-driven performance measurement</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-peach-500 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Ongoing support and accountability</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-peach-200 rounded-lg transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-peach-100 rounded-lg transform -translate-x-6 translate-y-6"></div>
              <div className="absolute inset-4 z-10 shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=600&h=400&fit=crop&crop=center"
                  alt="African business professionals in coaching and strategy session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-peach-600/20"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {coachingServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-peach-100 text-peach-600 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-peach-800 mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop&crop=center"
            alt="African team collaborating on structured process workflow"
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="container-page relative z-10">
          <div className="text-center mb-16">
            <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">How We Work</span>
            <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Our Proven Process</h2>
            <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              We follow a systematic approach that ensures measurable outcomes and sustainable impact for all our services.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-peach-600 text-white flex items-center justify-center rounded-full mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-peach-800 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full transform -translate-x-1/2 w-full">
                    <FaArrowRight className="text-peach-300 w-6 h-6 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="py-20 bg-peach-50">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Success Stories</span>
              <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Client Testimonials</h2>
              <div className="w-20 h-1 bg-peach-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <svg className="text-peach-300 w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;The research services provided by Survey 360 were instrumental in shaping our policy framework.
                  Their rigorous methodology and actionable insights helped us make evidence-based decisions.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                      alt="Dr. Michael Kofi - Policy Director"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-peach-800">Dr. Michael Kofi</h5>
                    <p className="text-gray-600 text-sm">Policy Director, Ministry of Development</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <svg className="text-peach-300 w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;Through their mentorship program, I gained the confidence and skills needed to advance my research career.
                  The guidance was personalized and truly transformative.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1710778044102-56a3a6b69a1b?w=200&h=200&fit=crop&crop=face"
                      alt="Ama Asante - PhD Candidate"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-peach-800">Ama Asante</h5>
                    <p className="text-gray-600 text-sm">PhD Candidate, University of Ghana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Partner With Us?</h2>
            <p className="text-xl mx-auto mb-10 text-peach-100 leading-relaxed">
              Whether you&apos;re seeking research insights, professional mentorship, or business coaching,
              our team of experts is ready to help you achieve your goals and create lasting impact.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-peach-700 hover:bg-peach-50 transition-colors rounded-md px-8 py-4 font-medium inline-flex items-center">
                <span>Start Your Journey</span>
                <FaLightbulb className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors rounded-md px-8 py-4 font-medium inline-block">
                Learn About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
