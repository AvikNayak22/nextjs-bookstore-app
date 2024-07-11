import Link from "next/link";

import { PowerIcon } from "@heroicons/react/24/solid";

import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div>
      <Link
        href="/store"
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-orange-600 p-4 md:h-30"
      >
        <div className=" text-white">
          <Logo />
        </div>
      </Link>
      <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-orange-600 md:flex-none md:justify-start md:px-3">
            <PowerIcon className="w-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
