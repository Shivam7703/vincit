// app/mbbs-abroad/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { Servicedata } from "@/data/homeData";
import Banner from "@/components/global/banner";
import Mbbsdetails from "@/components/mbbs/mbbs-detail";
import ServiceDetail from "@/components/service/detail";


interface PageProps {
  params: {
    slug: string;
  };
}

const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export function generateStaticParams() {
  return Servicedata.services.map((visa: any) => ({
    slug: createSlug(visa.title),
  }));
}



export default function VisaPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const singleVisa = Servicedata.services.find(
    (visa: any) => createSlug(visa.title) === decodedSlug
  );

  if (!singleVisa) {
    notFound();
  }


  return (
    <main>
      
      <Banner
        title={singleVisa.title}
para={singleVisa?.text ? `${singleVisa.text.slice(0, 80)}.....` : ""}
        slug={`visa/${createSlug(singleVisa.title)}`}
      />
      <ServiceDetail data={singleVisa} />
    </main>
  );
}