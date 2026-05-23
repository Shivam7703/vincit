import AboutSection from "@/components/home/AboutSection";
import BannerSlider from "@/components/home/HomeBanner";
import ServiceSlider from "@/components/home/services";
import WhyChoose from "@/components/home/whychoose";
import Homeoxes from "@/components/home/boxes";
import WorkProcess from "@/components/home/workprocess";
import OfferCountry from "@/components/home/countryOffer";
import Partners from "@/components/home/partner";
import Count2 from "@/components/home/count2";
import FaqSection from "@/components/home/FaqSection";
import TeamSection from "@/components/home/team";
import Contactform from "@/components/contact/form";
import Blogs from "@/components/home/blogs";

export default function Home() {
  return (
    <main>
      <BannerSlider />
      <Homeoxes />
      <AboutSection />
      <Count2 />
      <ServiceSlider />
      <OfferCountry />
      <Partners />
      <WorkProcess />
      <WhyChoose />
      <FaqSection />
      <TeamSection />
      <Contactform />
      <Blogs />
    </main>
  );
}