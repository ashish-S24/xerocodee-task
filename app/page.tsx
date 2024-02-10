import Challenges from "@/components/Challenges";
import Hero from "@/components/Hero";
import LastSection from "@/components/LastSection";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <Services />
      <Technologies />
      <Testimonials />
      <WhyUs />
      <Team />
      <LastSection />
    </>
  );
}
