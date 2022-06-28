import { useState } from "react";

function Navbar() {
  let Links = [
    { name: "Services", link: "/#services" },
    { name: "Pricing", link: "/#pricing" },
    { name: "Our Story", link: "/#our-story" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <header className='Navbar md:shadow-md bg-gradient-to-b from-dark-gray to-light-gray text-white py-5'>
      <nav className='md:flex md:max-w-[1440px] md:mx-auto items-center justify-between '>
        <div className='logo'>
          <h3 className='font-bold ml-8 font-heading hover:text-[#BB110F] transition-all duration-300'>
            <a href='/#home'>Code-Ed</a>
          </h3>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
        <div
          className={`Menu mr-16 md:flex md:items-center md:pb-0 pb-12 pl-9 md:pl-0 absolute md:static w-full md:w-auto 
          bg-gradient-to-b from-light-gray to-dark-gray md:z-auto z-[-1] md:bg-none left-0 transition-all duration-500 ease-in ${
            open
              ? "top-[65px] opacity-100"
              : "top-[-490px] md:opacity-100 opacity-0"
          } `}
        >
          <ul className='gap-16 text-sm md:flex md:items-center'>
            {Links.map((link) => (
              <li
                key={link.name}
                className='md:my-0 my-7 hover:text-[#BB110F] transition-all duration-300'
              >
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
            <li>
              <button className='font-bold border-2 px-8 py-2 text-xs hover:bg-[#3F3B43] transition-all duration-500'>
                TRY FOR FREE
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
