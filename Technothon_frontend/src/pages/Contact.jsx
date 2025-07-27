import Head from "../components/Head";

const Contact = () => {
  return (
    <>
      <Head />

      <section className=" text-white py-30 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
            Got a question,Want to sponsor us, partnership request, or just want
            to say hello? Fill out the form below and we'll get back to you
            soon!
          </p>

          <form method="post" action="/contact" className="bg-[#18181B] p-8 rounded-2xl shadow-md ring-1 ring-indigo-700 shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Let us know how we can help"
                  className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"></textarea>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md shadow-lg shadow-indigo-500/40 hover:shadow-indigo-400/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
