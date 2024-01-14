import { Button } from "@/components/button";
import logo from "@/images/logo.png";
import { useState } from "react";
import { FaRegEnvelope, FaSearch } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="py-4 flex flex-col lg:flex-row items-center justify-center gap-4">
      <img src={logo} alt="logo image" />

      {/* Navbar links, buttons */}
      <nav
        className={`flex flex-col lg:flex-row gap-4 ${
          open
            ? "animate-open-menu transition-all duration-500 flex"
            : "animate-close-menu transition-all duration-500 h-0 hidden lg:flex"
        }`}
      >
        <div className="flex flex-col items-center lg:flex-row gap-4 font-myriadRegular text-center">
          <a href="#" className=" text-grey_light hover:text-grey">
            Quem somos
          </a>
          <a href="#" className=" text-grey_light hover:text-grey">
            Metodologia
          </a>
          <a href="#" className=" text-grey_light hover:text-grey">
            Nossas soluções
          </a>
          <a href="#" className=" text-grey_light hover:text-grey">
            Conteúdos para você
          </a>
          <a href="#" className=" text-grey_light hover:text-grey">
            Canais de comunicação
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="primary" className="px-4 py-2 text-nowrap text-sm">
            <FaRegEnvelope />
            Fale com especialista
          </Button>

          {/* Search bar */}
          <button className="bg-[#E5E5E5] rounded-full p-2 hidden lg:flex">
            <FaSearch className="text-primary_text" />
          </button>
        </div>
      </nav>

      {/* Mobile menu button */}
      <button
        className="lg:hidden flex absolute right-4 top-9"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <IoClose className="w-7 h-7" />
        ) : (
          <IoMenu className="w-7 h-7" />
        )}
      </button>
    </section>
  );
};
