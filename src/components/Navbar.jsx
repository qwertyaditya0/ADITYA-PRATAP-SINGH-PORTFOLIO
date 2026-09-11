import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Download } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "DSA", link: "#dsa" },
    { name: "Achievements", link: "#achievements" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">

        {/* ================= LOGO ================= */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Aditya<span className="text-cyan-400">.</span>
        </a>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-8">

          <ul className="flex items-center gap-8">

            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="relative text-sm font-medium text-gray-300 hover:text-cyan-400 transition duration-300 group"
                >
                  {item.name}

                  {/* Hover Underline */}
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}

          </ul>

          {/* Resume Button */}
          <a
            href="/Aditya_Pratap_Singh_Resume%20%283%29.pdf"
            download
            className="flex items-center gap-2 bg-cyan-500 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:-translate-y-0.5 transition duration-300"
          >
            <Download size={16} />
            Resume
          </a>

        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="md:hidden text-xl text-gray-300 hover:text-cyan-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl">

          <ul className="flex flex-col items-center gap-6 py-7">

            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Mobile Resume */}
            <li>
              <a
                href="/Aditya_Pratap_Singh_Resume%20%283%29.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 bg-cyan-500 text-slate-950 px-6 py-2.5 rounded-lg font-semibold"
              >
                <Download size={17} />
                Download Resume
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}