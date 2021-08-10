import SectionTitle from "@comps/SectionTitle";
import Image from "next/image";

type Props = {};

type StepProps = {
  icon: string;
  title: string;
  description: string;
};

const StepItem: React.FC<StepProps> = ({ title, description, icon }) => {
  return (
    <li className="flex text-gray-500 font-body">
      <div className="w-12 h-12  mr-5">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <div className="flex-1">
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </li>
  );
};

const BookTrip: React.FC<Props> = () => {
  return (
    <section className="py-6 lg:py-14">
      <div className="container">
        <div className="items-center grid grid-rows-2 md:grid-rows-none md:grid-cols-2">
          <div>
            <SectionTitle
              title={`Book your next trip in 3 easy steps`}
              subtitle="Easy and Fast"
            />
            <ul className="flex flex-col mt-10 list-none md:mt-14 gap-y-4 md:gap-y-8">
              <StepItem
                icon="/choose-destination.svg"
                title="Choose Destination"
                description="Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. "
              />
              <StepItem
                icon="/make-payment.svg"
                title="Make Payment"
                description="Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. "
              />
              <StepItem
                icon="/reach-airport.svg"
                title="Reach Airport on Selected Date"
                description="Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. "
              />
            </ul>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute">
              <Image
                src="/booking-image.svg"
                alt="Book your next trip in 3 easy steps"
                width={655}
                height={789}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrip;
