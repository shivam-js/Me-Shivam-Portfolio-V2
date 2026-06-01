import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBrain,
  FaDatabase,
  FaCode,
  FaPalette,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiGreensock,
} from "react-icons/si";

const topRow = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaReact, name: "React" },
  { icon: SiTailwindcss, name: "TailwindCSS" },
  { icon: SiGreensock, name: "GSAP" },
  { icon: FaPalette, name: "Figma" },
];

const bottomRow = [
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: FaDatabase, name: "SQL" },
  { icon: FaDatabase, name: "MySQL" },
  { icon: FaPython, name: "Python" },
  { icon: FaCode, name: "REST APIs" },
  
];


const toolsRow = [
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiVercel, name: "Railway" },
  { icon: SiVercel, name: "Render" },
  { icon: SiGreensock, name: "VS Code" },
  { icon: FaDatabase, name: "Postman" },
];

const conceptsRow = [
  { icon: FaBrain, name: "AI Integration" },
  { icon: FaBrain, name: "Machine Learning" },
  { icon: FaPalette, name: "UI/UX" },
  { icon: FaPalette, name: "Oops" },
  { icon: FaBrain, name: "LLM Apps" },
  { icon: FaCode, name: "JWT" },
  { icon: FaBrain, name: "RAG" },
  { icon: FaCode, name: "DBMS" },
  { icon: FaCode, name: "OOPs" },
  { icon: FaCode, name: "CI/CD" },
  { icon: FaCode, name: "Docker" },
  { icon: FaCode, name: "Kubernetes" },
];


const SkillItem = ({ Icon, name }) => (
  <div
    className="
      flex
      flex-col
      items-center
      justify-center
      gap-2 
      md:gap-4
      min-w-[92px] 
      md:min-w-[140px]
      text-slate-700 
      dark:text-slate-400
      dark:text-slate-400
      hover:text-slate-900
      dark:hover:text-white
      transition
      duration-1000
    "
  >
    <Icon className="text-[28px] md:text-[42px]" />
    <span className="text-xs md:text-sm">{name}</span>
  </div>
);

const fadeMask =
  "pointer-events-none absolute top-0 z-20 h-full w-56";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        py-32
        bg-white
        dark:bg-[#030712]
        overflow-hidden
        transition-colors
        duration-500
      "
    >
        <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[0.25em] text-sky-600 dark:text-cyan-400 text-sm mb-5">
                Skills
            </p>
            <h3
                className="
                    mt-6
                    text-3xl
                    md:text-5xl
                    font-semibold
                    leading-tight
                    tracking-tight
                    text-slate-900 
                    dark:text-slate-50
                "
                style={{ fontFamily: "Sora, sans-serif" }}
                >
                Technologies I work with
            </h3>
        </div>

      {/* Row 1 */}
      <div className="mt-20 flex justify-center relative">
        <div
          className={`${fadeMask} left-0 bg-gradient-to-r from-white via-white/80 via-white/30 dark:from-[#030712] dark:via-[#030712]/80 dark:via-[#030712]/35 to-transparent`}
        />

        <div className="w-full max-w-5xl overflow-hidden whitespace-nowrap">
          <div className="flex w-max animate-marquee gap-12">
            {[...topRow, ...topRow].map((skill, i) => (
              <SkillItem
                key={i}
                Icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>
        </div>

        <div
          className={`${fadeMask} right-0 bg-gradient-to-l from-white via-white/80 via-white/30 dark:from-[#030712] dark:via-[#030712]/80 dark:via-[#030712]/35 to-transparent`}
        />
      </div>

      {/* Row 2 */}
      <div className="mt-12 flex justify-center relative">
        <div
          className={`${fadeMask} left-0 bg-gradient-to-r from-white via-white/80 via-white/30 dark:from-[#030712] dark:via-[#030712]/80 dark:via-[#030712]/35 to-transparent`}
        />

        <div className="w-full max-w-5xl overflow-hidden whitespace-nowrap">
          <div className="flex w-max animate-marquee-reverse gap-12">
            {[...bottomRow, ...bottomRow].map((skill, i) => (
              <SkillItem
                key={i}
                Icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>
        </div>

        <div
          className={`${fadeMask} right-0 bg-gradient-to-l from-white via-white/80 via-white/30 dark:from-[#030712] dark:via-[#030712]/80 dark:via-[#030712]/35 to-transparent`}
        />
      </div>



      <div className="max-w-6xl mx-auto px-6 text-center mt-28">

        <h3
          className="
            mt-6
            text-3xl
            md:text-5xl
            font-semibold
            leading-tight
            tracking-tight
            text-slate-900
            dark:text-slate-50
          "
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          Tools & Concepts
        </h3>
      </div>

      <div className="mt-16 flex justify-center relative">
        <div
          className={`${fadeMask} left-0 bg-gradient-to-r from-white via-white/80 via-white/30 dark:from-[#030712] dark:via-[#030712]/80 dark:via-[#030712]/35 to-transparent`}
        />

        <div className="w-full max-w-5xl overflow-hidden whitespace-nowrap">
          <div className="flex w-max animate-marquee-reverse gap-12">
            {[...toolsRow, ...toolsRow].map((skill, i) => (
              <SkillItem
                key={i}
                Icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>
        </div>

        <div
          className={`${fadeMask} right-0 bg-gradient-to-l from-white via-white/80 via-white/30 dark:from-[#030712] dark:via-[#030712]/80 dark:via-[#030712]/35 to-transparent`}
        />
      </div>

      <div className="mt-12 flex justify-center relative">
        <div
          className={`${fadeMask} left-0 bg-gradient-to-r from-white via-white/80 via-white/30 dark:from-[#030712] dark:via-[#030712]/80 dark:via-[#030712]/35 to-transparent`}
        />

        <div className="w-full max-w-5xl overflow-hidden whitespace-nowrap">
          <div className="flex w-max animate-marquee gap-12">
            {[...conceptsRow, ...conceptsRow].map((skill, i) => (
              <SkillItem
                key={i}
                Icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>
        </div>

        <div
          className={`${fadeMask} right-0 bg-gradient-to-l from-white via-white/80 via-white/30 dark:from-[#030712] dark:via-[#030712]/80 dark:via-[#030712]/35 to-transparent`}
        />
      </div>
    </section>
  );
};

export default Skills;