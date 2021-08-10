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
      <p className="text-sm font-semibold text-gray-600 capitalize lg:text-base font-body">
        {subtitle}
      </p>
      <h2
        className={`text-3xl text-gray-900 md:text-5xl font-display ${
          centered ? "text-center" : "text-left"
        }
        ${centered ? "w-full" : "md:w-4/5"}
        `}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
