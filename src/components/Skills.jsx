import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        icon: <FaJava className="text-orange-500" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
      },
      {
        name: "SQL",
        icon: <SiMysql className="text-sky-400" />,
      },
    ],
  },

  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500" />,
      },
      {
        name: "React",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
    ],
  },

  {
    title: "Backend & Database",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-400" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-200" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-400" />,
      },
    ],
  },

  {
    title: "Tools & Version Control",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-white" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            My Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            Technologies and tools I use to build applications,
            solve problems, and bring ideas to life.
          </p>

        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 hover:border-cyan-400/30 transition duration-300"
            >

              {/* Category Title */}
              <div className="flex items-center gap-3 mb-7">

                <div className="w-2 h-8 bg-cyan-400 rounded-full"></div>

                <h3 className="text-2xl font-semibold">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="grid sm:grid-cols-2 gap-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-4 bg-slate-800/70 border border-white/5 rounded-xl p-4 hover:border-cyan-400/40 hover:bg-slate-800 transition duration-300"
                  >

                    {/* Icon */}
                    <div className="text-3xl group-hover:scale-110 transition duration-300">
                      {skill.icon}
                    </div>

                    {/* Name */}
                    <span className="text-gray-200 font-medium">
                      {skill.name}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 text-center">

          <p className="text-gray-500 text-sm">
            Currently focused on
          </p>

          <p className="text-cyan-400 font-semibold text-lg mt-2">
            Java • Data Structures & Algorithms • Problem Solving
          </p>

        </div>

      </div>
    </section>
  );
}