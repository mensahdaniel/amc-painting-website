import Link from 'next/link'; // <-- ADD THIS LINE BACK

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright and Links */}
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} AMC Company Limited. All rights reserved.
            </p>
          </div>

          {/* Developer Credit - This is for YOU */}
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500">
              Built with passion by {' '}
              <Link
                href="mailto:mensahdaniel5858910@gmail.com"
                className="text-blue-400 hover:text-blue-300 underline transition-colors"
              >
                Mensah Daniel
              </Link>
              {' '}•{' '}
              <span className="text-gray-500">
                Full-Stack Developer
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
