import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import Navbar from "./Navbar";
import gsap from "gsap";


const Hero = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        gsap.set(".navbar", { y: -80, opacity: 0 });
        gsap.set(".hero-content", { y: 80, opacity: 0 });
        gsap.set(".hero-bottom", { x: -80, opacity: 0 });
        gsap.set(".hero-card", { x: 80, opacity: 0 });
      
        const intro = gsap.timeline({
          defaults: { ease: "power2.out", duration: 1.4 },
     
        });
      
        intro
          .to(".navbar", { y: 0, opacity: 1, delay: 0.2 })
          .to(".hero-content", { y: 0, opacity: 1 }, "<")
          .to(".hero-bottom", { x: 0, opacity: 1 }, "<")
          .to(".hero-card", { x: 0, opacity: 1 }, "<");
      
          gsap.fromTo(
            ".hero-penguin",
            {
              xPercent: -50,
              x: 0,
              y: 0,
              scale: 1
            },
           {
            x:357,
            y:-80,
            scale:0.85,
            ease: "none",
            scrollTrigger: {
              trigger:".hero",
              start:"top top"
            }
           }
          );
           
      }, []);
      
  return (
    <>
    <section className="hero">
      <div className="hero-overlay" />

      <Navbar />

      <div className="hero-content">
        <h1>THE PENGUIN STORY</h1>
        <p className="hero-text">
          Everyone wa
          <span className="penguin-space"></span>
          lk alone for a while.
        </p>
      </div>

      <img
        src="/images/penguin.png"
        alt="Penguin"
        className="hero-penguin"
      />

      <div className="hero-bottom">
        <p>
          In the vast cold, he walks forward without knowing the end,
          guided only by instinct and quiet courage.<br />
          What looks like distance is sometimes the path that leads us back to our own people.
        </p>
        <button>Begin</button>
      </div>

      <div className="hero-card">
        <h2>Chapter One</h2>
        <p>
          A solitary step into the cold,
          where silence speaks louder than fear
          and every movement carries meaning.
        </p>
        <button>Read More</button>
      </div>
    </section>
    <div className="section1">
  <div className="section1-overlay" />

  <img
    src="/images/p1.png"
    alt="Penguin family"
    className="section1-image"
  />

  <div className="section1-card">
    <h1>Reunion</h1>
    <p>
    After the long walk through silence and snow,  
he finally slows his steps, listening to the stillness around him.  
The wind carries distant sounds, familiar yet forgotten,  
and shapes begin to form where the horizon once felt endless.  
Voices, once lost to the cold, return softly, without urgency.  
What began as solitude slowly turns into warmth and recognition.  
Every step taken alone starts to make sense in retrospect.  
Not every journey is meant to be lonely forever.  
Some paths require distance before they offer clarity.  
And some endings reveal themselves as quiet beginnings.  
Here, in the shared stillness, he understands—  
the cold was never an ending, only the way back home.

    </p>

    <div className="section1-buttons">
      <button>Continue</button>
      <button className="secondary">Explore</button>
    </div>
  </div>
</div>

    </>
  );
};

export default Hero;
