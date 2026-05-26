import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Faq from "../global/faq";
import Aside from "./side";

interface TableRow {
    colum: string[];
}

interface TableData {
    theading: string[];
    rows: TableRow[];
}

interface SubContentItem {
    subheading?: string;
    para?: string;
    list?: string[];
    table?: TableData;
}

interface ContentSection {
    heading?: string;
    subcontent?: SubContentItem[];
}

interface FAQItem {
    que: string;
    ans: string;
}

interface VisaDataProps {
    data: {
        img: any;
        title: string;
        metatitle?: string;
        metakey?: string;
        metadesc?: string;
        content: ContentSection[];
        faq: FAQItem[];
    };
}

export default function Mbbsdetails({ data }: VisaDataProps) {
    const cleanHeading = (htmlStr: string) => {
        return htmlStr.replace(/<\/?[^>]+(>|$)/g, "");
    };

    return (
        <div className="px-4 py-8 sm:p-12 md:p-16 lg:px-24 xl:px-32 bg-gradient-to-b from-zinc-50/70 to-white/60 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-start max-w-7xl mx-auto">

                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Hero Image Container */}
                    {data.img && (
                        <div className="relative overflow-hidden rounded-2xl shadow-xl border border-zinc-100 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative aspect-[16/9] w-full">
                                <Image
                                    src={data.img}
                                    alt={data.title || "MBBS Abroad Destination"}
                                    fill
                                    priority
                                    className="object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                                />
                            </div>
                        </div>
                    )}

                    {/* Core Article Body */}
                    <article className="space-y-10 prose prose-zinc max-w-none">
                        {data.content?.map((section, secIndex) => (
                            <div key={secIndex} className="space-y-6">

                                {/* Section Primary Headings */}
                                {section.heading && (
                                    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-800 tracking-tight border-l-4 border-color2 pl-4 mt-8">
                                        {cleanHeading(section.heading)}
                                    </h2>
                                )}

                                {/* Subcontent Iterator */}
                                {section.subcontent?.map((item, index) => (
                                    <div key={index} className="space-y-4">

                                        {/* Sub-headings */}
                                        {item.subheading && (
                                            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-800 pt-2">
                                                {item.subheading}
                                            </h3>
                                        )}

                                        {/* Paragraph Context */}
                                        {item.para && (
                                            <p className="text-zinc-600 leading-relaxed text-base sm:text-lg">
                                                {item.para}
                                            </p>
                                        )}

                                        {/* Standard Icon Lists */}
                                        {item.list && Array.isArray(item.list) && (
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 !pl-0 list-none my-4">
                                                {item.list.map((listItem, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-3 text-zinc-700 text-sm sm:text-base bg-color2/5 hover:bg-color4/30 border border-amber-100/50 transition-colors p-3.5 rounded-xl shadow-sm"
                                                    >
                                                        <FaCheckCircle className="text-color2 mt-1 shrink-0 text-base" />
                                                        <span className="font-medium">{listItem}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Data Tables */}
                                        {item.table && (
                                            <div className="my-6 overflow-hidden rounded-xl border border-zinc-200 shadow-sm bg-white">
                                                <div className="overflow-x-auto">
                                                    <table className="min-w-full divide-y divide-zinc-200 text-sm sm:text-base table-fixed">
                                                        <thead>
                                                            <tr className="bg-gradient-to-r from-color4 to-color5 text-white">
                                                                {item.table.theading?.map((th, thIndex) => (
                                                                    <th
                                                                        key={thIndex}
                                                                        className="px-5 py-3.5 text-left font-semibold tracking-wider whitespace-nowrap first:rounded-tl-xl last:rounded-tr-xl"
                                                                    >
                                                                        {th}
                                                                    </th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-zinc-100 bg-white">
                                                            {item.table.rows?.map((row, rIndex) => (
                                                                <tr
                                                                    key={rIndex}
                                                                    className="even:bg-zinc-50/50 hover:bg-color4/20 transition-colors"
                                                                >
                                                                    {row?.colum?.map((col, cIndex) => (
                                                                        <td
                                                                            key={cIndex}
                                                                            className="px-5 py-3.5 text-zinc-600 font-medium break-words"
                                                                        >
                                                                            {col}
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                ))}
                            </div>
                        ))}
                    </article>

                    {/* Dynamic FAQ Block */}
                    {data.faq && data.faq.length > 0 && (
                        <div className="pt-6 border-t border-zinc-200">
                            <Faq data={data.faq} />
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1 lg:sticky lg:top-8 space-y-6 self-start w-full">
                    <Aside />
                </aside>

            </div>
        </div>
    );
}