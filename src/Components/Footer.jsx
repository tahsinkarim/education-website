import { Component } from "react";

export default class Footer extends Component {
  render() {
    let Links = [
      { name: "Home", link: "/#home" },
      { name: "Services", link: "/#services" },
      { name: "Pricing", link: "/#pricing" },
      { name: "Our Story", link: "/#our-story" },
    ];
    return (
      <footer className='bg-gradient-to-b from-light-gray to-dark-gray text-white'>
        <div className='Container ml-4 pt-20 px-8 flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:max-w-[1024px] md:mx-auto'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-bold mb-4'>Code-Ed</h2>
            <p>
              <span className='mr-2'>
                <ion-icon name='location'></ion-icon>
              </span>
              1705 N Front St Harrisburg, PA 17102{" "}
            </p>
            <p>
              <span className='mr-2'>
                <ion-icon name='mail'></ion-icon>
              </span>
              Support: support@code-ed.com
            </p>
            <p>
              <span className='mr-2'>
                <ion-icon name='call'></ion-icon>
              </span>
              239-920-8063
            </p>
          </div>
          <div>
            <ul>
              {Links.map((link) => (
                <li
                  key={link.name}
                  className='mb-2 hover:text-[#BB110F] transition-all duration-300'
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='pb-4 text-xl'>Follow us</h2>
            <a className='pr-4 text-2xl' href='https://www.facebook.com/'>
              <ion-icon name='logo-facebook'></ion-icon>
            </a>
            <a className='pr-4 text-2xl' href='https://www.instagram.com/'>
              <ion-icon name='logo-instagram'></ion-icon>
            </a>
            <a className='pr-4 text-2xl' href='https://www.linkedin.com/feed/'>
              <ion-icon name='logo-linkedin'></ion-icon>
            </a>
            <a className='pr-4 text-2xl' href='https://www.youtube.com/'>
              <ion-icon name='logo-youtube'></ion-icon>
            </a>
          </div>
        </div>
        <div className='py-2 pt-8'>
          <p className='text-center'>Copyright © 2022 Code-Ed.com</p>
        </div>
      </footer>
    );
  }
}
