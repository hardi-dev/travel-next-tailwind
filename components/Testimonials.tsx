import SectionTitle from "@comps/SectionTitle";
import Image from "next/image";

type Props = {};

type TestiItemProps = {
  avatar: string;
  testi: string;
  author: string;
  origin: string;
};

const ArrowDown = () => (
  <span className="w-8 h-8 grid place-items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

const ArrowUp = () => (
  <span className="w-8 h-8 grid place-items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

const TestiItem: React.FC<TestiItemProps> = ({
  avatar,
  testi,
  author,
  origin,
}) => (
  <div className="text-gray-500 bg-white rounded-lg font-body shadow-layer">
    <div className="w-16 h-16 -mt-8 -ml-8 overflow-hidden rounded-full">
      <Image src={avatar} width={68} height={68} />
    </div>
    <div className="px-8 pb-6">
      <p className="leading-loose">"{testi}"</p>
      <p className="mt-8 text-lg font-bold">{author}</p>
      <p>{origin}</p>
    </div>
  </div>
);

const Testimonials: React.FC<Props> = () => {
  return (
    <section className="py-6 lg:py-16">
      <div className="container">
        <div className="items-center grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
          <div>
            <SectionTitle
              title={`What people say about Us.`}
              subtitle="Testimonials"
            />
          </div>
          <div className="flex">
            <div className="pl-8 md:pl-0">
              <TestiItem
                testi="On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
                author="Mike taylor"
                origin="Lahore, Pakistan"
                avatar="https://randomuser.me/api/portraits/men/32.jpg"
              />
            </div>
            <div className="flex flex-col items-center justify-center ml-8">
              <ArrowUp />
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
