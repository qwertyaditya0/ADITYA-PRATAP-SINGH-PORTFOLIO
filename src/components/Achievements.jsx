import { Trophy, Award, ExternalLink } from "lucide-react";
import achievement from "../assets/achievement.jpg";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-950 text-white py-24 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Recognition & Milestones
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-cyan-400">Achievement</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-8">
            A milestone that reflects my ability to work in a team,
            build solutions under pressure, and compete in real-world
            hackathons.
          </p>
        </div>

        {/* Achievement Card */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl">

            {/* ================= IMAGE ================= */}
            <div className="relative group overflow-hidden min-h-[350px] lg:min-h-[500px]">

              {/* Image */}
              <img
                src={achievement}
                alt="Hack With Uttar Pradesh 3rd place achievement"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Winner Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-cyan-500 text-slate-950 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                <Trophy size={17} />
                3rd Place Winner
              </div>

              {/* Bottom Image Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-cyan-400 text-sm font-semibold">
                  Hack With Uttar Pradesh
                </p>

                <p className="text-white text-xl font-bold mt-1">
                  Healthcare & Medical Tech
                </p>
              </div>

            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 mb-7">
                <Award size={28} />
              </div>

              {/* Title */}
              <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
                Hackathon Achievement
              </p>

              <h3 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight">
                Hack With Uttar Pradesh
              </h3>

              {/* Achievement */}
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <Trophy className="text-cyan-400" size={24} />

                  <div>
                    <p className="text-gray-400 text-sm">
                      Achievement
                    </p>

                    <p className="text-xl font-bold text-white">
                      3rd Place — Winner
                    </p>
                  </div>
                </div>
              </div>

              {/* Prize */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-950 border border-white/5">
                <p className="text-gray-500 text-sm">
                  Prize Won
                </p>

                <p className="text-3xl font-bold text-cyan-400 mt-1">
                  ₹10,000
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-7 mt-7">
                Secured 3rd place at Hack With Uttar Pradesh in the
                Healthcare & Medical Tech category. Worked as part of
                a team to develop and present an innovative solution
                within a competitive hackathon environment.
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3 mt-7">

                <span className="px-3 py-2 rounded-lg bg-slate-950 border border-white/5 text-sm text-gray-300">
                  Team Collaboration
                </span>

                <span className="px-3 py-2 rounded-lg bg-slate-950 border border-white/5 text-sm text-gray-300">
                  Problem Solving
                </span>

                <span className="px-3 py-2 rounded-lg bg-slate-950 border border-white/5 text-sm text-gray-300">
                  Hackathon
                </span>

                <span className="px-3 py-2 rounded-lg bg-slate-950 border border-white/5 text-sm text-gray-300">
                  Healthcare Tech
                </span>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}