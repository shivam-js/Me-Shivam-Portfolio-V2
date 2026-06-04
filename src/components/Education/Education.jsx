import { useEffect, useRef } from "react";
import gsap from "gsap";

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-label", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".education-heading", {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".education-card", {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 70%",
        },
      });
    }, educationRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      ref={educationRef}
      className="
        py-28
        px-6
        bg-white
        dark:bg-[#030712]
        transition-colors
        duration-500
      "
    >
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="
            education-label
            uppercase
            tracking-[0.25em]
            text-sm
            text-sky-600
            dark:text-cyan-400
            mb-6
          "
        >
          Education
        </p>

        <h2
          className="
            education-heading
            text-3xl
            md:text-[2.2rem]
            font-semibold
            tracking-tight
            text-slate-900
            dark:text-white
          "
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Academic Background
        </h2>

        <div
          className="
            education-card
            mt-14
            max-w-3xl
            mx-auto

            border
            border-slate-200
            dark:border-white/10

            bg-white
            dark:bg-[#0b1120]

            p-8
            md:p-12

            transition-all
            duration-500
          "
        >
          <div className="space-y-12">

            {/* B.Tech */}
            <div>
                <h3
                className="
                    text-2xl
                    md:text-3xl
                    font-semibold
                    text-slate-900
                    dark:text-white
                "
                >
                Bachelor of Technology (B.Tech)
                </h3>

                <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300">
                Computer Science & Engineering
                </p>

                <p className="mt-4 text-slate-600 dark:text-slate-300">
                Babu Banarasi Das Northern India Institute of Technology
                </p>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                Dr. A.P.J. Abdul Kalam Technical University (AKTU)
                </p>

                <div
                className="
                    flex
                    flex-wrap
                    justify-center
                    gap-8
                    mt-6
                "
                >
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                    Session
                    </p>

                    <p className="font-semibold text-slate-900 dark:text-white">
                    2022 – 2026
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                    CGPA
                    </p>

                    <p className="font-semibold text-slate-900 dark:text-white">
                    7.5 / 10
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                    Graduation
                    </p>

                    <p className="font-semibold text-slate-900 dark:text-white">
                    2026
                    </p>
                </div>
                </div>
            </div>

            <div
                className="
                w-full
                h-px
                bg-slate-200
                dark:bg-white/10
                "
            />

            {/* Diploma */}
            <div>
                <h3
                className="
                    text-2xl
                    md:text-3xl
                    font-semibold
                    text-slate-900
                    dark:text-white
                "
                >
                Diploma
                </h3>

                <p className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300">
                Computer Science & Engineering
                </p>

                <p className="mt-4 text-slate-600 dark:text-slate-300">
                Government Polytechnic Latehar
                </p>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                Jharkhand University of Technology (JUT)
                </p>

                <div
                className="
                    flex
                    flex-wrap
                    justify-center
                    gap-8
                    mt-6
                "
                >
                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                    Session
                    </p>

                    <p className="font-semibold text-slate-900 dark:text-white">
                    2019 – 2022
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                    Percentage
                    </p>

                    <p className="font-semibold text-slate-900 dark:text-white">
                    80%
                    </p>
                </div>

                <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                    Graduation
                    </p>

                    <p className="font-semibold text-slate-900 dark:text-white">
                    2022
                    </p>
                </div>
                </div>
            </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;