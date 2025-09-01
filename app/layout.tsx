import Footer from '../components/Footer/Footer';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMC Company Limited",
  description: "Professional Residential & Commercial Painting Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
    {children}
    <Footer />
  </body>
    </html>
  );
}