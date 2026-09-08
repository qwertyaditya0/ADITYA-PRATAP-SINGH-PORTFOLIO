import hero from "../assets/aditya.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden px-6 sm:px-10 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 rounded-full text-sm text-cyan-400 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            Available for opportunities
          </div>

          {/* Greeting */}
          <p className="text-gray-400 text-lg mb-3">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Aditya
            <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Pratap Singh
            </span>
          </h1>

          {/* Dynamic Role */}
          <h2 className="text-xl sm:text-2xl mt-6 font-semibold text-gray-300">
            <span className="text-cyan-400">
              <TypeAnimation
                sequence={[
                  "Java Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-gray-400 text-base sm:text-lg leading-8">
            Computer Science Engineering student passionate about
            building modern applications, solving problems with
            Data Structures & Algorithms, and turning ideas into
            real-world products.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* Resume Button */}
            <a
              href="/Aditya_Pratap_Singh_Resume%20%283%29.pdf"
              download
              className="flex items-center gap-2 bg-cyan-500 text-slate-950 font-semibold px-6 py-3 rounded-xl hover:bg-cyan-400 hover:-translate-y-1 transition duration-300 shadow-lg shadow-cyan-500/20"
            >
              <Download size={18} />
              Download Resume
            </a>

            {/* Projects Button */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              View Projects →
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/qwertyaditya0"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <FaGithub size={25} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aditya-pratap-singh-bb965b2a0/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedin size={25} />
            </a>

            {/* Divider */}
            <span className="h-6 w-px bg-gray-700"></span>

            {/* Location */}
            <span className="text-sm text-gray-500">
              Based in India 🇮🇳
            </span>

          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex justify-center md:justify-end">

          <div className="relative">

            {/* Image Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            {/* Gradient Border */}
            <div className="relative p-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500">

              <img
                src={hero}
                alt="Aditya Pratap Singh"
                className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-8 border-slate-950"
              />

            </div>

            {/* Floating Focus Card */}
            <div className="absolute -bottom-5 -left-8 bg-slate-900/90 backdrop-blur-md border border-gray-700 px-5 py-3 rounded-xl shadow-xl">

              <p className="text-xs text-gray-500">
                Currently focused on
              </p>

              <p className="text-sm font-semibold text-cyan-400">
                Java + DSA
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 transition animate-bounce"
      >
        <ArrowDown size={22} />
      </a>

    </section>
  );
}