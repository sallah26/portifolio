import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Education from "./components/Education";

function App() {
  return  <div className="flex flex-col gap-8 lg:gap-20 items-center ">
        <section className="max-w-[1500px] ">
        {/* <Navbar /> */}
        <Hero />
        <Services />
        <Education />
        </section>
     
    </div>
  
}

export default App;
