import React, { useState } from "react";
import { Toaster } from 'sonner';
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import PracticeAreas from "./components/sections/PracticeAreas";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Locations from "./components/sections/Locations";
import Contact from "./components/sections/Contact";
import Monviso from "./components/sections/Monviso";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [lang, setLang] = useState('it'); // 'it' or 'fr'

  return (
    <div className="App min-h-screen bg-[var(--bg-primary)] text-white selection:bg-[var(--brand-primary)] selection:text-white">
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Monviso />
        <PracticeAreas lang={lang} />
        <WhyChooseUs lang={lang} />
        <Locations lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
