import Banner from '@/components/global/banner'
import Blogs from '@/components/home/blogs'
import React from 'react'

function page() {
  return (
    <div>
                    <Banner title="Blogs" para="Learn more about our company and mission. lorem ipsum dolor sit amet, consectetur adipiscing elit. " slug="Blog" />
        
            <Blogs isHome={false}/>
      
    </div>
  )
}

export default page
