import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  House,
  FolderKanban,
  Moon,
  Wrench,
  FileText,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const dockItems = [
  { icon: House, href: "#home", label: "Home" },
  { icon: Wrench, href: "#skills", label: "Skills" },
  { icon: FolderKanban, href: "#projects", label: "Projects" },
  {
    icon: FaGithub,
    href: "https://github.com/shivam-js",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/shivamprasad2026",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/Shivam_thisside",
    label: "X",
  },
  {
    icon: FileText,
    href: "https://drive.google.com/file/d/1Ga90X0-7sPdaIer946q7rxdCRssCj37U/view?usp=drivesdk",
    label: "Resume",
  },
  {
    icon: Moon,
    href: "#",
    label: "Theme",
    action: "theme",
  },
];

const spring = {
  type: "spring",
  stiffness: 280,
  damping: 22,
  mass: 0.75,
};

const FloatingDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [dockHovered, setDockHovered] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");

    const isDark =
        document.documentElement.classList.contains("dark");

    setTheme(isDark ? "dark" : "light");

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );
};

  return (
    <motion.div
      onMouseEnter={() => setDockHovered(true)}
      onMouseLeave={() => {
        setDockHovered(false);
        setHoveredIndex(null);
      }}
      animate={{
        paddingLeft: dockHovered ? 45 : 45,
        paddingRight: dockHovered ? 34 : 34,
        scale: dockHovered ? 1.02 : 1,
      }}
      transition={spring}
      className="
        fixed
        bottom-4
        sm:bottom-5
        md:bottom-6
        left-1/2
        -translate-x-1/2
        z-50
        flex
        items-center
        rounded-full
        border
        border-slate-300/20
        dark:border-white/10
        bg-transparent
        backdrop-blur-xl
        py-2
        backdrop-blur-3xl
        shadow-[0_10px_40px_rgba(15,23,42,0.12)]
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
        scale-[0.78]
        sm:scale-[0.88]
        md:scale-100
        origin-bottom
      "
    >
      {dockItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = hoveredIndex === index;

        const distance =
          hoveredIndex === null
            ? 999
            : Math.abs(hoveredIndex - index);

        let x = 0;
        let y = 0;
        let scale = 1;
        let width = 44;

        if (distance === 0) {
          scale = 1.35;
          y = -10;
          width = 65;
        } else if (distance === 1) {
          x = index < hoveredIndex ? -8 : 8;
          scale = 1.08;
          width = 54;
        } else if (distance === 2) {
          x = index < hoveredIndex ? -4 : 4;
          width = 48;
        }

        return (
          <motion.a
            key={index}
            href={item.action === "theme" ? "#" : item.href}
            target={
              item.href.startsWith("http")
                ? "_blank"
                : "_self"
            }
            rel="noreferrer"
            aria-label={item.label}
            onMouseEnter={() => setHoveredIndex(index)}
            onClick={(e) => {
                if (item.action === "theme") {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleTheme();
                    return;
                }
            }}
            className="
              group
              relative
              flex
              items-center
              justify-center
            "
            animate={{
              x,
              y,
              scale,
              width,
            }}
            transition={spring}
          >
            <motion.span
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                y: isActive ? -4 : 6,
                scale: isActive ? 1 : 0.96,
              }}
              transition={spring}
              className="
                absolute
                -top-5
                whitespace-nowrap
                rounded-lg
                bg-black/90
                px-2.5
                py-[5px]
                text-[10px]
                font-medium
                text-white
                pointer-events-none
              "
            >
              {item.label}
            </motion.span>

            <motion.span
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1.35 : 0.8,
              }}
              transition={spring}
              className="
                absolute
                h-8
                w-8
                rounded-full
                bg-cyan-400/20
                blur-xl
              "
            />

            <div
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-2xl
              "
            >
              <Icon
                size={20}
                className={`relative z-10 transition-colors duration-300 ${
                  isActive
                    ? "text-cyan-500 dark:text-white"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              />
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default FloatingDock;