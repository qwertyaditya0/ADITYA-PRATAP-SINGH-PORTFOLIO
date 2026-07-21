import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-6xl" />,
    level: "95%",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-6xl" />,
    level: "90%",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-6xl" />,
    level: "80%",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-6xl" />,
    level: "75%",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-sky-400 text-6xl" />,
    level: "90%",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-600 text-6xl" />,
    level: "80%",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white text-6xl" />,
    level: "85%",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          My Skills
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-3 duration-300 shadow-xl hover:shadow-cyan-500/40"
            >
              <div className="flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-center text-xl font-bold mt-5">
                {skill.name}
              </h3>

              <p className="text-center text-cyan-400 mt-2">
                {skill.level}
              </p>

              <div className="w-full h-2 bg-slate-700 rounded-full mt-4">
                <div
                  className="bg-cyan-400 h-2 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}