// Components
import { Button } from "@/components/button";

// React
import { useState } from "react";

// Icons | images
import logo from "@/images/logo.png";
import { FaRegEnvelope, FaSearch } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [drop, setDrop] = useState<boolean>(false);

  const languages = ["Inglês", "Mandarim", "Espanhol"];

  return (
    <>
      <section className="border-b border-b-[#707070]/40 px-12 py-1 text-[#006999] flex items-center justify-end relative">
        {/* Languages */}
        <button
          onClick={() => setDrop(!drop)}
          className="flex items-center gap-1 text-sm hover:bg-black/10 p-1 rounded-md"
        >
          <GiWorld className="w-4 h-4" />
          Idioma
          <FaChevronDown />
        </button>
        <div
          className={`absolute top-10 bg-white/80 px-3 py-1 rounded-md ${
            drop ? "block z-20" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-1 text-sm text-center">
            {languages.map((item) => (
              <li>
                <button className="px-1 hover:bg-black/10 rounded-md w-full">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-4 flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="flex items-center justify-center relative w-full">
          <img src={logo} alt="logo image" />
          {/* Mobile menu button */}
          <button
            className="lg:hidden flex absolute right-4 "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IoClose className="w-7 h-7" />
            ) : (
              <IoMenu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Navbar links, buttons */}
        <nav
          className={`flex flex-col lg:flex-row gap-4 lg:gap-12 ${
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
      </section>
    </>
  );
};
