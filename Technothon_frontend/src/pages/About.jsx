const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className=" text-white py-6">
        <h1 className="text-4xl text-center pt-20">About Us</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-10">
        <section className="max-w-2xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg mb-6">
            We are a team of passionate individuals dedicated to providing the
            best service for our customers. Our diverse backgrounds and
            experiences come together to create a unique and vibrant work
            culture.
          </p>
        </section>
        <section className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default AboutUs;
