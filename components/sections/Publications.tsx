import Link from "next/link";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const Publications = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-page">
        <div className="text-center mb-16">
          <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Knowledge Sharing</span>
          <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Latest Publications</h2>
          <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Stay informed with our recent research publications and insights from our team of experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 relative">
              <Image 
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop&crop=center"
                alt="African researchers analyzing economic data and digital transformation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-peach-600/10"></div>
            </div>
            <div className="p-6">
              <span className="text-peach-600 text-sm font-medium">Economic Research</span>
              <h3 className="text-xl font-semibold text-peach-900 mt-2 mb-3">The Impact of Digital Transformation on Economic Growth</h3>
              <p className="text-gray-600 mb-4">A comprehensive analysis of how digital technologies drive economic development across different sectors.</p>
              <Link href="/resources/publications" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center">
                Read Publication
                <GoArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 relative">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=center"
                alt="African community mentorship and social development programs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-peach-600/10"></div>
            </div>
            <div className="p-6">
              <span className="text-peach-600 text-sm font-medium">Social Development</span>
              <h3 className="text-xl font-semibold text-peach-900 mt-2 mb-3">Mentorship Models for Sustainable Community Growth</h3>
              <p className="text-gray-600 mb-4">Exploring effective mentorship frameworks that empower communities and foster sustainable development.</p>
              <Link href="/resources/publications" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center">
                Read Publication
                <GoArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-48 relative">
              <Image 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center"
                alt="African business professionals developing strategic resilience plans"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-peach-600/10"></div>
            </div>
            <div className="p-6">
              <span className="text-peach-600 text-sm font-medium">Business Strategy</span>
              <h3 className="text-xl font-semibold text-peach-900 mt-2 mb-3">Strategic Approaches to Business Resilience in Uncertain Times</h3>
              <p className="text-gray-600 mb-4">A framework for businesses to build resilience and adaptability in rapidly changing economic environments.</p>
              <Link href="/resources/publications" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center">
                Read Publication
                <GoArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <Link href="/resources" className="inline-flex items-center justify-center border border-peach-500 text-peach-600 hover:bg-peach-50 transition-colors rounded-md px-6 py-3 font-medium">
            View All Resources
            <GoArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export default Publications;
