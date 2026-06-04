import { ExternalLink } from "lucide-react";
import hireproofImg from "../../assets/projects/hireproof-ai.png";
import expenseTrackerImg from "../../assets/projects/Smart-Expense-Tracker.png";
import truthlensImg from "../../assets/projects/truthlens-ai.png";
import suryapuraImg from "../../assets/projects/suryapura.png";
import dischargeSummaryImg from "../../assets/projects/discharge-summary-agent.png";

const projects = [
  {
    title: "HireProof AI",
    description:
      "AI-powered hiring intelligence platform for recruiter workflow automation and candidate evaluation.",
    image: hireproofImg,
    tech: ["MERN","TailwindCSS", "JWT", "LLM", "GSAP", "Vite", "REST APIs"],
    live: "https://hireproof-ai.vercel.app/",
    github: "https://github.com/shivam-js/HireProof-AI",
  },
  {
    title: "Discharge Summary Agent",
    description:
      "Agentic AI system for hospital discharge summary generation with medication reconciliation and safety guardrails.",
    image: dischargeSummaryImg,
    tech: ["Python", "LangGraph", "LLM", "RAG", "AI Agents"],
    live: "https://github.com/shivam-js/Discharge-Summary-Agent",
    github: "https://github.com/shivam-js/Discharge-Summary-Agent",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "Full-stack expense management platform with JWT authentication and real-time analytics dashboard.",
    image: expenseTrackerImg,
    tech: ["React.js", "Node.js", "MongoDB","Express.js", "JWT", "REST APIs", "Vite"],
    live: "https://smart-expense-trackee.netlify.app/",
    github: "https://github.com/shivam-js/smart-expense-tracker",
  },
  {
    title: "TruthLens AI",
    description:
      "Fake news detection platform powered by RAG pipelines and LLM-based verification.",
    image: truthlensImg,
    tech: ["React.js", "Node.js","Express.js", "MongoDB", "RAG", "LLM", "Vite"],
    live: "https://truthlenss-ai.netlify.app/",
    github: "https://github.com/shivam-js/TruthLens-AI",
  },
  {
    title: "Suryapura Rural Development Portal",
    description:
      "UI-UX focused Modern rural development web platform showcasing smart agriculture, digital education, infrastructure development and digital transformation initiatives.",
    image: suryapuraImg,
    tech: ["React.js", "TailwindCSS", "GSAP", "Vite"],
    live: "https://suryapura-rural-development-portal.vercel.app/",
    github:
      "https://github.com/shivam-js/suryapura-rural-development-portal",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        py-28
        px-6
        bg-white
        dark:bg-[#030712]
        transition-colors
        duration-500
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.25em] text-sky-600 dark:text-cyan-400 text-sm mb-5">
            Projects
          </p>

          <h2
            className="
              text-4xl md:text-[3.00rem] font-semibold tracking-[-0.03em] leading-[1.05]
            "
          >
            Check Out my Latest Works
          </h2>

          <p
            className="
              mt-6
              text-lg
              max-w-2xl
              mx-auto
              text-slate-600
              dark:text-slate-400
              transition-colors
              duration-500
            "
          >
            Products, platforms and AI-powered systems crafted with design,
            engineering and intelligent user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                h-[340px] 
                md:h-[340px]
                overflow-hidden
                rounded-none
                border
                border-slate-200
                dark:border-white/10
                bg-slate-100
                dark:bg-[#0b1120]
                hover:-translate-y-2
                transition-all
                duration-700
                hover:shadow-[0_20px_80px_rgba(124,58,237,0.16)]
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                brightness-[0.90]
                group-hover:brightness-110
                transition-all
                duration-700
                group-hover:scale-[1.02]
              "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/60
                  backdrop-blur-[1px]
                  group-hover:from-black/55
                  group-hover:via-black/25
                  transition-all
                  duration-700
                "
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-10">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                <p className="
                    text-slate-300
                    text-sm
                    leading-7
                    line-clamp-3
                    md:line-clamp-2
                   "
                  >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.slice(0, 5).map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        bg-white/10
                        backdrop-blur-md
                        border border-white/10
                        text-white/90
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div
                  className="
                    flex gap-3 mt-6

                    opacity-100
                    translate-y-0

                    md:opacity-0
                    md:translate-y-5

                    md:group-hover:opacity-100
                    md:group-hover:translate-y-0

                    transition-all
                    duration-500
                  "
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2
                      md:px-5 md:py-3

                      rounded-full
                      bg-white/10
                      backdrop-blur-md
                      border border-white/10
                      text-white

                      text-xs
                      md:text-sm
                    "
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2
                      md:px-5 md:py-3

                      rounded-full
                      bg-white/10
                      backdrop-blur-md
                      border border-white/10
                      text-white

                      text-xs
                      md:text-sm
                    "
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;