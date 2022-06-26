import { Component } from "react";

class Navbar extends Component {
  render() {
    let Links = [
      { name: "Services", link: "/#services" },
      { name: "Pricing", link: "/#pricing" },
      { name: "Our Story", link: "/#our-story" },
    ];
    return (
      <header className='Navbar shadow-md bg-gradient-to-b from-dark-gray to-light-gray text-white py-5'>
        <nav className='md:flex items-center justify-between'>
          <div className='logo'>
            <h3 className='font-bold mx-16 font-heading'>
              <a href='/#home'>Code-Ed</a>
            </h3>
          </div>
          <div className='Menu mr-16 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gradient-to-b from-light-gray to-dark-gray md:z-auto z-[-1]'>
            <ul className='gap-16 text-sm md:flex md:items-center'>
              {Links.map((link) => (
                <li key={link.name} className='md:my-0 my-7'>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
              <li>
                <button className='font-bold border-2 px-8 py-2 text-xs'>
                  TRY FOR FREE
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
