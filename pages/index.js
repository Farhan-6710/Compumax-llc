import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/hero";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import PolicySection from "../components/PolicySection/PolicySection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ProjectSection from "../components/ProjectSection/ProjectSection";
import Footer from "../components/footer/Footer";
import Scrollbar from "../components/scrollbar/scrollbar";
import ContactFormComponent from "../components/ContactFrom/ContactFormComponent";

const HomePage = () => {
  return (
    <Fragment>
      <div>
        <Header />
        <main className="page_content">
          <Hero />
          <PolicySection />
          <FeaturesSection />
          <ServiceSection />
          <ProjectSection />
          <ContactFormComponent />
          {/* <Testimonial />
                    <TeamSection /> */}
          {/* <BlogSection /> */}
          {/* 
                    <CtaSection /> */}
        </main>
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};
export default HomePage;
