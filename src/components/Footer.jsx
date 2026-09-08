import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 text-white">

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">

        {/* ================= TOP ================= */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}

          <div className="text-center md:text-left">

            <a
              href="#home"
              className="text-2xl font-bold tracking-wide"
            >
              Aditya<span className="text-cyan-400">.</span>
            </a>

            <p className="text-gray-500 mt-2 text-sm">
              Java Developer • React Developer • Problem Solver
            </p>

          </div>

          {/* Social Links */}

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/qwertyaditya0"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-pratap-singh-bb965b2a0/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <ArrowUp size={20} />
            </a>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}

        <div className="border-t border-white/5 my-8"></div>

        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">

          <p className="text-gray-500">
            © {new Date().getFullYear()} Aditya Pratap Singh. All rights reserved.
          </p>

          <p className="text-gray-500 flex items-center gap-1">
            Built with
            <Heart
              size={14}
              className="text-cyan-400 fill-cyan-400"
            />
            using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
}