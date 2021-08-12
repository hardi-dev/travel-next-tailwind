import Image from "next/image";
import Link from "next/link";

type Props = {};

type MenuProps = {
  title: string;
  items: string[];
};

const Menu: React.FC<MenuProps> = ({ title, items }) => (
  <div>
    <h4 className="mb-8 text-xl font-bold font-body">{title}</h4>
    <ul className="flex flex-col list-none gap-y-3">
      {items.map((item, idx) => (
        <li key={`idx-${idx}`}>
          <Link href="/">{item}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC<Props> = () => (
  <footer className="md:mt-24 md:mb-10">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-footer ">
        <div className="flex">
          <Link href="/" passHref>
            <a>
              <Image src="/logo.svg" alt="Logo" width="115px" height="34px" />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Menu title="Company" items={["About", "Careers", "Mobile"]} />
          <Menu title="Contact" items={["Help/FAQ", "Press", "Affilates"]} />
          <Menu
            title="More"
            items={["Airlinefees", "Airline", "Low fare tips"]}
          />
        </div>
        <div></div>
      </div>
    </div>
  </footer>
);

export default Footer;
