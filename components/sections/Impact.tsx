const Impact = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-page">
        <div className="text-center mb-16">
          <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Making A Difference</span>
          <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">Our Measurable Impact</h2>
          <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            At Survey 360 Research, we measure our success by the positive change we create in communities and organizations worldwide.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <div className="text-center p-8 border border-gray-100 rounded-lg shadow-lg bg-white relative z-10 after:absolute after:inset-0 after:bg-peach-50 after:transform after:scale-0 hover:after:scale-100 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:-z-10 overflow-hidden">
            <div className="text-5xl font-bold text-peach-600 mb-3">25+</div>
            <p className="text-gray-700 font-medium">Research Projects</p>
          </div>

          <div className="text-center p-8 border border-gray-100 rounded-lg shadow-lg bg-white relative z-10 after:absolute after:inset-0 after:bg-peach-50 after:transform after:scale-0 hover:after:scale-100 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:-z-10 overflow-hidden">
            <div className="text-5xl font-bold text-peach-600 mb-3">500+</div>
            <p className="text-gray-700 font-medium">Individuals Mentored</p>
          </div>

          <div className="text-center p-8 border border-gray-100 rounded-lg shadow-lg bg-white relative z-10 after:absolute after:inset-0 after:bg-peach-50 after:transform after:scale-0 hover:after:scale-100 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:-z-10 overflow-hidden">
            <div className="text-5xl font-bold text-peach-600 mb-3">12</div>
            <p className="text-gray-700 font-medium">Community Partnerships</p>
          </div>

          <div className="text-center p-8 border border-gray-100 rounded-lg shadow-lg bg-white relative z-10 after:absolute after:inset-0 after:bg-peach-50 after:transform after:scale-0 hover:after:scale-100 after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300 after:-z-10 overflow-hidden">
            <div className="text-5xl font-bold text-peach-600 mb-3">8</div>
            <p className="text-gray-700 font-medium">Policy Contributions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
