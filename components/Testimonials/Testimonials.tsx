const Testimonials = () => {
  const testimonials = [
    {
      quote: "AMC Company transformed our home! Their attention to detail and professional crew made the process seamless. The quality is outstanding.",
      author: "Sarah Johnson",
      role: "Homeowner"
    },
    {
      quote: "We hired AMC for our office building exterior. They were efficient, clean, and delivered ahead of schedule. Highly recommend for commercial projects!",
      author: "Michael Chen",
      role: "Business Owner"
    },
    {
      quote: "The cabinet painting service saved us thousands versus replacement. Our kitchen looks brand new and the finish is incredibly durable.",
      author: "The Williams Family",
      role: "Clients"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              {/* Quote */}
              <p className="text-gray-600 italic mb-6">&quot;{testimonial.quote}&quot;</p>
              {/* Author */}
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
