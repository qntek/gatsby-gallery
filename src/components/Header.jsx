import React from 'react'
import galleryLogo from '../assets/images/icons/logo.svg'

const Header = ({isSlideShow, setIsSlideShow}) => {
  return (
    <header className='flex flex-row justify-between p-4 lg:p-9 border-b border-stone-300'>
      <img src={galleryLogo} alt='Gallery Logo' />
      <button onClick={() => setIsSlideShow(!isSlideShow)} className='appearance-none bg-transparent font-bold border-none text-stone-500 text-sm tracking-widest'>{isSlideShow ? 'Stop SlideShow' : 'Start SlideShow'}</button>
    </header>
  )
}

export default Header