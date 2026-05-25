import Choosecontact from '@/components/contact/conchoose'
import Contactform from '@/components/contact/form'
import Banner from '@/components/global/banner'
import React from 'react'

function page() {
  return (
    <div>
            <Banner title="Contact Us" para="Learn more about our company and mission. lorem ipsum dolor sit amet, consectetur adipiscing elit. " slug="About Us" />
           <Choosecontact/>
            <Contactform />
      
    </div>
  )
}

export default page
