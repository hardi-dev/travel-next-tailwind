import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-right-top bg-no-repeat bg-hero-decore bg-125 md:bg-40 pt-28">
      <div className="container px-6 mx-auto lg:px-0">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex flex-col order-last gap-y-6 md:gap-y-8 md:order-first md:max-w-xl md:w-6/12">
            <p className="text-sm font-bold uppercase lg:text-base text-orange font-body">
              Best Destinations around the world
            </p>
            <h1 className="w-full text-5xl font-bold leading-none tracking-tight text-gray-900 font-display lg:text-7xl">
              Travel,
              <span className="inline-block bg-left-bottom bg-no-repeat bg-hero-display bg-125">
                &nbsp;enjoy&nbsp;&nbsp;&nbsp;
              </span>
              and live a new and full life
            </h1>
            <p className="w-3/4 text-xs text-gray-700 lg:text-base leading-5 font-body">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div className="flex items-center gap-x-5 lg:gap-x-10">
              <a
                href="#"
                className="px-4 py-3 text-sm text-white rounded lg:rounded-lg font-body lg:text-base lg:px-6 lg:py-4 bg-orange-light shadow-btnMd"
              >
                Find out more
              </a>
              <a
                href="#"
                className="flex items-center text-sm text-gray-700 text-body lg:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 text-red-500 h-14 w-14 lg:mr-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                    className="shadow-btnSm"
                  />
                </svg>
                Play Demo
              </a>
            </div>
          </div>
          <div className="flex order-first md:order-last md:w-6/12">
            <div className="md:flex md:items-center md:justify-end">
              <div>
                <Image
                  src="/hero-image.png"
                  alt="Travel, enjoy and live a new and full life"
                  width={784}
                  height={764}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
