import React from 'react';
import { Link } from 'gatsby';
import galleryLogo from '../assets/images/icons/logo.svg'

const Header = ({isSlideShow, setIsSlideShow}) => {
  return (
    <header className='p-4 lg:p-9 border-b border-stone-300'>
      <div className='flex flex-row justify-between lg:container lg:mx-auto'><Link to='/'><img src={galleryLogo} alt='Gallery Logo' /></Link>
      <button onClick={() => setIsSlideShow(!isSlideShow)} className='appearance-none bg-transparent font-bold border-none text-stone-500 text-sm tracking-widest'>{isSlideShow ? 'Stop SlideShow' : 'Start SlideShow'}</button></div>
    </header>
  )
}

export default Header