import Banner from '@/components/global/banner'
import Blogs from '@/components/home/blogs'
import React from 'react'

function page() {
  return (
    <div>
                    <Banner title="Blogs" para="Get Latest News and Updates" slug="Blog" />
        
            <Blogs isHome={false}/>
      
    </div>
  )
}

export default page
