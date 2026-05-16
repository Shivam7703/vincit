import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navItemsArray } from "@/data/homeData"; // Import directly like your Menu component

interface NavItem {
  id: number | string;
  label: string;
  href: string;
  subNav?: NavItem[];
}

interface MenuMobileProps {
  setIsMobileMenuOpen: (value: boolean) => void;
  activeItemId: string | null;
  onItemClick: (href: string) => void;
  onTop: boolean;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  setIsMobileMenuOpen,
  activeItemId,
  onItemClick,
  onTop,
}) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (itemId: string) => {
    setOpenSubmenu(openSubmenu === itemId ? null : itemId);
  };

  const handleItemClick = (href: string) => {
    onItemClick(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <ul className="w-full flex flex-col">
      {navItemsArray?.map((item: NavItem) => (
        <li
          key={item.id}
          className="border-b border-gray-100/20 last:border-none"
        >
          <div className="w-full">
            <div
              className={`flex items-center justify-between px-4 py-3 cursor-pointer text-black hover:text-color2
                ${activeItemId === item.href ? " text-color2" : ""}
              `}
              onClick={() => {
                if (item.subNav && item.subNav.length > 0) {
                  toggleSubmenu(item.id.toString());
                } else {
                  handleItemClick(item.href);
                }
              }}
            >
              <Link
                href={item?.href}
                className="font transition-all duration-300"
              >
                {item.label}
              </Link>
              {item.subNav && item.subNav.length > 0 && (
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    openSubmenu === item.id.toString()
                      ? "rotate-0"
                      : "rotate-180"
                  }`}
                />
              )}
            </div>

            {/* Submenu */}
            {item.subNav && openSubmenu === item.id.toString() && (
              <div className={`w-full bg-white`}>
                {item.subNav.map((subItem: NavItem) => (
                  <Link
                    key={subItem.id}
                    href={subItem.href || "#"}
                    className={`block px-8 py-2 transition-all duration-300 text-black hover:text-color2
                      ${
                        activeItemId === subItem.href
                          ? "bg-white bg-opacity-30 backdrop-blur-xl text-color2"
                          : ""
                      }
                    `}
                    onClick={() => handleItemClick(subItem.href)}
                  >
                    <span className="whitespace-nowrap">{subItem.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MenuMobile;
