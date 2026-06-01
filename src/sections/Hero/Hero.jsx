import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import profileImage from "../../assets/profile.jpg";

const rotatingTexts = [
  "Crafting AI-powered products with modern UI, scalable architecture, and seamless user experiences.",
  "Turning ideas into production-ready digital experiences that are fast, elegant, and built to scale.",
];

const Hero = () => {
  const heroRef = useRef(null);
  const heroIntroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const heroDpRef = useRef(null);

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.25 });

      tl.from(heroIntroRef.current, {
        opacity: 0,
        y: 22,
        duration: 0.9,
        ease: "power3.out",
      })

        .from(
          heroTitleRef.current,
          {
            opacity: 0,
            y: 36,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.45"
        )

        .from(
          heroSubtitleRef.current,
          {
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.45"
        )

        .from(
          heroButtonsRef.current.children,
          {
            opacity: 0,
            y: 18,
            stagger: 0.12,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        )

        .from(
          heroDpRef.current,
          {
            opacity: 0,
            scale: 0.92,
            x: 24,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=1.15"
        );

      gsap.to(heroDpRef.current, {
        y: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(".hero-subtitle-text", {
        opacity: 0,
        y: 8,
        duration: 0.3,
        onComplete: () => {
          setTextIndex((prev) => (prev + 1) % rotatingTexts.length);

          gsap.fromTo(
            ".hero-subtitle-text",
            { opacity: 0, y: 8 },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
            }
          );
        },
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="
        relative
        min-h-[82vh]
        pt-16
        pb-8
        md:pt-0
        md:pb-0
        md:min-h-screen
        flex
        items-center
        md:items-center
        justify-center
        overflow-hidden
        px-6
        bg-white
        dark:bg-[#030712]
        transition-colors
        duration-500
      "
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute bottom-16 right-16 h-[220px] w-[220px] rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {/* LEFT */}
        <div className="text-center max-w-4xl mx-auto">
          <div
            ref={heroIntroRef}
            className="flex items-center justify-center gap-6 mb-14 md:mb-24 w-fit mx-auto"
          >
            {/* DP */}
            <div
              ref={heroDpRef}
              className="relative h-20 w-20 md:h-24 md:w-24 shrink-0"
            >
              <div
                className="
                  absolute
                  inset-0
                  scale-125
                  blur-3xl
                  bg-sky-300/30
                  dark:bg-violet-500/20
                "
              />

              <img
                src={profileImage}
                alt="Shivam Prasad"
                className="
                  relative
                  h-full
                  w-full
                  object-cover
                  rounded-none
                  shadow-2xl
                "
              />
            </div>

            {/* Name + badge */}
            <div className="text-left">
              <p
                className="
                  text-xl
                  md:text-2xl
                  font-medium
                  text-slate-700
                  dark:text-slate-300
                  tracking-tight
                "
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Hello — I’m{" "}
                <span className="text-slate-900 dark:text-white font-semibold">
                  Shivam Prasad
                </span>
              </p>

              <p
                className="
                  mt-2
                  uppercase
                  tracking-[0.28em]
                  text-xs
                  md:text-sm
                  text-sky-600
                  dark:text-cyan-400
                "
              >
                FULL STACK DEVELOPER | CREATING IMPACT WITH AI
              </p>
            </div>
          </div>

          <h1
            ref={heroTitleRef}
            className="
              text-3xl 
              md:text-5xl 
              lg:text-[2.6rem]
              font-semibold
              leading-tight
              tracking-tight
              text-slate-900
              dark:text-white
            "
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Building scalable digital experiences with code,
            design & AI.
          </h1>

          <p
            ref={heroSubtitleRef}
            className="
              hero-subtitle-text
              mt-6
              max-w-3xl
              mx-auto
              text-center
              text-lg
              md:text-xl
              leading-relaxed
              text-slate-600
              dark:text-slate-300
            "
          >
            {rotatingTexts[textIndex]}
          </p>

          <div
            ref={heroButtonsRef}
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              items-center
              md:items-start
              gap-5
            "
          >
            <button
              className="
                px-8
                py-4
                rounded-full
                bg-indigo-600
                hover:bg-indigo-500
                dark:bg-violet-500
                dark:hover:bg-violet-400
                text-white
                font-semibold
                transition-all
                duration-300
              "
            >
              View Projects
            </button>

            <button
              className="
                px-8
                py-4
                rounded-full
                border
                border-slate-300
                dark:border-slate-700
                text-slate-700
                dark:text-slate-200
                hover:bg-slate-100
                dark:hover:bg-white/5
                transition-all
                duration-300
              "
            >
              Contact Me
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;