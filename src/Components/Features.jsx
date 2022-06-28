import { Component } from "react";
import Backend from "../images/backend.png";
import Code from "../images/clean-code.png";
import Debug from "../images/debug.png";
export default class Features extends Component {
  render() {
    let Links = [
      { name: "DEBUGGING TOOL", link: "/#", img: Backend },
      { name: "BACKEND SERVER", link: "/#", img: Code },
      { name: "CLEAN CODE", link: "/#", img: Debug },
    ];
    return (
      <div className='bg-[#f2f2f2]'>
        <div className='Features px-8 py-12 pt-20 md:max-w-[1280px] mx-auto'>
          <h1 className='text-3xl md:text-4xl font-bold text-center'>
            Features
          </h1>
          <p className='text-center mt-4 mb-8 md:w-[548px] md:mx-auto'>
            Enjoy our features suitable for your programming lessons. These
            features will help you become a better coder.
          </p>
          <div className='Cards md:flex md:gap-4 lg:gap-8 xl:gap:12 justify-center items-center text-center'>
            {Links.map((link) => (
              <div
                key={link.name}
                className='border-2 rounded shadow-lg mb-12 w-3/4 mx-auto pb-8 xl:mx-5 bg-white'
              >
                <img src={link.img} alt={link.name} />
                <h1 className='text-xl font-bold mb-4'>{link.name}</h1>
                <a
                  className='text-[#BB110F] underline font-bold'
                  href={link.link}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
