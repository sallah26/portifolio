import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  return  <div className=" dark:bg-zinc-800 dark:text-gray-100 flex flex-col  gap-8 lg:gap-20 items-center ">
        <section className="max-w-[1500px] ">
        <Navbar />
        <Hero />
        <Services />
        <Education />
        <Achievements />
        </section>
        <Footer />
     
    </div>
  
}

export default App;
