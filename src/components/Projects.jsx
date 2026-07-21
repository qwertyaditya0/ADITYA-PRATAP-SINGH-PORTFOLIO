import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "Personal Portfolio",
    desc: "Modern portfolio built using React, Vite and Tailwind CSS with responsive design, smooth scrolling, animations and resume download.",
    github: "https://github.com/qwertyaditya0/ADITYA-PRATAP-SINGH-PORTFOLIO",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Projects
        </h2>

        <div className="flex justify-center">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-2xl p-6 shadow-xl hover:scale-105 duration-300 w-full max-w-md"
            >
              <img
                src={portfolio}
                alt="Portfolio"
                className="h-40 w-full object-cover rounded-xl mb-5"
              />

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-500"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}