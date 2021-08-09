import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <header className="absolute left-0 right-0 w-full py-4 top-5">
      <div className="container px-6 mx-auto lg:px-0">
        <div className="grid grid-cols-2">
          <div className="flex items-center w-20 h-auto lg:w-28">
            <Link href="/" passHref>
              <a>
                <Image src="/logo.svg" alt="Logo" width="115px" height="34px" />
              </a>
            </Link>
          </div>
          <nav className="hidden lg:flex lg:gap-x-8 lg:items-center">
            <Link href="/" passHref>
              <a className="text-center text-gray-900 font-body">
                Desitnations
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="text-center text-gray-900 font-body">Hotels</a>
            </Link>
            <Link href="/" passHref>
              <a className="text-center text-gray-900 font-body">Flights</a>
            </Link>
            <Link href="/" passHref>
              <a className="text-center text-gray-900 font-body">Bookings</a>
            </Link>
            <Link href="/" passHref>
              <a className="text-center text-gray-900 font-body">Login</a>
            </Link>
            <Link href="/" passHref>
              <a className="px-4 py-3 text-sm text-gray-900 border border-gray-900 rounded lg:rounded-lg font-body lg:text-base lg:px-6 lg:py-2 shadow-btnMd">
                Sign Up
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
