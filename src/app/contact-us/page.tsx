import Choosecontact from '@/components/contact/conchoose'
import Contactform from '@/components/contact/form'
import Banner from '@/components/global/banner'
import React from 'react'

function page() {
  return (
    <div>
            <Banner title="Contact Us" para="Vincit Edupath provides trusted guidance, transparent admission support, and reliable study abroad solutions focused on helping students build successful medical careers overseas."  slug="Contact Us" />
           <Choosecontact/>
            <Contactform />
      
    </div>
  )
}

export default page
