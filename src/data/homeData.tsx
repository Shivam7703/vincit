import {
  banner, banner2, banner3, logo2, 
   
   uni,
   admission,
   visa,
   kyrg,
   rus,
   geor,
  
} from "@/assets";

import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrLocation, GrVisa } from "react-icons/gr";

import { LuPhone } from "react-icons/lu";
import { MdOutlineAltRoute, MdOutlineStickyNote2 } from "react-icons/md";

import { RiCommunityFill, RiMailSendLine } from "react-icons/ri";

// homepage
export const navItemsArray = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About Us", href: "#about" },
  {
    id: 3,
    label: "Our Services",
    href: "#services",
  
  },
  { id: 4, label: "MBBS Abroad", href: "#abroad" },
  
  // { id: 6, label: "Blogs", href: "/blogs" },
  { id: 7, label: "Contact Us", href: "#contact" },
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
  ],
};



export const blogData = {
  
  title1: "Blogs & News",
  title2: "Stay Updated With our Latest News And Blogs",
  blogs: [
    {
      id: 1,
      title: "Best Builders in Delhi NCR",
      text:
        "The Delhi National Capital Region (NCR) is one of India’s fastest-growing real estate hubs. With rapid urbanization, infrastructure development, and increasing demand for modern housing and commercial spaces, the need for reliable and high-quality builders has never been greater. Choosing the right builder is critical—not only for securing a property but for...",
      date: "Feb 13, 2026",
      img: kyrg,
        author: "Admin",
        featured: true
    },
    {
      id: 2,
      title: "How to Choose the Perfect Property in the Ideal Location",
      text:
        "Buying a property is one of the biggest decisions you’ll make, whether it’s for your home, investment, or business. Choosing the perfect property means more than just liking...",
   
 date: "Feb 01, 2025",
        author: "Developer", 
             img: rus,
    },
    {
      id: 3,
      title:
        "Why People Are Choosing 4BHK Flats in Delhi",
      text:
        "Delhi’s homebuyers are thinking bigger—and smarter. Over the last few years, the demand for 4BHK flats in Delhi has grown steadi...",

       date: "Jan 18, 2026",
      img: geor,
        author: "Admin",
    },
    {
      id: 4,
      title:
        "Vastu-Compliant Homes: Are They Worth Investing In?",
      text:
        "In India, buying a home is not just a financial decision—it’s an emotional one. Along with location, budget, and desig...",
      
       date: "Jan 05, 2026",
      img: banner,
        author: "Admin",
    },
  ],
};

// about Page
export const aboutBanner = {
  title: "About Us",
  para:
    "We build strong, reliable spaces with a commitment to quality and trust. Our focus is on delivering every project with precision, safety, and excellence. ",
  slug: "about-us",
  img: banner2,
};

