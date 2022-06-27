import { Component } from "react";
import Image from "../images/hero.png";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div className='text-[#F2F2F2] text-[500px] absolute z-[-1] right-[-130px] top-[-60px] overflow-x-hidden'>
          <ion-icon name='square'></ion-icon>
        </div>
        <div className='Hero md:flex items-center justify-center px-8 py-12 md:max-w-[1440px] md:mx-auto'>
          <div className='flex-1'>
            <div>
              <h1 className='text-4xl lg:text-5xl font-bold font-heading tracking-wider'>
                Learn to Code
              </h1>
              <h1 className='text-4xl lg:text-5xl lg:mt-4 font-bold font-heading tracking-wider'>
                In 3 Months
              </h1>
              <p className='mt-5 w-96'>
                Nothing is impossible, they say. So is learning programming is
                just a couple of months. All we need is your commitment only.
              </p>
              <div className='mt-8'>
                <button className='font-bold border-2 border-text  px-8 py-2 text-xs hover:bg-[#3F3B43] hover:text-white transition-all duration-500'>
                  TRY FOR FREE
                </button>
                <button className='ml-4 font-bold border-2 border-dark-gray px-8 py-2 text-xs text-white bg-dark-gray hover:bg-[#3F3B43]  transition-all duration-500'>
                  SIGN UP NOW
                </button>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <img src={Image} alt='Programming' />
          </div>
        </div>
      </div>
    );
  }
}
