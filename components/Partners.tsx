import Image from "next/image";

const Logo = ({ src }: { src: string }) => (
  <div className="py-3 bg-transparent rounded-lg shadow-none filter grayscale h-14 hover:bg-white hover:shadow-md hover:filter-none">
    <Image src={src} layout="fill" />
  </div>
);

const Partners: React.FC = () => (
  <section className="py-16">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-7">
        <Logo src="/axon.svg" />
        <Logo src="/jetstar.svg" />
        <Logo src="/expedia.svg" />
        <Logo src="/qantas.svg" />
        <Logo src="/alitalia.svg" />
      </div>
    </div>
  </section>
);

export default Partners;
