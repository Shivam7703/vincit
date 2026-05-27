import React from 'react';
import Image from 'next/image';
import { career } from '@/assets';

function FirstSection() {
  return (
    <section className="py-7 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex layout for mobile (stacked) and Desktop (side-by-side) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          
          {/* Left Side: Content Box */}
          <div className="w-full lg:w-1/2 space-y-5 text-left order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              Build Careers That Help Shape Student Futures
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At Vincit Edupath, we work with students who dream of building successful medical careers abroad. Our team believes in honest guidance, continuous learning, and creating meaningful impact through education, counseling, and student support services.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We are always looking for passionate individuals who can contribute with fresh ideas, professional skills, and a student-first approach.
            </p>
            
           
          </div>

          {/* Right Side: Image Box */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gray-50 shadow-md">
              <Image
                src={career}
                alt="Build Careers at Vincit Edupath"
                fill
                priority
                sizes="(max-w: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FirstSection;