import React from 'react';
import Image from 'next/image';
import { contact } from '@/assets';
import { FaUserCheck, FaUserTie, FaGraduationCap } from 'react-icons/fa';
import { MdOutlineTravelExplore, MdUpdate, MdFactCheck } from 'react-icons/md';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <div className="flex gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-slate-50">
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-color4">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  </div>
);

export default function Choosecontact() {
 const features = [
    {
      title: "Trusted Student Support",
      description: "Get reliable guidance and transparent assistance throughout your MBBS abroad journey with a student-focused approach.",
      icon: <FaUserCheck />,
    },
    {
      title: "Wide University Options",
      description: "Choose from recognized medical universities across multiple countries offering quality education and global career opportunities.",
      icon: <MdOutlineTravelExplore className="text-2xl" />, // slight size adjustment for MD icons
    },
    {
      title: "Updated Country & Admission Information",
      description: "Stay informed with the latest updates about universities, eligibility, admission procedures, and MBBS abroad opportunities.",
      icon: <MdUpdate className="text-2xl" />,
    },
    {
      title: "Guidance From Experienced Counselors",
      description: "Receive proper counseling and career support from experienced professionals helping students make informed decisions.",
      icon: <FaUserTie />,
    },
    {
      title: "Smooth Admission Process",
      description: "From applications to final admission, every step is managed carefully to make the process simple and stress-free.",
      icon: <MdFactCheck className="text-2xl" />,
    },
    {
      title: "Personalized Assistance",
      description: "Get customized support based on your budget, preferred country, academic profile, and long-term medical career goals.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT SIDE CONTENT */}
        <div className="lg:col-span-7 space-y-8">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Vincit Edupath For <span className="text-color4">MBBS Abroad</span> Guidance
            </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="lg:col-span-5 lg:sticky lg:top-8 mt-8 lg:mt-0">
          <div className="relative aspect-[1]  ">
            <Image
              src={contact} // Replace with your actual image path
              alt="Medical students or guidance consultation"
              fill
              className="object-contain object-center"
              priority
            />
            {/* Visual Accent Overlay */}
          </div>
        </div>

      </div>
    </section>
  );
}