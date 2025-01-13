import Image from "next/image";
import Hero from "./components/hero";
import Services from "./components/service";
import Testimonials from "./components/testimonial";
import Team from "./components/team";
import Faqs from "./components/faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonials />
      <Team />
      <Faqs />
    </div>
  );
}
