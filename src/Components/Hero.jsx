import { Component } from "react";
import Image from "../images/hero.png";

export default class Hero extends Component {
  render() {
    return (
      <div className='Hero md:flex flex-row-reverse items-center justify-center px-8 py-12 md:max-w-[1440px] sm:px-16 md:px-8 md:mx-auto -z-10'>
        <div className='flex-1'>
          <img src={Image} alt='Programming' />
        </div>
        <div className='flex-1 mt-10 text-center md:text-left'>
          <h1 className='text-4xl lg:text-6xl font-bold font-heading tracking-wider'>
            Learn to Code
          </h1>
          <h1 className='text-4xl lg:text-6xl lg:mt-4 font-bold font-heading tracking-wider'>
            In 3 Months
          </h1>
          <p className='mt-5 mb-4 lg:w-96 md:pr-2'>
            Nothing is impossible, they say. So is learning programming is just
            a couple of months. All we need is your commitment only.
          </p>
          <div className='mt-8'>
            <button className='m-2 md:ml-0 font-bold border-2 border-text  px-8 py-2 text-xs hover:bg-[#3F3B43] hover:text-white transition-all duration-500'>
              TRY FOR FREE
            </button>
            <button className='m-2 font-bold border-2 border-dark-gray px-9 py-2 text-xs text-white bg-dark-gray hover:bg-[#3F3B43] transition-all duration-500'>
              SIGN UP NOW
            </button>
          </div>
        </div>
      </div>
    );
  }
}
