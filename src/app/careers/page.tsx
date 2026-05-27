import FirstSection from '@/components/career/first'
import { FifthSection, FourthSection, SecondSection, SixthSection, ThirdSection } from '@/components/career/others'
import Banner from '@/components/global/banner'
import TeamSection from '@/components/home/team'
import React from 'react'

const page = () => {
  return (
    <div>
 <Banner
                   title={"Careers"}
           para={"At Vincit Edupath, we work with students who dream of building successful medical careers abroad. "}
                   slug={"careers"}
                 />
<FirstSection/>
<SecondSection/>
<ThirdSection/>
<FourthSection/>
<FifthSection/>
<SixthSection/>

                       <TeamSection />
                     </div>
  )
}

export default page
