import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FaArrowRight, FaRegFileLines } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { MdBusinessCenter, MdPersonOutline } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { HiOutlineChat, HiOutlineChatAlt2 } from "react-icons/hi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import HeroSection from "@/components/sections/HeroSection";
import Services from "@/components/sections/Services";
import Impact from "@/components/sections/Impact";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Publications from "@/components/sections/Publications";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <HeroSection />

      {/* Services section */}
      <Services />

      {/* Impact section */}
      <Impact />

      {/* Testimonial section */}
      <Testimonials />

      {/* CTA section */}
      <CTASection />

      {/* Latest Publications */}
      <Publications />
    </>
  );
}
