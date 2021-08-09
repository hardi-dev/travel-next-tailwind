import SectionTitle from "@comps/SectionTitle";
import Image from "next/image";

type Props = {};

type CardProps = {
  img: string;
  title: string;
  description: string;
};

const ServiceCard: React.FC<CardProps> = ({ img, title, description }) => {
  return (
    <div className="relative p-5 group hover:cursor-pointer">
      <div className="absolute z-0 w-24 h-24 bg-red-500 rounded-br-lg opacity-0 -left-3 -bottom-3 rounded-tl-3xl group-hover:opacity-100 transition-all" />
      <div className="relative z-10 flex flex-col justify-center px-6 text-center bg-transparent bg-white shadow-none py-7 md:py-14 rounded-3xl group-hover:shadow-layer transition-all">
        <Image src={img} alt={title} width={120} height={120} />
        <h3 className="mb-3 text-base text-gray-800 font-heading md:text-lg">
          {title}
        </h3>
        <p className="text-xs leading-snug text-gray-500 md:text-base font-body">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC<Props> = () => {
  return (
    <section className="py-6 lg:py-14">
      <div className="container">
        <SectionTitle
          title="We Offer Best Services"
          subtitle="Category"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-9 md:mt-16">
          <ServiceCard
            title="Calculated Weather "
            description="Built Wicket longer admire do barton vanity itself do in it."
            img="/calculated-weather.svg"
          />
          <ServiceCard
            title="Best Flights"
            description="Engrossed listening. Park gate sell they west hard for the."
            img="/best-flight.svg"
          />
          <ServiceCard
            title="Local Events"
            description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
            img="/local-event.svg"
          />
          <ServiceCard
            title="Customization"
            description="We deliver outsourced aviation services for military customers"
            img="/customization.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
