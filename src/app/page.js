import backgroundImage from "../../public/home/book-bg.jpg";

import Image from "next/image";
import Link from "next/link";
import { BuildingLibraryIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col relative justify-center items-center h-screen">
      <Image
        className="blur-sm"
        src={backgroundImage}
        alt="Background Image"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div className="flex flex-col justify-center items-center bg-orange-100 p-2 z-10 lg:w-2/5 h-1/4 rounded-md">
        <div className="flex pb-5 mb-5 text-5xl text-orange-800">
          <BuildingLibraryIcon className="w-12 h-12" />

          <p>Gyanspace</p>
        </div>

        <div>
          <Link
            className="bg-orange-700 text-white rounded-md p-2"
            href="/store"
          >
            Take me to the store
          </Link>
        </div>
      </div>
    </div>
  );
}
