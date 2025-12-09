import React from "react";
import Hero from "./HeroSection/Hero";
import CaseStudy from "./CaseStudy/CaseStudy";
import ServicesSection from "./Services/Services";
import FaqSection from "./FAQ/FAQ";
import Testimonials from "./Testimonial/Testimonial";
import BlogSection from "./Blog/Blog";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ServicesSection />
      <CaseStudy />
      <Testimonials />
      <FaqSection />
      <BlogSection/>
    </div>
  );
};

export default Home;
