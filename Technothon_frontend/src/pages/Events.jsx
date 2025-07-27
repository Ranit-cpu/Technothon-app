
const event = [
  {
    id: 1,
    title: "AI UNLEASHED",
    description:
      "Landing page for SeaPhantom, an NFT project focusing on innovative and sustainable technologies. Exp...",
    image: "/images/image 34.png",
    demourl: "#",
  },
  {
    id: 2,
    title: "IOT Exposition",
    description:
      "Landing page for SeaPhantom, an NFT project focusing on innovative and sustainable technologies. Exp...",
    image: "/images/image 35.png",
    demourl: "#",
  },
];
const Events = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 pt-36">
        <div className="mx-auto max-w-5xl ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className=""> Events</span>
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            A DYNAMIC PLATFORM FOR SHOWCASING STUDENT INNOVATIONS IN AI AND IOT.
            ORGANIZED BY BATCH AND BACKED BY
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {event.map((event, key) => (
              <div
                key={key}
                className="group ring-1 ring-gray-300/20 hover:shadow-[0_4px_32px_0_rgba(255,255,255,0.15)] hover:scale-101 duration-300 transform transition-all  rounded-lg overflow-hidden shadow-xs">
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-[#18181B]">
                  <h3 className="text-xl font-semibold mb-1"> {event.title}</h3>
                  <p className=" text-sm mt-5 text-gray-400">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
