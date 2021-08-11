import SectionTitle from "@comps/SectionTitle";
import Image from "next/image";

type Props = {};

const Subscription: React.FC<Props> = () => (
  <section className="py-10 lg:py-14">
    <div className="container">
      <div className="relative py-20 bg-purple-100 bg-right-top bg-no-repeat rounded-2xl md:rounded-3xl rounded-tl-huge subs-bg">
        <div className="absolute w-12 h-12 -top-6 -right-6 md:w-16 md:h-16 md:-top-8 md:-right-8">
          <Image src="/send.svg" layout="fill" />
        </div>
        <h4 className="w-3/4 mx-auto text-2xl font-semibold leading-snug text-center text-gray-500 md:leading-relaxed font-body">
          Subscribe to get information, latest news and
          <br className="hidden md:block" />
          other interesting offers about Cobham
        </h4>
        <div className="flex flex-col items-center justify-center mt-10 md:mt-16 md:flex-row">
          <div className="flex px-4 py-3 mb-6 bg-white rounded md:rounded-lg md:mr-6 lg:px-6 lg:py-4 md:w-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-4 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <input
              type="text"
              className="text-gray-900 bg-transparent outline-none font-body"
            />
          </div>
          <a
            href="#"
            className="px-4 py-3 text-sm text-white rounded lg:rounded-lg font-body lg:text-base lg:px-10 lg:py-4 bg-gradient-to-b from-orange-light to-orange shadow-btnMd"
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Subscription;
