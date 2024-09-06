import React, { useEffect } from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import { Helmet } from 'react-helmet';

const AboutUsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Helmet>
          <title>Crystal Mats | About Us</title>
        </Helmet>
      <AboutUs/>
    </div>
  )
}

export default AboutUsPage