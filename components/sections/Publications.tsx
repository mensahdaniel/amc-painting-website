import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { FaBookOpen, FaDownload, FaExternalLinkAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { HiSparkles, HiTrendingUp } from "react-icons/hi";

const Publications = () => {
  const featuredPublications = [
    {
      title: "Digital Transformation and Economic Growth in West Africa",
      description: "A comprehensive analysis examining how digital technologies drive economic development across different sectors in West African countries.",
      category: "Economic Research",
      author: "Dr. Michael Karikari Appiah",
      date: "2024",
      journal: "Elsevier Economic Development Review",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop&crop=center",
      featured: true,
      downloadUrl: "/publications/digital-transformation-economic-growth.pdf",
      externalUrl: "https://doi.org/example.link",
      tags: ["Economic Development", "Digital Technology", "Policy Analysis"]
    },
    {
      title: "Mentorship Models for Sustainable Community Development",
      description: "Exploring effective mentorship frameworks that empower communities and foster sustainable development through evidence-based approaches.",
      category: "Social Development",
      author: "Dr. Angela Kyerewaa Ayisi-Addo",
      date: "2023",
      journal: "Taylor & Francis Development Studies",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center",
      featured: true,
      downloadUrl: "/publications/mentorship-models-community.pdf",
      externalUrl: "https://doi.org/example.link",
      tags: ["Mentorship", "Community Development", "Social Impact"]
    },
    {
      title: "Strategic Business Resilience in Uncertain Economic Times",
      description: "A comprehensive framework for businesses to build resilience and adaptability in rapidly changing economic environments.",
      category: "Business Strategy",
      author: "Deborah Amoako",
      date: "2023",
      journal: "Sage Business Management Quarterly",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      featured: false,
      downloadUrl: "/publications/business-resilience-strategy.pdf",
      externalUrl: "https://doi.org/example.link",
      tags: ["Business Strategy", "Risk Management", "Organizational Development"]
    },
    {
      title: "Adult Education and Human Resource Development in Ghana",
      description: "Examining the intersection of adult education and human resource development for sustainable organizational growth.",
      category: "Education Research",
      author: "Dr. Angela Kyerewaa Ayisi-Addo",
      date: "2023",
      journal: "Emerald Human Resource Development",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      featured: false,
      downloadUrl: "/publications/adult-education-hr-development.pdf",
      externalUrl: "https://doi.org/example.link",
      tags: ["Adult Education", "Human Resources", "Capacity Building"]
    }
  ];

  const researchAreas = [
    {
      title: "Economic Development",
      count: 15,
      icon: <HiTrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-peach-500"
    },
    {
      title: "Social Impact",
      count: 12,
      icon: <FaUser className="w-6 h-6" />,
      color: "from-green-500 to-peach-500"
    },
    {
      title: "Business Strategy",
      count: 10,
      icon: <FaBookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-peach-500"
    },
    {
      title: "Education Research",
      count: 13,
      icon: <HiSparkles className="w-6 h-6" />,
      color: "from-indigo-500 to-peach-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-peach-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-peach-200/20 to-orange-200/20 rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-peach-200/20 rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>

      <div className="container-page relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-peach-700 font-semibold text-sm mb-6 shadow-lg border border-peach-200">
            <FaBookOpen className="w-4 h-4 mr-2 text-peach-500" />
            Knowledge Sharing
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-peach-600 to-orange-600">Research</span>
            <br />Publications
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Stay informed with our recent research publications and insights from our team of experts, contributing to evidence-based policy and sustainable development.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {researchAreas.map((area, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {area.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.count} Publications</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Publications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Publications</h3>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredPublications.filter(pub => pub.featured).map((publication, index) => (
              <div key={index} className="group">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:scale-105">
                  {/* Image */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={publication.image}
                      alt={publication.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-peach-700 font-semibold text-sm">
                      {publication.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-peach-600 transition-colors">
                      {publication.title}
                    </h4>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {publication.description}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaUser className="w-4 h-4 mr-2" />
                        {publication.author}
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="w-4 h-4 mr-2" />
                        {publication.date}
                      </div>
                    </div>

                    {/* Journal */}
                    <div className="text-sm text-peach-600 font-medium mb-6">
                      Published in: {publication.journal}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {publication.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-peach-100 text-peach-700 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={publication.downloadUrl}
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-peach-500 to-orange-500 text-white font-semibold rounded-lg hover:from-peach-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                      >
                        <FaDownload className="w-4 h-4 mr-2" />
                        <span>Download PDF</span>
                      </Link>
                      <Link
                        href={publication.externalUrl}
                        className="inline-flex items-center px-4 py-2 bg-white border-2 border-peach-300 text-peach-600 font-semibold rounded-lg hover:bg-peach-50 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                        <span>View Online</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Publications Grid */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Publications</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredPublications.filter(pub => !pub.featured).map((publication, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:scale-105">
                  <div className="flex items-start space-x-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={publication.image}
                        alt={publication.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-peach-600 text-sm font-medium mb-1">{publication.category}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-peach-600 transition-colors">
                        {publication.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {publication.description.length > 120
                          ? `${publication.description.substring(0, 120)}...`
                          : publication.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center text-xs text-gray-500 mb-4">
                        <span>{publication.author}</span>
                        <span className="mx-2">•</span>
                        <span>{publication.date}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Link
                          href={publication.downloadUrl}
                          className="text-peach-600 hover:text-peach-700 font-medium text-sm inline-flex items-center"
                        >
                          <FaDownload className="w-3 h-3 mr-1" />
                          Download
                        </Link>
                        <Link
                          href={publication.externalUrl}
                          className="text-gray-500 hover:text-gray-700 font-medium text-sm inline-flex items-center ml-4"
                        >
                          <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Complete Research Library
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Access our full collection of research publications, policy papers, and insights that are driving positive change across Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className="bg-gradient-to-r from-peach-600 to-orange-600 text-white hover:from-peach-700 hover:to-orange-700 rounded-xl px-8 py-4 font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <span>Browse All Publications</span>
                <GoArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="bg-white border-2 border-peach-300 text-peach-600 hover:bg-peach-50 rounded-xl px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Request Custom Research
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
