import { Code2, ExternalLink, Flame, Trophy } from "lucide-react";

export default function DSAJourney() {
  return (
    <section
      id="dsa"
      className="bg-slate-900 text-white py-24 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Problem Solving
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-cyan-400">DSA Journey</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-8">
            Consistently improving my problem-solving skills through
            Data Structures & Algorithms using Java.
          </p>
        </div>

        {/* Journey */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative">

            {/* Line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-cyan-400/20"></div>

            {[
              "Java Fundamentals",
              "Arrays & Strings",
              "Searching & Sorting",
              "Hashing & Recursion",
              "Linked List, Stack & Queue",
              "Trees, Graphs & Advanced DSA",
              "Competitive Problem Solving",
            ].map((item, index) => (
              <div
                key={item}
                className="relative flex items-center gap-5 mb-6 last:mb-0"
              >
                <div className="relative z-10 w-10 h-10 rounded-full bg-slate-950 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                  {index + 1}
                </div>

                <div className="flex-1 bg-slate-950/70 border border-white/5 rounded-xl px-5 py-4 hover:border-cyan-400/30 hover:-translate-y-1 transition duration-300">
                  <p className="font-semibold text-gray-200">
                    {item}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Platforms */}
        <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">

          {/* Striver */}
          <div className="group bg-slate-950/70 border border-white/5 rounded-2xl p-7 hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                <Code2 size={27} />
              </div>

              <Flame
                size={22}
                className="text-gray-600 group-hover:text-cyan-400 transition"
              />
            </div>

            <h3 className="text-2xl font-bold mt-6">
              Striver A2Z DSA
            </h3>

            <p className="text-gray-400 leading-7 mt-3">
              Following a structured DSA roadmap and solving problems
              topic by topic using Java.
            </p>

            <a
              href="https://takeuforward.org/profile/aditya_dsa100"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-cyan-500 text-slate-950 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-cyan-400 hover:-translate-y-0.5 transition"
            >
              View Striver Progress
              <ExternalLink size={17} />
            </a>
          </div>

          {/* GFG */}
          <div className="group bg-slate-950/70 border border-white/5 rounded-2xl p-7 hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                <Trophy size={27} />
              </div>

              <Code2
                size={22}
                className="text-gray-600 group-hover:text-cyan-400 transition"
              />
            </div>

            <h3 className="text-2xl font-bold mt-6">
              GeeksforGeeks
            </h3>

            <p className="text-gray-400 leading-7 mt-3">
              Practicing coding problems and strengthening my
              problem-solving skills through consistent practice.
            </p>

            <a
              href="https://www.geeksforgeeks.org/profile/adityap9rk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-cyan-500 text-slate-950 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-cyan-400 hover:-translate-y-0.5 transition"
            >
              View GFG Profile
              <ExternalLink size={17} />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Currently solving problems in{" "}
            <span className="text-cyan-400 font-medium">
              Java
            </span>{" "}
            and preparing for software engineering roles.
          </p>
        </div>

      </div>
    </section>
  );
}