import Image from "next/image";
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12 } from "@/assets"; // apne path se adjust karo

const partners = [
  p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12
];

export default function Partners() {
  return (
    <section className="relative md:py-12 p-6 md:px-14 lg:px-20 overflow-hidden">
     

     
      {/* Heading */}
      <div className="relative text-center mb-7 sm:mb-12">
       
        <h2 className="font-black  text-zinc-900 text-3xl md:text-4xl tracking-tight">
          50+{" "}
          <span className="text-color3">Tie Ups</span>{" "}
          Across The World
        </h2>
      </div>

      {/* Grid */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {partners.map((partner, index) => {
            const row = Math.floor(index / 4);
            const col = index % 4;
            const totalRows = Math.ceil(partners.length / 4);
            const isLastRow = row === totalRows - 1;
            const isLastCol = col === 3;

            return (
              <div
                key={index}
                className={`
                  relative flex items-center justify-center p-6 md:p-8
                  group cursor-pointer transition-all duration-300
                  hover:bg-white/60
                  ${!isLastRow ? "border-b border-color2/15" : ""}
                  ${!isLastCol ? "border-r border-color2/15" : ""}
                `}
              >
                {/* Logo */}
                <div className="relative w-full max-w-36 h-14 sm:h-20 transition-all duration-300 group-hover:scale-105 ">
                  <Image
                    src={partner}
                    alt={`partner-${index}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}