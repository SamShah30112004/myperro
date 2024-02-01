// eslint-disable-next-line no-unused-vars
import React from 'react'
import Cards from './Cards'
import ComingSoon from './ComingSoon'
import AboutUs from './AboutUs'
import Reviews from './Reviews'
import ContactUs from './ContactUs'
import Footer from './Footer'

const HomePage = () => {
    return (
        <>
        <div id='home' className='home-page'>
            <h1 className='home-heading'>MYPERRO</h1>
            <Cards/>
        </div>
        <ComingSoon/>
        <AboutUs/>
        <Reviews/>
        <ContactUs/>
        <Footer/>
        </>
      )
}

export default HomePage
