import { useEffect, useRef } from "react";
import gsap from "gsap";

const aboutLines = [
  "I enjoy building digital products that feel simple, useful and thoughtfully designed.",
  "Most of my work lives across React, JavaScript, Node.js, MongoDB and modern web technologies.",
  "Lately I’ve also been exploring AI-powered applications and practical LLM integrations using LLM APIs.",
  "I care deeply about clean UI, scalable code structure and intuitive user experience.",
  "I like turning ideas into products that people can actually use.",
  "Outside coding, I quite like to spend my time in Photography and Editing.",
];

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-label", {
        opacity: 0,
        y: 20,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 72%",
        },
      });

      gsap.from(".about-heading", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 72%",
        },
      });

      gsap.from(".about-line", {
        opacity: 0,
        y: 24,
        stagger: 0.22,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 52%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative pt-16 pb-28 md:pt-24 md:pb-32 px-6 bg-white dark:bg-[#030712] transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="about-label text-sky-600 dark:text-cyan-400 uppercase tracking-[0.25em] text-sm mb-6">
          About Me
        </p>

        <h2
          className="about-heading text-3xl md:text-[2.2rem] font-semibold text-slate-900 dark:text-slate-50 leading-[1.08] tracking-tight"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Crafting Digital Experiences that Matters.
        </h2>

        <div className="mt-14 space-y-5 max-w-3xl mx-auto">
          {aboutLines.map((line, i) => (
            <p
              key={i}
              className="
              about-line
              text-base
              md:text-xl
              text-slate-600
              dark:text-slate-300
              dark:opacity-50
              opacity-90
              leading-relaxed
            "
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;