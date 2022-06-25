import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className='Navbar bg-gradient-to-b from-dark-gray to-light-gray text-white h-20 flex items-center'>
        <nav className='flex flex-row justify-between items-center mx-auto w-[1440px]'>
          <div className='logo'>
            <h3 className='font-bold mx-16 font-heading'>Code-Ed</h3>
          </div>
          <div className='Menu mr-16'>
            <ul className='flex justify-between items-center gap-16 text-sm'>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li>
                <a href='#'>Our Story</a>
              </li>
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
