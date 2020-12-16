import { useState, useEffect } from 'react'

import About from "../components/About/index.js";
import DevContent from "../components/Dev/index.js";
import Footer from "../components/Footer/index.js";
import Works from "../components/Works/index.js";
import HomePage from "./HomePage/index.js";

export default function Home() {
  const [isFooterActive, setIsFooterAcitve] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsFooterAcitve(true)
    }, 3000)
  }, [])
  return (
    <>
      <HomePage />
      <About />
      <Works />
      <DevContent />
      {isFooterActive && <Footer setIsFooterAcitve={setIsFooterAcitve}/>}
    </>
  );
}