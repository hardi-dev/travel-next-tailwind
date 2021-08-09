type Props = {
  title: string;
  subtitle: string;
  centered?: boolean;
};

const SectionTitle: React.FC<Props> = ({ title, subtitle, centered }) => {
  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center" : "items-start"
      } gap-y-2`}
    >
      <p className="text-sm font-bold text-gray-600 uppercase lg:text-base font-body">
        {subtitle}
      </p>
      <h2
        className={`text-3xl text-gray-900 md:text-5xl font-display ${
          centered ? "text-center" : "text-left"
        }`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
