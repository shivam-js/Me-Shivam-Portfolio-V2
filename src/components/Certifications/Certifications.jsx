import { useEffect, useRef } from "react";
import gsap from "gsap";

const certifications = [
  {
    title: "Innovation & Design Thinking",
    issuer: "Kalam Pragati × ERA Foundation",
    year: "2025",
    pdfUrl: "/certificates/innovation-design-thinking.pdf",
    verifyUrl: "https://kalampragati.com/kalam-pragati-course-certificate-verification/",
  },
  {
    title: "Foundations of UX Design",
    issuer: "Google (Coursera)",
    year: "2026",
    pdfUrl: "/certificates/foundations-of-ux-design.pdf",
    verifyUrl: "https://coursera.org/verify/X9WDHM0QXQN7",
  },
  {
    title: "UX Design Process",
    issuer: "Google (Coursera)",
    year: "2026",
    pdfUrl: "/certificates/ux-design-process.pdf",
    verifyUrl: "https://coursera.org/verify/O5SMWB9O43BE",
  },
  {
    title: "MERN Stack Development & DSA",
    issuer: "ShapeMySkills × Ducat",
    year: "2025",
    pdfUrl: "/certificates/mern-stack-development-dsa.pdf",
    verifyUrl: "https://shapemyskills.in/e-certificate/68d12eef8ae46067417c34b0",
  },
  {
    title: "Generative AI Applications",
    issuer: "IBM (Coursera)",
    year: "2026",
    pdfUrl: "/certificates/generative-ai-applications.pdf",
    verifyUrl: "https://coursera.org/verify/ZNF50ZSM9IZF",
  },
  {
    title: "Building RAG Applications",
    issuer: "IBM (Coursera)",
    year: "2026",
    pdfUrl: "/certificates/building-rag-applications.pdf",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/ZMXJG99F68YB",
  },
];

const Certifications = () => {
  const certRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cert-label", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: certRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".cert-heading", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: certRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".cert-grid", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: certRef.current,
          start: "top 75%",
        },
      });
    }, certRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={certRef}
      className="
        py-24
        px-6
        bg-white
        dark:bg-[#030712]
        transition-colors
        duration-500
      "
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p
            className="
              cert-label
              uppercase
              tracking-[0.25em]
              text-sm
              text-sky-600
              dark:text-cyan-400
              mb-6
            "
          >
            Certifications
          </p>

          <h2
            className="
              cert-heading
              text-3xl
              md:text-[2.2rem]
              font-semibold
              tracking-tight
              text-slate-900
              dark:text-white
            "
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Continuous Learning Journey
          </h2>
        </div>

        <div
          className="
            cert-grid
            mt-14

            grid
            grid-cols-1
            md:grid-cols-2

            gap-5

            max-w-5xl
            mx-auto
          "
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                min-h-[180px]

                flex
                flex-col
                justify-between

                border
                border-slate-200
                dark:border-white/10

                bg-white
                dark:bg-[#0b1120]

                px-6
                py-5

                transition-all
                duration-300

                hover:-translate-y-1

                hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]

                dark:hover:shadow-[0_10px_30px_rgba(139,92,246,0.12)]
              "
            >
              <div>
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-slate-900
                    dark:text-white
                    leading-snug
                  "
                >
                  {cert.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    text-slate-600
                    dark:text-slate-300
                  "
                >
                  {cert.issuer}
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {cert.year}
                </p>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    font-medium
                    text-sky-600
                    dark:text-cyan-400
                    hover:underline
                  "
                >
                  View PDF →
                </a>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-sm
                    font-medium
                    text-slate-500
                    dark:text-slate-400
                    hover:text-slate-900
                    dark:hover:text-white
                  "
                >
                  Verify →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;