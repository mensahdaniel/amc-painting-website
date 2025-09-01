const Process = () => {
  // Data for the process steps
  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your vision, preferences, and project goals to create a tailored plan.',
    },
    {
      number: '02',
      title: 'Preparation',
      description: 'Our team meticulously prepares surfaces by cleaning, sanding, and priming for a flawless finish.',
    },
    {
      number: '03',
      title: 'Painting',
      description: 'Using high-quality paints and techniques, we apply color with precision and care.',
    },
    {
      number: '04',
      title: 'Final Walkthrough',
      description: 'We ensure every detail meets your satisfaction and our high standards of quality.',
    },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600">
            Our streamlined approach ensures a seamless and stress-free painting experience from start to finish.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number Circle */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 font-bold text-xl">{step.number}</span>
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              {/* Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;