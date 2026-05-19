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
      <div className="h-20 md:h-32 w-full "></div>
      <header
        className={`fixed top-0 left-0 w-screen z-50 transition-all font1 duration-300 
        ${isVisible ? "translate-y-0 " : "-translate-y-full"}`}
      >
        <div className="max-md:hidden">
          <div className="md:flex md:py-7 bg-white uppercase items-center justify-between  h-24  px-5 py-3 lg:px-20">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="logo"
                className="w-[25vw] max-w-40 m-4 object-contain "
              />
            </Link>
            <div className="flex md:gap-4 text-sm">
              <a
                className="flex items-center  hover:scale-105 duration-300"
                href="mailto:info@vincitedupath.com"
              >
                <MdAttachEmail className="text-2xl mr-2 " />
                <p className="font-semibold text-zinc-700 lowercase">
                  <span className="text-zinc-400 uppercase">Mail On </span>
                  <br />
                  info@vincitedupath.com
                </p>
              </a>
              <div className="h-10 w-[1px] bg-black/30"></div>
              <a
                className="flex  max-lg:hidden  hover:scale-105 duration-300"
                href="tel:+91 8595078896"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdCall className="text-2xl mr-2 mt-1" />
                <p className="font-semibold text-zinc-700">
                  {" "}
                  <span className="text-zinc-400">Call On </span>
                  <br />
                  +91 8595078896
                </p>
              </a>
            </div>
          </div>
          <div className="mx-auto w-full flex justify-center flex-row gap-4 bg-[#00aaff]">
            <Menu
              navItemsArray={navItems}
              activeItemId={activeItem}
              onTop={isAtTop}
              onItemClick={handleNavItemClick}
            />{" "}
            <RightSide />
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
    <div className=" p-2 px-4 hover:bg-zinc-800 hover:text-white duration-300 transition-all text-zinc-900 rounded-lg my-1 bg-white ">
      <a href={"tel:+918595078896"} className="w-max">
        <p className="font-semibold">CALL NOW</p>
      </a>
    </div>
  );
}
