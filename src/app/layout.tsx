import type { Metadata } from "next";
// Suppress TypeScript error for side-effect CSS import when no declaration file is present
// @ts-ignore
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
