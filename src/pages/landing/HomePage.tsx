import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import CreativeSolution from "./CreativeSolution";
import LearningSolutions from "./LearningSolutions";
import Solutions from "./Solutions";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const HomePage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pb-11 bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <CreativeSolution />
        <LearningSolutions />
        <Solutions />
        <FAQ />
        <CallToAction />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
