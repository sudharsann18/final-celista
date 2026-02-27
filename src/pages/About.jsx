import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollReveal from "../components/ScrollReveal";
import collegeLogo from "../assets/college.png";
import deptLogo from "../assets/department.png";
import celistaLogo from "../assets/logo.png";


gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".about-image");

      images.forEach((img, index) => {
        gsap.fromTo(
          img,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100, // alternate direction
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    
    <section id="about" ref={sectionRef} className="about-section overflow-hidden py-16 bg-black text-white">
      <div className="about-heading text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-widest" style={{ fontFamily: "'Orbitron', sans-serif" }}>ABOUT US</h1>
      </div>

      {/* COLLEGE */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20 px-6 max-w-7xl mx-auto">
        <div className="about-image w-full md:w-1/2 flex justify-center">
          <img src={collegeLogo} alt="College Logo" className="max-w-[250px] md:max-w-sm w-full object-contain" />
        </div>

        <div className="about-text w-full md:w-1/2 text-center md:text-left">
          <ScrollReveal>
            Meenakshi Sundararajan Engineering College, founded in 2001 under
            IIET Society, is part of the esteemed KRS Group. Upholding a legacy
            of excellence, MSEC focuses on quality education, discipline and
            holistic development.
          </ScrollReveal>
        </div>
      </div>

      {/* DEPARTMENT */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 mb-20 px-6 max-w-7xl mx-auto">
        <div className="about-image w-full md:w-1/2 flex justify-center">
          <img src={deptLogo} alt="Department Logo" className="max-w-[250px] md:max-w-sm w-full object-contain" />
        </div>
        
        <div className="about-text w-full md:w-1/2 text-center md:text-left">
          <ScrollReveal>
            The Department of Artificial Intelligence & Data Science nurtures
            innovation through machine learning, deep learning and predictive
            analytics.
          </ScrollReveal>
        </div>
      </div>

      {/* CELISTA */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20 px-6 max-w-7xl mx-auto">
        <div className="about-image w-full md:w-1/2 flex justify-center">
          <img src={celistaLogo} alt="Celista Logo" className="max-w-[250px] md:max-w-sm w-full object-contain" />
        </div>

        <div className="about-text w-full md:w-1/2 text-center md:text-left">
          <ScrollReveal>
            CELISTA is the flagship annual technical symposium conducted by
            AI & DS department blending innovation, creativity and competition.
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}