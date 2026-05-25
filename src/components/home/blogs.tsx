import React from "react";
import { blogData as data } from "@/data/homeData";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { banner3 } from "@/assets";
import Buttonmain from "../global/button";

interface BlogItem {
  heading: string;
  date?: string;
  tag?: string;
  para?: string;
}

interface BlogsProps {
  isHome?: boolean;
}

export default function Blogs({ isHome }: BlogsProps) {
  // Generate a clean URL slug from the blog heading
  const getSlug = (heading: string) =>
    encodeURIComponent(heading.toLowerCase().replace(/\s+/g, "-"));

  // Limit items based on page context
  const displayBlogs = isHome ? data?.blog?.slice(0, 4) : data?.blog;

  return (
    <section className={`w-full bg-slate-50 text-slate-900 py-16 px-6 md:px-16 lg:px-20 xl:px-28`}>
      
      {/* ── HEADER ── */}
      {isHome ? (
        <div className=" mb-12 md:mb-16 text-left">
          {data?.title1 && (
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-color2 mb-3">
              {data.title1}
            </p>
          )}
          <div className="flex justify-between w-full gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">
            {data.title2}
          </h2>

          {isHome && <Buttonmain href={"/blogs"} text1={"Read More"} />}
          </div>
        </div>
      ):(
        <div className=" mb-12 md:mb-16 text-center">
          {data?.title1 && (
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-color2 mb-3">
              {data.title1}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900">
            {data.title2}
          </h2>
        </div>
      )}

      {/* ── GRID ── */}
      <div className={`grid gap-8 sm:grid-cols-2 ${isHome ? "lg:grid-cols-4" : "lg:grid-cols-3 "}`}>
        {displayBlogs?.map((blog: BlogItem, index: number) => {
          const blogLink = `/blogs/${getSlug(blog.heading)}`;

          return (
            <article
              key={index}
              className="group flex flex-col justify-between bg-white rounded-xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* ── IMAGE AREA ── */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <Image
                    src={banner3}
                    alt={blog.heading}
                    fill
                    sizes="(max-w-640px) 100vw, (max-w-1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  {/* Minimal Badges */}
                  {blog?.tag && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-zinc-800 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm">
                      {blog.tag}
                    </span>
                  )}
                </div>

                {/* ── CONTENT AREA ── */}
                <div className="p-5 space-y-3">
                  {/* Minimal Date Line */}
                  {blog?.date && (
                    <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
                      {blog.date}
                    </p>
                  )}

                  {/* Title */}
                  <Link href={blogLink} className="block">
                    <h3 className="text-lg font-bold text-zinc-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {blog.heading}
                    </h3>
                  </Link>

                  {/* Description Snippet */}
                  {blog?.para && (
                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 font-normal">
                      {blog.para}
                    </p>
                  )}
                </div>
              </div>

              {/* ── ACTION FOOTER ── */}
              <div className="px-5 pb-5 pt-2">
                <Link
                  href={blogLink}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-900 uppercase tracking-wider transition-all duration-200 hover:text-blue-600 group/btn"
                >
                  Read Article
                  <FaArrowRight className="text-[10px] transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}