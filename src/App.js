import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return  <div className="flex flex-col items-center ">
        <section className="max-w-[1500px] bg-green-600">
        {/* <Navbar /> */}
        <Hero />
        </section>
     
    </div>
  
}

export default App;
