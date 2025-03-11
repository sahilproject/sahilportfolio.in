"use client"
import { useEffect } from "react"
import About from "./about/page"
import Blog from "./blog/page"
import Contact from "./contact/page"
import Hero from "./Hero/Hero"
import Project from "./projects/page"
import Reviews from "./reviews/page"
import Services from "./services/page"
import Skills from "./skills/page"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

useEffect(()=>{
  const initAOS=async()=>{
    await import ("aos");
    AOS.init({
      duration:1000,
      easing:"ease",
      once:true,
      anchorPlacement:"top-bottom"
    })
  };
  initAOS();
})


  return (
    <div className="overflow-hidden">
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Skills/>
      <Reviews/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home
