import { BuildingLibraryIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <BuildingLibraryIcon className="w-12 h-12" />
      <p className="text-[28px] ml-1">Gyanspace</p>
    </div>
  );
};

export default Logo;
