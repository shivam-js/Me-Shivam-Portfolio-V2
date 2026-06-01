import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "HireProof AI",
    description:
      "AI-powered hiring intelligence platform for recruiter workflow automation and candidate evaluation.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop",
    tech: ["MERN","TailwindCSS", "JWT", "LLM", "GSAP", "Vite", "REST APIs"],
    live: "#",
    github: "#",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "Full-stack expense management platform with JWT authentication and real-time analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop",
    tech: ["React.js", "Node.js", "MongoDB","Express.js", "JWT", "REST APIs", "Vite"],
    live: "#",
    github: "#",
  },
  {
    title: "TruthLens AI",
    description:
      "Fake news detection platform powered by RAG pipelines and LLM-based verification.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    tech: ["React.js", "Node.js","Express.js", "MongoDB", "RAG", "LLM", "Vite"],
    live: "#",
    github: "#",
  },
  {
    title: "Suryapura Rural Development Portal",
    description:
      "UI-UX focused Modern rural development web platform showcasing smart agriculture, digital education, infrastructure development and digital transformation initiatives.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1400&auto=format&fit=crop",
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
                h-[320px] 
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
                brightness-[0.38]
                group-hover:brightness-100
                transition-all
                duration-700
                group-hover:scale-[1.02]
              "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/65
                  to-transparent
                  group-hover:from-black/55
                  group-hover:via-black/25
                  transition-all
                  duration-700
                "
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-10">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-7 line-clamp-2">
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
                    opacity-0
                    translate-y-5
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-500
                  "
                >
                  <a
                    href={project.live}
                    className="
                      px-5 py-3 rounded-full
                      bg-gradient-to-r
                      bg-white/10
                      backdrop-blur-md
                      border border-white/10
                      text-white
                      text-sm
                      font-medium
                    "
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    className="
                      px-5 py-3 rounded-full
                      bg-white/10
                      backdrop-blur-md
                      border border-white/10
                      text-white
                      text-sm
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