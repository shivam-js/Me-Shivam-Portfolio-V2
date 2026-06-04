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
          heroButtonsRef.current,
          {
            opacity: 0,
            y: 18,
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
        md:min-h-[88vh]
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
        <div className="absolute top-24 left-1/2 h-[280px] w-[280px]
            md:h-[460px] md:w-[460px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute bottom-16 right-16 h-[140px] w-[140px]
            md:h-[220px] md:w-[220px] rounded-full bg-cyan-400/10 blur-[120px]" />
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
              className="
                relative
                h-24
                w-24
                md:h-28
                md:w-28
                shrink-0
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  scale-[1.2]
                  blur-[32px]

                  bg-transparent

                  dark:bg-violet-500/25
                "
              />

              <div
                className="
                  relative
                  h-full
                  w-full
                  p-[3px]

                  bg-white
                  dark:bg-white/5

                  border
                  border-slate-200
                  dark:border-white/10

                  backdrop-blur-xl

                  shadow-[0_15px_40px_rgba(15,23,42,0.12)]

                  dark:shadow-[0_20px_60px_rgba(139,92,246,0.18)]
                "
              >
                <img
                  src={profileImage}
                  alt="Shivam Prasad"
                  className="
                    h-full
                    w-full
                    object-cover
                    rounded-none
                  "
                />
              </div>
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
              FULL STACK DEVELOPER
              <br />
              CREATING IMPACT WITH AI
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
              mt-8
              flex
              flex-col
              sm:flex-row
              justify-center
              items-center
              gap-5
            "
          >
            {/* View Projects */}
            <a
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group

                relative
                inline-flex
                items-center
                gap-4

                px-8
                py-4

                border
                border-cyan-500/70

                text-slate-900
                dark:text-white

                bg-cyan-500/5

                transition-all
                duration-300

                hover:bg-cyan-500/10
                hover:border-cyan-400
              "
            >
              <span className="font-medium">
                View Projects
              </span>

              <span
                className="
                  flex
                  items-center
                  justify-center

                  h-8
                  w-8

                  rounded-full

                  bg-cyan-400
                  text-slate-950

                  text-sm

                  animate-bounce
                "
              >
                ↓
              </span>
            </a>

            {/* Let's Connect */}
            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center

                px-8
                py-4

                border
                border-slate-300
                dark:border-white/15

                text-slate-700
                dark:text-slate-300

                font-medium

                transition-all
                duration-300

                hover:border-slate-900
                dark:hover:border-white

                hover:text-slate-900
                dark:hover:text-white
              "
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;