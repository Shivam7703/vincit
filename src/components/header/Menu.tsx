import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navItemsArray } from "@/data/homeData";


const Menu = ({ activeItemId, onItemClick , onTop}: any) => {
  return (
    <ul className={`hidden items-center xl:gap-x-3 w-max md:gap-x-0 text-white md:flex`}>
      {navItemsArray?.map((item: any) => (
        <li key={item?.id} className="group relative transition-all px-2 py-1 border-r border-white/60 last:border-none">
          <Link
            href={item?.href || "#"}
            className={` ${activeItemId === item.href ? " rounded-2xl bg-opacity-90"
               : "bg-transparent"} p-2  flex justify-center  cursor-pointer items-center gap-1`}
            onClick={() => onItemClick(item.id, item.href)}
          >
            <span
              className={` transition-all hover:text-orange-200 text-lg hover:scale-105 duration-300 
             
              `}>              {item?.label}
            </span>
            {item?.subNav && item.subNav?.length !== 0 && (
              <IoIosArrowDown className={`rotate-180 transition-all group-hover:rotate-0 `} />
            )}
          </Link>
          {/* dropdown */}
          {item.subNav && (
            <div className={`absolute left-0 top-[100%] z-30 hidden w-auto flex-col gap-1 rounded bg-white py-3 shadow-md transition-all group-hover:flex "bg-opacity-100 text-black`}>
              {item.subNav.map((nav: any) => (
                <Link
                  key={nav.id}
                  href={nav.href || "#"}
                  className={`hover:bg-white bg-opacity-30 flex cursor-pointer items-center py-1 pl-2 pr-8 hover:text-color2 
                   `}
                  onClick={() => onItemClick(nav.id, nav.href)}
                >
                  <span className="whitespace-nowrap pl-3">{nav.label}</span>
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
