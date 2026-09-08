import { Code2, GraduationCap, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Get to know me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT ================= */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Building with code.
              <br />
              <span className="text-cyan-400">
                Learning every day.
              </span>
            </h3>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              Hello! I'm{" "}
              <span className="text-white font-semibold">
                Aditya Pratap Singh
              </span>
              , a Computer Science Engineering student passionate
              about software development and problem solving.
            </p>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              I enjoy building modern, responsive applications using
              technologies like{" "}
              <span className="text-cyan-400">
                React, JavaScript and Tailwind CSS
              </span>
              . I'm also strengthening my foundation in{" "}
              <span className="text-cyan-400">
                Java and Data Structures & Algorithms
              </span>
              .
            </p>

            <p className="text-gray-400 text-lg leading-8">
              My goal is to continuously improve my technical skills,
              build meaningful projects, and grow as a software
              developer.
            </p>

          </div>

          {/* ================= RIGHT ================= */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="group bg-slate-800/60 border border-white/5 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-5">
                <GraduationCap size={26} />
              </div>

              <h4 className="text-lg font-semibold mb-2">
                Education
              </h4>

              <p className="text-gray-400 text-sm leading-6">
                B.Tech in Computer Science & Engineering
              </p>

              <p className="text-gray-500 text-sm mt-2">
                2024 — 2028
              </p>

            </div>

            {/* Card 2 */}
            <div className="group bg-slate-800/60 border border-white/5 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-5">
                <Code2 size={26} />
              </div>

              <h4 className="text-lg font-semibold mb-2">
                Development
              </h4>

              <p className="text-gray-400 text-sm leading-6">
                React, JavaScript, Tailwind CSS & Java
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Building & learning
              </p>

            </div>

            {/* Card 3 */}
            <div className="group bg-slate-800/60 border border-white/5 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-5">
                <Target size={26} />
              </div>

              <h4 className="text-lg font-semibold mb-2">
                Current Focus
              </h4>

              <p className="text-gray-400 text-sm leading-6">
                Data Structures, Algorithms & Problem Solving
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Java
              </p>

            </div>

            {/* Card 4 */}
            <div className="group bg-slate-800/60 border border-white/5 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-5">
                <Rocket size={26} />
              </div>

              <h4 className="text-lg font-semibold mb-2">
                Career Goal
              </h4>

              <p className="text-gray-400 text-sm leading-6">
                Grow as a Software Developer and build real-world
                applications.
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Always improving
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}