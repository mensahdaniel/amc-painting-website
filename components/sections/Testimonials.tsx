const Testimonials = () => {
  return (
    <section className="py-24 bg-peach-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-peach-200 rounded-full opacity-50 transform -translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-peach-200 rounded-full opacity-50 transform translate-x-32 translate-y-24"></div>
      <div className="container-page relative z-10">
        <div className="text-center mb-16">
          <span className="text-peach-600 font-medium tracking-wider uppercase text-sm mb-2 inline-block">Testimonials</span>
          <h2 className="text-peach-900 mb-4 text-3xl md:text-4xl font-serif">What Our Partners Say</h2>
          <div className="w-20 h-1 bg-peach-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl">
          <div className="flex flex-col items-center">
            <svg className="text-peach-300 w-16 h-16 mb-4" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-gray-700 text-xl mb-6 text-center italic leading-relaxed">
              &ldquo;Survey 360 Research Solutions has been an invaluable partner in our community development initiatives. Their research insights and mentorship programs have transformed how we approach sustainable development.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-peach-200 flex items-center justify-center mr-4">
                <svg className="w-10 h-10 text-peach-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-peach-800">Dr. Sarah Johnson</h4>
                <p className="text-gray-600">Director, Community Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
