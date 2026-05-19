import AboutSection from "@/components/home/AboutSection";
import BannerSlider from "@/components/home/HomeBanner";
import ServiceSlider from "@/components/home/services";
import WhyChoose from "@/components/home/whychoose";
import Homeoxes from "@/components/home/boxes";
import WorkProcess from "@/components/home/workprocess";
import StatsBanner from "@/components/global/Contdown";
import OfferCountry from "@/components/home/countryOffer";
import Partners from "@/components/home/partner";
import Count2 from "@/components/home/count2";
import { world } from "@/assets";
import Image from "next/image";
import FaqSection from "@/components/home/FaqSection";
import TeamSection from "@/components/home/team";
import Contactform from "@/components/contact/form";

export default function Home() {
  return (
    <main>
      <BannerSlider />
      <Homeoxes />
      <AboutSection />
      <StatsBanner />
      <ServiceSlider />
      <OfferCountry />
      <Partners />
      <Count2 />
      <div className="w-full">
        <Image
          src={world}
          alt="world map"
          className="w-full h-full object-contain"
          width={1920}
          height={600}
        />
      </div>
      <WorkProcess />
      <WhyChoose />
      <FaqSection />
      <TeamSection />
      <Contactform />
      {/* <Blogs /> */}
    </main>
  );
}