import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Survey 360 Research Solutions",
  description: "Get in touch with Survey 360 Research Solutions for inquiries about our research services, mentorship programs, and business coaching.",
  keywords: ["contact", "research inquiries", "mentorship", "business coaching", "survey 360"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}