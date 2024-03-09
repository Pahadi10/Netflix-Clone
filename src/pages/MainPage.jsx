import React from 'react'
import Navbar from '../components/Navbar'
import MainPageContent from '../components/MainPageContent'
const MainPage = () => {
  return (
    <div className='home-page flex flex-col items-center gap-[27%]'>
        <Navbar/>
        <MainPageContent/>
    </div>
  )
}

export default MainPage