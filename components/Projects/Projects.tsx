const Projects = () => {
  // Project data with correct image paths
  const projects = [
    {
      title: "Modern Living Room",
      category: "Interior",
      image: "/images/projects/interior-1.jpg",
    },
    {
      title: "Historic Home Exterior",
      category: "Exterior",
      image: "/images/projects/exterior-1.jpg",
    },
    {
      title: "Kitchen Cabinet Refresh",
      category: "Cabinet",
      image: "/images/projects/cabinets-1.jpg",
    },
    {
      title: "Office Building",
      category: "Commercial",
      image: "/images/projects/commercial-1.jpg",
    },
    {
      title: "Deck Restoration",
      category: "Deck",
      image: "/images/projects/deck-1.jpg",
    },
    {
      title: "Bedroom Makeover",
      category: "Interior",
      image: "/images/projects/bedroom-1.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600">
            Browse our portfolio of completed projects to see the quality and transformation we deliver.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              {/* Using regular img tag */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              {/* Project Info */}
              <div className="p-4">
                <p className="text-sm font-medium text-blue-600">{project.category}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;