import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      setErrorMsg("");

      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });

    } catch (error) {

        setErrorMsg("Failed to send message. Please try again.");
        setSuccess(false);
      }finally {
      setLoading(false);
    }
  };
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

      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            md:h-[500px]
            md:w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-500/15
            blur-[10px]
          "
        />
      </div>
      <div className="mx-auto max-w-4xl">
        <div
          className="
            px-8
            py-16
            md:px-16
            text-center
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
              max-w-xl
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

          <form
            onSubmit={handleSubmit}
            className="
              mt-10
              max-w-lg
              mx-auto
              space-y-3
            "
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  user_name: e.target.value,
                })
              }
              className="
                w-full
                border
                border-slate-300
                dark:border-white/10
                bg-transparent
                px-4
                py-2.5
                text-sm
                text-slate-900
                dark:text-white
                rounded-none
              "
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  user_email: e.target.value,
                })
              }
              className="
                w-full
                border
                border-slate-300
                dark:border-white/10
                bg-transparent
                px-4
                py-3
                text-slate-900
                dark:text-white
                rounded-none
              "
              required
            />

            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  subject: e.target.value,
                })
              }
              className="
                w-full
                border
                border-slate-300
                dark:border-white/10
                bg-transparent
                px-4
                py-3
                text-slate-900
                dark:text-white
                rounded-none
              "
              required
            />

            <textarea
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="
                w-full
                border
                text-sm
                border-slate-300
                dark:border-white/10
                bg-transparent
                px-4
                py-3
                text-slate-900
                dark:text-white
                rounded-none
              "
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                border
                bg-cyan-500
                text-slate-950
                hover:bg-cyan-900
                py-3
                font-medium
                transition-all
                duration-300
                hover:bg-cyan-500/10
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="mt-4 text-green-400 text-sm">
                ✓ Message sent successfully.
              </p>
            )}

            {errorMsg && (
              <p className="mt-4 text-red-400 text-sm">
                {errorMsg}
              </p>
            )}
          </form>

          <div className="mt-10 flex items-center justify-center gap-5">
            <a
              href="https://github.com/shivam-js"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-4xl
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
              href="https://www.linkedin.com/in/shivamprasad2026"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-4xl
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

            <a
              href="https://drive.google.com/uc?export=download&id=1Ga90X0-7sPdaIer946q7rxdCRssCj37U"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-4xl
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
              "
            >
              <FileText size={20} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );

  
};

export default Contact;