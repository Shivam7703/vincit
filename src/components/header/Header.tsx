"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { MdAttachEmail, MdCall, MdLocationOn } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { logo } from "@/assets";

interface HeaderProps {
  header?: {
    navItems?: any[];
  };
}

const Header = ({ header }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [navItems, setNavItems] = useState<any[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const pathname = usePathname();

  // Handle active navigation item based on path
  useEffect(() => {
    const lastSegment = pathname?.split("/").filter(Boolean).pop();
    const path = `/${lastSegment || "home"}`;
    setActiveItem(path);
  }, [pathname]);

  // Handle scroll behaviors (hide/show header)
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

  // Sync navigation items from props
  useEffect(() => {
    setNavItems(header?.navItems || []);
  }, [header]);

  const handleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleNavItemClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Spacer to push page content down below the fixed header */}
      <div className="h-20 w-full" />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all shadow-md duration-300 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Desktop Navigation Section */}
        <div className="hidden md:block bg-white">
          <div className="flex items-center justify-between h-24 px-5 lg:px-20 py-4">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className="w-[25vw] max-w-36 object-contain"
                priority
              />
            </Link>
            <RightSide />
          </div>

          {/* Bottom Menu Strip */}
          <div className="w-full bg-gradient-to-r from-color4 to-color5">
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
                  className="bg-color2 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl uppercase transform hover:scale-105"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden w-full items-center justify-between h-20 px-4 bg-white">
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="w-[110px] object-contain"
              priority
            />
          </Link>
          <button 
            onClick={handleMobileMenu} 
            className="text-3xl text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <VscChromeClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Sidebar Drawer */}
        <div
          className={`fixed h-screen left-0 top-20 md:hidden bg-white overflow-x-hidden duration-300 transition-all ${
            isMobileMenuOpen ? "w-[88%] shadow-2xl" : "w-0"
          }`}
        >
          <MenuMobile
            onTop={isAtTop}
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

/* --- Sub-component for Top Header Info Links --- */

function RightSide() {
  return (
    <div className="flex items-center gap-6">
      {/* Email Connection */}
      <a className="group block" href="mailto:info@vincitedupath.com">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-color2 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <MdAttachEmail className="text-lg" />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">
              Mail On
            </p>
            <p className="text-sm font-bold text-zinc-900 transition-colors duration-300 group-hover:text-color2 lowercase">
              info@vincitedupath.com
            </p>
          </div>
        </div>
      </a>

      <div className="h-10 w-[1px] bg-zinc-200 hidden lg:block"></div>

      {/* Call Connection */}
      <a
        className="group hidden lg:block"
        href="tel:+918595078896"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-color2 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <MdCall className="text-lg" />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">
              Call On
            </p>
            <p className="text-sm font-bold text-zinc-900 transition-colors duration-300 group-hover:text-color2">
              +91 8595078896
            </p>
          </div>
        </div>
      </a>

      <div className="h-10 w-[1px] bg-zinc-200 hidden xl:block"></div>

      {/* Location/Address Pin */}
      <div className="hidden xl:flex items-center gap-3 max-w-max">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-color2 text-white">
          <MdLocationOn className="text-lg" />
        </div>
        <div className="max-w-max">
          <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">
            Office Address
          </p>
          <p className="text-xs font-bold text-zinc-900 line-clamp-2">
            Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="h-10 w-[1px] bg-zinc-200 hidden lg:block"></div>
      {/* Action / Consultation Button */}
      <Link href="/apply-now" className="group block">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-color2 text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <FiArrowRight className="text-lg" />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-zinc-500">
              Start Journey
            </p>
            <p className="text-sm font-bold text-zinc-900 transition-colors duration-300 group-hover:text-color2 whitespace-nowrap">
              Book A Consultation
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}