import type { Metadata } from "next";
// @ts-ignore: side-effect CSS import
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import  Preloader  from "@/components/loader";

export const metadata: Metadata = {
  title: "VincitEdupath",
  description: "Developed in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` text-black bg-white`}>
                {/* <Preloader /> */}

        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
