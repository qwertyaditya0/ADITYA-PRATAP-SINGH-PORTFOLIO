import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowUpRight, Code2 } from "lucide-react";

import portfolio from "../assets/portfolio.png";
import futurepath from "../assets/futurepath.png";

const projects = [
  {
    title: "Future Path Education",
    subtitle: "Education Counseling Platform",
    desc: "A modern education counseling platform designed to help students explore colleges, scholarships and admission opportunities through an interactive digital experience.",
    github: "https://github.com/qwertyaditya0/FuturePath",
    live: "https://future-path-eight.vercel.app/",
    image: futurepath,
    featured: true,
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Personal Portfolio",
    subtitle: "Developer Portfolio",
    desc: "A responsive developer portfolio built to showcase my skills, projects, experience and journey as a Computer Science Engineering student.",
    github:
      "https://github.com/qwertyaditya0/ADITYA-PRATAP-SINGH-PORTFOLIO",
    live: "#",
    image: portfolio,
    featured: false,
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            What I've built
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-8">
            A selection of projects I've built while learning, experimenting
            and improving my development skills.
          </p>

        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-slate-950/70 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-500"
            >

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-cyan-500 text-slate-950 px-3 py-1.5 rounded-full text-xs font-bold">
                  <span className="w-1.5 h-1.5 bg-slate-950 rounded-full"></span>
                  Featured Project
                </div>
              )}

              {/* ================= IMAGE ================= */}
              <div className="relative h-60 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Project Icon */}
                <div className="absolute bottom-5 left-6 w-11 h-11 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-cyan-400">
                  <Code2 size={21} />
                </div>

              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-7">

                {/* Title */}
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-sm text-cyan-400 font-medium mb-1">
                      {project.subtitle}
                    </p>

                    <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
                  />

                </div>

                {/* Description */}
                <p className="text-gray-400 leading-7 mt-5">
                  {project.desc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-slate-900 border border-white/5 rounded-lg"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-7">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 text-slate-950 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-cyan-400 hover:-translate-y-0.5 transition duration-300"
                  >
                    <FaGithub size={17} />
                    Source Code
                  </a>

                  {/* Live Demo */}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-gray-700 text-gray-300 px-5 py-2.5 rounded-lg font-semibold text-sm hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-0.5 transition duration-300"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* ================= GITHUB CTA ================= */}
        <div className="text-center mt-14">

          <p className="text-gray-500 mb-4">
            More projects coming soon.
          </p>

          <a
            href="https://github.com/qwertyaditya0"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 font-medium transition duration-300"
          >
            <FaGithub size={19} />
            Explore my GitHub
            <ArrowUpRight size={17} />
          </a>

        </div>

      </div>
    </section>
  );
}