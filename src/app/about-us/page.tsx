import MVVCards from '@/components/about/mission'
import Banner from '@/components/global/banner'
import AboutSection from '@/components/home/AboutSection'
import Count2 from '@/components/home/count2'
import Partners from '@/components/home/partner'
import WhyChoose from '@/components/home/whychoose'
import React from 'react'

function page() {
  return (
    <div>
      <Banner title="About Us" para="Learn more about our company and mission. lorem ipsum dolor sit amet, consectetur adipiscing elit. " slug="About Us" />
            <AboutSection />
            <MVVCards/>
            <Count2 />
                  <WhyChoose />
            
                  <Partners />
            
    </div>
  )
}

export default page
