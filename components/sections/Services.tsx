import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdPersonOutline } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-page">
        <div className="text-center mb-16">
          <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">What We Offer</span>
          <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Our Expert Services</h2>
          <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We offer a comprehensive range of services designed to drive innovation, growth, and sustainable development for individuals and organizations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-white p-8 shadow-xl border-t-4 border-peach-500 hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-peach-100 text-peach-700 flex items-center justify-center rounded-full mb-6 mx-auto">
              <TbBuildingSkyscraper className="w-10 h-10" />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-peach-800 text-center">Research Services</h3>
            <p className="text-gray-600 mb-6 text-center">
              Cutting-edge research in social, economic, environmental, and political spheres to inform policy and drive institutional reforms.
            </p>
            <div className="text-center">
              <Link href="/services/research" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center border-b border-dashed border-peach-300 pb-1">
                Explore Research Services
                <GoArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-xl border-t-4 border-peach-500 hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-peach-100 text-peach-700 flex items-center justify-center rounded-full mb-6 mx-auto">
              <HiOutlineChatAlt2 className='w-10 h-10' />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-peach-800 text-center">Mentorship Programs</h3>
            <p className="text-gray-600 mb-6 text-center">
              Empowering individuals and communities with knowledge, skills, and guidance through structured mentorship programs.
            </p>
            <div className="text-center">
              <Link href="/services/mentorship" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center border-b border-dashed border-peach-300 pb-1">
                Explore Mentorship Programs
                <GoArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-xl border-t-4 border-peach-500 hover:transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-peach-100 text-peach-700 flex items-center justify-center rounded-full mb-6 mx-auto">
              <MdPersonOutline className='w-10 h-10' />
            </div>
            <h3 className="mb-4 text-xl font-semibold text-peach-800 text-center">Business Coaching</h3>
            <p className="text-gray-600 mb-6 text-center">
              Tailored coaching services to help entrepreneurs, startups, and SMEs achieve sustainable growth and success.
            </p>
            <div className="text-center">
              <Link href="/services/coaching" className="text-peach-600 hover:text-peach-800 font-medium inline-flex items-center border-b border-dashed border-peach-300 pb-1">
                Explore Business Coaching
                <GoArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
