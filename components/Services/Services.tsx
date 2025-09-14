const Services = () => {
  const services = [
    {
      title: 'Interior Painting',
      description: 'Transform the inside of your home with our expert interior painting services, using durable and beautiful finishes.',
      image: '/images/services/interior.jpg', // Updated to actual image
    },
    {
      title: 'Exterior Painting',
      description: 'Protect and beautify your home\'s exterior with our weather-resistant and long-lasting paint solutions.',
      image: '/images/services/exterior.jpg', // Updated to actual image
    },
    {
      title: 'Cabinet Painting',
      description: 'Give your kitchen or bathroom a fresh new look without the cost of full replacement with our cabinet refinishing.',
      image: '/images/services/cabinet-painting.jpg', // Updated to actual image
    },
    {
      title: 'Drywall Repair',
      description: 'We fix cracks, holes, and imperfections to create a smooth, perfect surface for painting.',
      image: '/images/services/drywall.jpg', // Updated to actual image
    },
    {
      title: 'Deck Staining',
      description: 'Enhance and protect your wooden deck with our professional staining and sealing services.',
      image: '/images/services/deck.jpg', // Updated to actual image
    },
    {
      title: 'Commercial Painting',
      description: 'We provide efficient and high-quality painting services for businesses and commercial properties.',
      image: '/images/services/commercial.jpg', // Updated to actual image
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of painting services to meet all your residential and commercial needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* Image - Replaced emoji */}
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              {/* Description - unchanged */}
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
