import MVVCards from '@/components/about/mission'
import Banner from '@/components/global/banner'
import AboutSection from '@/components/home/AboutSection'
import Count2 from '@/components/home/count2'
import Partners from '@/components/home/partner'
import WhyChoose from '@/components/home/whychoose'
import { Homeabout, Homechoose } from '@/data/homeData'
import React from 'react'

function page() {
  return (
    <div>
      <Banner title="About Us" para="We believe in transparency, student-focused guidance, professional ethics, and continuous support to help students and parents make confident decisions for their future."  slug="About Us" />
            <AboutSection data={Homeabout}/>
            <MVVCards/>
            <Count2 />
      <WhyChoose data={Homechoose}/>
            
                  <Partners />
            
    </div>
  )
}

export default page
