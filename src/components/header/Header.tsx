"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { logo } from "@/assets";
import { usePathname } from "next/navigation";
import { MdAttachEmail, MdCall } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

const Header = ({ header }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Split the pathname and get the last part
    const lastSegment = pathname?.split("/").filter(Boolean).pop();

    let path = `/${lastSegment || "home"}`;
    // Store the last word (segment) in the state
    setActiveItem(path);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setNavItems(header?.navItems || []);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="h-20 w-full "></div>
      <header
        className={`fixed top-0 left-0 w-screen z-50 transition-all shadow-md duration-300 
        ${isVisible ? "translate-y-0 " : "-translate-y-full"}`}
      >
       <div className="max-md:hidden">
  <div className="md:flex md:py-7 bg-white items-center justify-between h-24 px-5 py-3 lg:px-20">
    <Link href={"/"}>
      <Image
        src={logo}
        alt="logo"
        className="w-[25vw] max-w-36 m-4 object-contain"
      />
    </Link>
    
             
                  <RightSide />

    
  </div>
  
  {/* Bottom Navigation Bar - Like the image showing secondary nav items */}
  <div className="mx-auto w-full bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
    <div className="container mx-auto px-5 lg:px-20">
      <div className="flex items-center justify-between py-3 text-white">
        <Menu
      navItemsArray={navItems}
      activeItemId={activeItem}
      onTop={isAtTop}
      onItemClick={handleNavItemClick}
    />
        
        <Link 
          href="/apply"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl uppercase transform hover:scale-105"
        >
          Apply Now
        </Link>
      </div>
    </div>
  </div>
</div>

        {/* Mobile Section */}
        <div
          className={`flex md:hidden w-screen items-center  justify-between h-20 px-3 bg-white`}
        >
          <div className="flex items-center relative cursor-pointer text-3xl justify-between w-full">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
                className="w-[110px] object-contain"
              />
            </Link>
            {isMobileMenuOpen ? (
              <VscChromeClose
                onClick={handleMobileMenu}
                className="text-black"
              />
            ) : (
              <IoMenu onClick={handleMobileMenu} className="text-black" />
            )}
          </div>
          {/* <RightSide /> */}
        </div>

        {/* Mobile Menu */}

        <div
          className={`fixed h-screen left-0 top-20  md:hidden bg-white overflow-x-hidden duration-300 transition-all ${isMobileMenuOpen ? "!w-[88%]" : "!w-0"}`}
        >
          <MenuMobile
            onTop={isAtTop}
            // navItemsArray={navItems}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            activeItemId={activeItem}
            onItemClick={handleNavItemClick}
          />
        </div>
      </header>
    </>
  );
};

export default Header;

function RightSide(onTop: any) {
  return (
    <div className="flex items-center gap-5">
      
      {/* Email */}
      <a
        className="group relative"
        href="mailto:info@vincitedupath.com"
      >
        <div className="relative flex items-center gap-3">
          
          {/* Icon */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-color2 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <MdAttachEmail className="text-lg" />
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-zinc-500">
              Mail On
            </p>

            <p className="text-sm font-bold text-zinc-900 transition-colors duration-300 group-hover:text-color2 lowercase">
              info@vincitedupath.com
            </p>
          </div>
        </div>
      </a>

      {/* Divider */}
      <div className="h-10 w-[1px] bg-zinc-300"></div>

      {/* Call */}
      <a
        className="group relative max-lg:hidden"
        href="tel:+918595078896"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative flex items-center gap-3">
          
          {/* Icon */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-color2 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <MdCall className="text-lg" />
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-zinc-500">
              Call On
            </p>

            <p className="text-sm font-bold text-zinc-900 transition-colors duration-300 group-hover:text-color2">
              +91 8595078896
            </p>
          </div>
        </div>
      </a>

      {/* Divider */}
      <div className="h-10 w-[1px] bg-zinc-300"></div>

      {/* Apply Now */}
      <a
        href="/apply-now"
        className="group relative"
      >
        <div className="relative flex items-center gap-3">
          
          {/* Icon */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-color2 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <FiArrowRight className="text-lg" />
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-zinc-500">
              Start Journey
            </p>

            <p className="text-sm font-bold text-zinc-900 transition-colors duration-300 group-hover:text-color2">
              Book A Consultation
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
