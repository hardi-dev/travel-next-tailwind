import SectionTitle from "@comps/SectionTitle";
import Image from "next/image";

type Props = {};

type CardProps = {
  locationName: string;
  price: string;
  duration: string;
  img: string;
};

const CardDestination: React.FC<CardProps> = ({
  locationName,
  price,
  duration,
  img,
}) => {
  return (
    <div className="relative mb-8 overflow-hidden text-gray-600 font-body shadow-layer-soft hover:shadow-layer rounded-3xl lg:mb-0 transition-all transform hover:scale-105">
      <div className="aspect-w-9 aspect-h-13">
        <Image src={img} alt={locationName} layout="fill" quality={100} />
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-end">
        <div className="w-full px-5 pt-6 pb-10 bg-white ">
          <div className="flex items-center mb-3">
            <p className="flex-1">{locationName}</p>
            <p>{price}</p>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Destinations: React.FC<Props> = () => {
  return (
    <section className="py-6 lg:py-14">
      <div className="container">
        <SectionTitle
          title="Top Destinations"
          subtitle="Top Selling"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-9 md:mt-16 md:gap-x-10">
          <CardDestination
            locationName="Rome, Italty"
            price="$5,42k"
            duration="10 Days Trip"
            img="/rome.png"
          />
          <CardDestination
            locationName="London, UK"
            price="$4.2k"
            duration="12 Days Trip"
            img="/london.png"
          />
          <CardDestination
            locationName="Full Europe"
            price="$15k"
            duration="28 Days Trip"
            img="/europe.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
