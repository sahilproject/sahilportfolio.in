"use client"
import { useEffect } from "react"
import About from "./about/page"
import Blog from "./blog/page"
import Contact from "./contact/page"
import Hero from "./Hero/Hero"
import Project from "./projects/page"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from "././services/page"
import Reviews from "./Reviews/Reviews"
import Skills from "./skills/page"



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
      <Project/>
      <Skills/>
      <Services/>
      <Reviews/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Home
