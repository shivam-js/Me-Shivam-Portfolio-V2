import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        px-6
        py-32
        bg-white
        dark:bg-[#030712]
        transition-colors
        duration-500
      "
    >
      <div className="mx-auto max-w-4xl">
        <div
          className="
            rounded-3xl
            border
            border-slate-200
            dark:border-white/10
            bg-slate-100/80
            dark:bg-white/[0.03]
            backdrop-blur-xl
            px-8
            py-16
            md:px-16
            text-center
            transition-colors
            duration-500
          "
        >
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-sky-600 dark:text-cyan-400">
            CONTACT ME
          </p>

          <h2
            className="
              text-3xl 
              md:text-[2.75rem]
              md:text-5xl
              font-bold
              text-slate-900
              dark:text-white
              transition-colors
              duration-500
            "
          >
            Let’s Build Something Great
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-400
              transition-colors
              duration-500
            "
          >
            I’m always open to discussing full-stack development,
            AI products, freelance opportunities, or interesting collaborations.
          </p>

          <a
            href="mailto:your@email.com"
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
             
              px-8
              py-4
              font-medium
              text-white
              transition-all
              duration-300
              bg-indigo-600 
              hover:bg-indigo-500 
              dark:bg-violet-500 
              dark:hover:bg-violet-400
            "
          >
            <Mail size={18} />
            Say Hello
          </a>

          <div className="mt-10 flex items-center justify-center gap-5">
            <a
              href="https://github.com/shivam-js"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-2xl
                border
                border-slate-200
                dark:border-white/10
                p-4
                text-slate-600
                dark:text-slate-300
                transition-all
                duration-300
                hover:bg-slate-200
                dark:hover:bg-white/5
                hover:text-slate-900
                dark:hover:text-white
              "
            >
              <FaGithub size={20} />
            </a>

            <a
              href="#"
              className="
                rounded-2xl
                border
                border-slate-200
                dark:border-white/10
                p-4
                text-slate-600
                dark:text-slate-300
                transition-all
                duration-300
                hover:bg-slate-200
                dark:hover:bg-white/5
                hover:text-slate-900
                dark:hover:text-white
              "
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;