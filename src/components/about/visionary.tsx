"use client";
import { banner2 } from '@/assets'
import { sliderText } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import Buttonmain from '../global/button'
import { FaRegCircleCheck } from 'react-icons/fa6'

function Visionary() {
    let data = {
        img:banner2,
        title1:"Visionary Builders",
        title2:"Pioneering Excellence in Modern Construction",
        para:"At OM Engineering Constructions Pvt. Ltd., we are committed to redefining Delhi’s infrastructure landscape through innovation, precision, and reliability. With strong technical expertise and a client-focused approach, we deliver high-quality residential, commercial, and infrastructure projects that reflect durability and excellence.",
        btntext:"Know More",
        points:[
            "Advanced engineering and modern construction methods",
            "Strict quality control at every project stage",
            "Timely execution with transparent processes",
            "Strong focus on safety and sustainability",
        ]
    }
  return (
     <div className="relative w-full overflow-hidden font1 text-white  min-h-[520px] items-center h-full flex gap-y-10 lg:p-24 sm:p-16 p-7 justify-end ">
      {/* Full-size image */}
      <Image
        src={data.img} // Use the dynamic image passed in
        className="absolute z-0 h-full w-full  object-cover object-center"
        alt="banner image"
        layout="fill"
      />
 

        <motion.div
          variants={sliderText}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1, delay: 0.2 }}
          className="flex h-max w-full flex-col max-w-[600px] border  rounded-2xl bg-white z-10 max-md:text-center justify-center gap-3 md:gap-6 p-6 md:p-9 max-md:items-center"
        >
<div className=" max-w-40 overflow-hidden py-2 rounded-full border-2">
    <h4 className=" animate-marquee-right text-color2 text-xs min-w-max sm:!text-sm ">
      {data.title1}
    </h4>
</div>
          <h1 className="inline-block text-3xl text-zinc-800 font-semibold md:text-4xl ">
            {data.title2} 
          </h1>
          <p className=" md:text-lg text-zinc-600 font-medium ">{data.para}</p>
          <div className="flex flex-wrap flex-col mb-3 gap-3">
            {data.points.map((point:any, index:number) => (
              <div key={index} className="flex items-center text-left gap-3">
                <div className="w-4 h-4 text-xl text-color2"><FaRegCircleCheck />
</div>
                <p className="font2 font-medium text-zinc-600">{point}</p>
              </div>
            ))}
          </div>
         <Buttonmain text={data.btntext} href={"/projects"} />        
        </motion.div>
          </div>
  )
}

export default Visionary
