import {
  banner, banner2, banner3, 
   
   uni,
   admission,
   visa,
   about,
   about2,
  
} from "@/assets";
import { BsPeopleFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { GrVisa } from "react-icons/gr";
import { LiaPassportSolid } from "react-icons/lia";

import { MdOutlineFactCheck, MdOutlineStickyNote2 } from "react-icons/md";

import { RiCommunityFill } from "react-icons/ri";

// homepage
export const navItemsArray = [
  { id: 1, label: "Home", href: "/" },

  { id: 2, label: "About Us", href: "/about-us" },

  {
    id: 3,
    label: "Our Services",
    href: "/our-services",
    subNav: [
      {
        id: 1,
        label: "University & Course Selection",
        href: "/our-services/university-and-course-selection",
      },
      {
        id: 2,
        label: "Country Selection",
        href: "/our-services/country-selection",
      },
      {
        id: 3,
        label: "Selection & Profile Applications",
        href: "/our-services/selection-and-profile-applications",
      },
      {
        id: 4,
        label: "Interview Preparation",
        href: "/our-services/interview-preparation",
      },
      {
        id: 5,
        label: "Visa Assistance",
        href: "/our-services/visa-assistance",
      },
    ],
  },

  {
    id: 4,
    label: "MBBS Abroad",
    href: "/mbbs-abroad",
    subNav: [
      {
        id: 1,
        label: "MBBS in Russia",
        href: "/mbbs-abroad/mbbs-in-russia",
      },
      {
        id: 2,
        label: "MBBS in Georgia",
        href: "/mbbs-abroad/mbbs-in-georgia",
      },
      {
        id: 3,
        label: "MBBS in Uzbekistan",
        href: "/mbbs-abroad/mbbs-in-uzbekistan",
      },
      {
        id: 4,
        label: "MBBS in Kazakhstan",
        href: "/mbbs-abroad/mbbs-in-kazakhstan",
      },
      {
        id: 5,
        label: "MBBS in Kyrgyzstan",
        href: "/mbbs-abroad/mbbs-in-kyrgyzstan",
      },
    ],
  },

  {
    id: 5,
    label: "MBBS in India",
    href: "/mbbs-in-india",
  },

  {
    id: 6,
    label: "Blogs",
    href: "/blogs",
  },

  {
    id: 7,
    label: "More",
    href: "#",
    subNav: [
      {
        id: 1,
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        id: 2,
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
      },
      {
        id: 3,
        label: "Careers",
        href: "/careers",
      },
    ],
  },

  {
    id: 8,
    label: "Contact Us",
    href: "/contact-us",
  },
];


export const sliderContent = [
  {
    id: 1,
    img: banner,
    welcome: "Begin Your Journey Towards Becoming a Doctor",
    title: "Trusted Guidance For Students Planning MBBS Abroad",
    para:
      "Get the right support for admissions, university selection, visa process, and career planning to make your medical education journey smooth and stress-free.",
    btntext: "Explore More",
    href: "/contact-us",
  },
  {
    id: 2,
    img: banner2,
    welcome: "Shaping Future Doctors With the Right Direction",
    title: "Expert Support For Admissions Beyond Just Applications",
    para: "Helping students choose the right country, university, and career path for MBBS abroad. ",
    btntext: "Contact Us",
    href: "/contact-us",
  },
    {
    id: 3,
    img: banner3,
    welcome: "Your Medical Goals Need Proper Planning",
    title: "Personalized Guidance For Students And Their Parents",
    para: "Guiding students and parents from counseling to successful MBBS abroad admissions. ",
    btntext: "Contact Us",
    href: "/contact-us",
  },
];

  export const Homeabout = {
    img1: about,
    img2: about2,
    label: "About Us",
    title: "Supporting Your Dream To Study MBBS Abroad ",
    para: "At Vincit Edupath, we support students at every step of their MBBS abroad journey with trusted guidance, university selection, admission assistance, and complete support for a better medical future. ",
    years: 25,
    vision: [
  {
    heading: "Integrity",
    img: banner,
    pointers: [
      "Transparent admission process",
      "Reliable student counseling",
      "Clear communication at every step",
      "Honest guidance for students and parents",
    ],
  },
  {
    heading: "Objective's",
    img: banner2,
    pointers: [
      "Making global medical education accessible",
      "Helping students build successful careers",
      "Connecting students with top universities",
      "Supporting informed career decisions",
    ],
  },
  {
    heading: "Excellence",
    img: banner3,
    pointers: [
      "Personalized admission assistance",
      "Professional documentation support",
      "End-to-end student guidance",
      "Dedicated support throughout the journey",
    ],
  },
]
  };


export const Servicedata = {
  title1: "OUR SERVICES",
  title2: "Complete Support For Your MBBS Abroad Journey",
  para: "Helping students with counseling, university admissions, visa process, and every important step towards studying medicine abroad successfully.",
  service: [
    {
      title: "Career Counseling & Guidance",
      text: "Get proper counseling and personalized support to choose the right country, university, and medical career path based on your future goals.",
      img: uni,  // आपके original structure के अनुसार यहाँ variable है, आप इसे अपनी actual image file se replace कर सकते हैं
      icon: <RiCommunityFill />,
    },
    {
      title: "Admissions In Recognized Universities",
      text: "We help students secure admission in trusted and globally recognized medical universities with complete application and documentation support.",
      img: admission,
      icon: <MdOutlineStickyNote2 />,
    },
    {
      title: "Visa Assistance & Travel Support",
      text: "From visa processing to travel planning, we assist students throughout the entire relocation process for a smooth transition abroad.",
      img: visa,
      icon: <GrVisa />,
    },
    {
      title: "FMGE / NExT / USMLE / PLAB Preparation",
      text: "Get guidance for major medical licensing exams with proper academic support to help students prepare for future medical careers globally.",
      img: uni,  
      icon: <RiCommunityFill />, // 
    },
  ],
};

export const Homechoose = {
      title1:"WHY CHOOSE US",
title2:"Helping Students Build Their Medical Career Abroad",
para:"Vincit Edupath supports students with proper guidance, trusted university options, and complete admission assistance for a smooth MBBS abroad journey. From counseling sessions to final admissions, we help students and parents make confident decisions for their future.",
  features : [
  {
    icon: <BsPeopleFill />,
    title: "Trusted Guidance At Every Step",
    text: "We provide clear information, honest counseling, and simple admission support to help students feel confident throughout the process.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <MdOutlineFactCheck />,
    title: "Helping Students Choose Better Opportunities",
    text: "Our team helps students find suitable universities, affordable options, and the right path for their medical career goals.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <LiaPassportSolid />,
    title: "Complete Support Beyond Admissions",
    text: "From documentation and visa assistance to travel planning and student support, we guide students throughout their journey abroad.",
    color: "from-purple-500 to-pink-500",
  },
]

}


export const footData = {
  contact : [{
    label: "Contact no",
    value: "+91 8595078896",
    href: "tel:+918595078896",
  },
  {
    label: "Email",
    value: "info@vincitedupath.com",
    href: "mailto:info@vincitedupath.com", 
  },
  {
    label: "Address",
    value: "714, Plot No A26, Block B, alt f Mohan Cooperative Industrial Estate, New Delhi - 110044",
    href: "/",
  },],

  social: [
    {                      
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/vincitedupath",
    },
    {
      label: <FaInstagram />,
      href: "https://www.instagram.com/vincitedupath",
    },
    {
      label: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/vincitedupath",
    },
    {
      label: <FaTwitter />,
      href: "https://twitter.com/vincitedupath",
    }
  ],

links:[
  
  {
  label:"Useful Links",
  nav:[
  { id: 9, label: "About Us", href: "/about-us" },
      {
        id: 1,
        label: "University & Course Selection",
        href: "/our-services/university-and-course-selection",
      },
      {
        id: 2,
        label: "Country Selection",
        href: "/our-services/country-selection",
      },
      {
        id: 3,
        label: "Selection & Profile Applications",
        href: "/our-services/selection-and-profile-applications",
      },
      {
        id: 4,
        label: "Interview Preparation",
        href: "/our-services/interview-preparation",
      },
      {
        id: 5,
        label: "Visa Assistance",
        href: "/our-services/visa-assistance",
      },
  {
    id: 6,
    label: "MBBS in India",
    href: "/mbbs-in-india",
  },

  {
    id: 7,
    label: "Blogs",
    href: "/blogs",
  },

  {
    id: 8,
    label: "Contact Us",
    href: "/contact-us",
  },]
},

 {
  label:"Other Links",
  nav:[
      {
        id: 1,
        label: "MBBS in Russia",
        href: "/mbbs-abroad/mbbs-in-russia",
      },
      {
        id: 2,
        label: "MBBS in Georgia",
        href: "/mbbs-abroad/mbbs-in-georgia",
      },
      {
        id: 3,
        label: "MBBS in Uzbekistan",
        href: "/mbbs-abroad/mbbs-in-uzbekistan",
      },
      {
        id: 4,
        label: "MBBS in Kazakhstan",
        href: "/mbbs-abroad/mbbs-in-kazakhstan",
      },
      {
        id: 5,
        label: "MBBS in Kyrgyzstan",
        href: "/mbbs-abroad/mbbs-in-kyrgyzstan",
      },

 
  
      {
        id: 6,
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        id: 7,
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
      },
      {
        id: 8,
        label: "Careers",
        href: "/careers",
      },
    ],
  },
]
}

export let blogData = {
  title1: "Latest Blogs",
  title2: "Get Updated With Our Recent Articles",
  blog: [
    {
      img: banner3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Name",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: banner3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Category",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: banner3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Section",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: banner3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Application",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
    {
      img: banner3,
      date: "20 June 2024",
      tag: "immigration",
      heading: "Top 10 Tips for a Successful Visa Country",
      para:
        "Navigating the visa application process can be daunting. Here are ten essential tips to help ensure your application is successful.",
    },
  ],
};






