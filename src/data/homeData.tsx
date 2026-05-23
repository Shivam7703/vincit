import {
  banner, banner2, banner3, 
   
   uni,
   admission,
   visa,
  
} from "@/assets";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { GrVisa } from "react-icons/gr";

import { MdOutlineStickyNote2 } from "react-icons/md";

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
    welcome: "Vincit Edupath",
    title: "Study MBBS Abroad With Confidence & Clarity ",
    para:
      "Affordable global medical education with complete admission support. ",
    btntext: "Explore More",
    href: "#contact",
  },
  {
    id: 2,
    img: banner2,
    welcome: "Your Trusted Partner For MBBS Abroad",
    title: "Build Your Medical Career With Vincit Edupath",
    para: "Explore internationally recognized medical universities with affordable tuition fees, expert admission guidance, visa assistance, and complete support designed to help students confidently begin their MBBS abroad journey.",
    btntext: "Contact Us",
    href: "#contact",
  },
    {
    id: 3,
    img: banner3,
    welcome: "Start Your MBBS Abroad Journey",
    title: "Study MBBS Abroad With Trusted Expert Guidance",
    para: "Affordable global medical education with complete admission and visa support for aspiring doctors.",
    btntext: "Contact Us",
    href: "#contact",
  },
];

export const Servicedata = {
  title1: "OUR SERVICES",
  title2: "End-To-End MBBS Abroad Guidance",
  para: "Helping students secure quality medical education abroad through trusted counseling, university selection, admission support, visa assistance, and complete journey guidance.",
  service: [
    {
      title: "University Selection",
      text: "Choose from globally recognized medical universities based on your budget, career goals, academic profile, and preferred country for MBBS abroad studies.",
      img: uni,
      icon: <RiCommunityFill />,
    },
    {
      title: "Admission Assistance",
      text: "Complete support with applications, documentation, eligibility verification, and admission procedures to make your MBBS abroad process smooth and stress-free.",
      img: admission,
      icon: <MdOutlineStickyNote2 />,
    },
    {
      title: "Visa Support",
      text: "Professional guidance for visa filing, travel preparation, and pre-departure assistance to help students confidently begin their international medical education journey.",
      img: visa,
      icon: <GrVisa />,
    },
     {
      title: "University Selection",
      text: "Choose from globally recognized medical universities based on your budget, career goals, academic profile, and preferred country for MBBS abroad studies.",
      img: uni,
      icon: <RiCommunityFill />,
    },
    {
      title: "Admission Assistance",
      text: "Complete support with applications, documentation, eligibility verification, and admission procedures to make your MBBS abroad process smooth and stress-free.",
      img: admission,
      icon: <MdOutlineStickyNote2 />,
    },
    {
      title: "Visa Support",
      text: "Professional guidance for visa filing, travel preparation, and pre-departure assistance to help students confidently begin their international medical education journey.",
      img: visa,
      icon: <GrVisa />,
    },
  ],
};


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






