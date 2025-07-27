import { useNavigate } from "react-router-dom";

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

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="min-h-screen">
        <div className="mx-auto max-w-2xl sm:py-36">
          <div className="text-center pt-22">
            <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
              Technothon
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => navigate("/team-registration")}
                className="px-6 py-2 rounded-[20px] text-blue-600 border border-blue-300 transition-all duration-300 hover:bg-blue-300 hover:text-white hover:scale-105 hover:shadow-[0_0_15px_#93c5fd]">
                Register
              </button>
              <button
                onClick={() => navigate("/events")}
                className="text-sm/6 font-semibold bg-transparent border-none cursor-pointer">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-full flex items-center justify-center mt-20 gap-x-6 ring-1 py-5 font-semibold ring-gray-300/10">
          <img src="" alt="" />
          Google
          <img src="" alt="" />
          Youtube
          <img src="" alt="" />
          Redbull
          <img src="" alt="" />
          Boat
          <img src="" alt="" />
          Boult
        </div>
      </section>
      <section className="py-16 px-4 relative">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">About us</h2>
          <div className="max-w-5xl flex justify-center items-center text-center">
            <p className="max-w-3xl text-sm">
              STEP INTO A WORLD OF INNOVATION WHERE STUDENTS BRING TECHNOLOGY TO
              LIFE! DISCOVER AI AND IOT-POWERED PROJECTS, REGISTER FOR EXCITING
              EVENTS, AND BE PART OF A TECH-DRIVEN COMMUNITY SHAPING THE FUTURE.
              WHETHER YOU'RE HERE TO SHOWCASE, EXPLORE, OR LEARN — THIS PLATFORM
              IS YOUR LAUNCHPAD.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 relative">
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
      <section className="">
        <div className=" py-24 sm:py-32 min-h-screen">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            {/* <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2> */}
            <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance  sm:text-5xl">
              Featured Projects
            </p>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      Mobile friendly
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </p>
                  </div>
                  <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                      <img
                        className="size-full object-cover object-top"
                        src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
              </div>
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      Performance
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit
                      maiores impedit.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                    <img
                      className="w-full max-lg:max-w-xs"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
              </div>
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      Security
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                      suspendisse semper morbi.
                    </p>
                  </div>
                  <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                    <img
                      className="h-[min(152px,40cqw)] object-cover"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
              </div>
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      Powerful APIs
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Sit quis amet rutrum tellus ullamcorper ultricies libero
                      dolor eget sem sodales gravida.
                    </p>
                  </div>
                  <div className="relative min-h-120 w-full grow">
                    <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                          <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                            NotificationSetting.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        {/* Your code example */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
