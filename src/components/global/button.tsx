import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

/* Main Wrapper */
function Buttonmain({ href, text1  }: { href: string; text1: string; }) {
const isTel =
  href.startsWith("tel:") ||
  href.startsWith("https") ||
  href.startsWith("mailto:") ||
  href.startsWith("www");
  if (isTel) {
    return (
      <a href={href} className="w-max inline-block group/btn">
        <Button text11={text1} />
      </a>
    );
  }

  return (
    <Link href={href} className="w-max inline-block group/btn">
      <Button text11={text1} />
    </Link>
  );
}

export default Buttonmain;

/* Button UI */
export const Button = ({ text11} :any) => {
  return (
    <div
        className="group relative flex items-center gap-3 px-8 py-4 rounded-full
        text-white font-semibold text-sm  tracking-wide overflow-hidden 
        transition-all bg-color4 hover:bg-color2 duration-300 hover:-translate-y-[2px] 
       " >
       
{text11 }      

        <FaArrowRight className="text-[15px] transition-all duration-300 group-hover:translate-x-1" />
      </div>
  );
};
