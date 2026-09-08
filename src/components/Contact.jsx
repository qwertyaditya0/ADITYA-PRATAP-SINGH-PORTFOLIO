import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6 sm:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            Have a project, opportunity, or just want to talk about
            technology? Feel free to reach out.
          </p>

        </div>

        {/* ================= CONTENT ================= */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT ================= */}

          <div>

            <h3 className="text-3xl font-bold mb-4">
              Let's build something
              <span className="text-cyan-400"> great.</span>
            </h3>

            <p className="text-gray-400 leading-7 max-w-lg mb-10">
              I'm always open to discussing new projects, software
              development opportunities, collaborations, or interesting
              ideas.
            </p>

            {/* Contact Details */}

            <div className="space-y-6">

              {/* Email */}
              <a
                href="mailto:pratapsinghaditya076@gmail.com"
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="text-gray-200 font-medium group-hover:text-cyan-400 transition">
                    pratapsinghaditya076@gmail.com
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="ml-auto text-gray-600 group-hover:text-cyan-400 transition"
                />
              </a>

              {/* Phone */}
              <a
                href="tel:+918429400771"
                className="flex items-center gap-5 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Phone
                  </p>

                  <p className="text-gray-200 font-medium group-hover:text-cyan-400 transition">
                    +91 8429400771
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="ml-auto text-gray-600 group-hover:text-cyan-400 transition"
                />
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 group">

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="text-gray-200 font-medium">
                    Greater Noida, India
                  </p>
                </div>

              </div>

            </div>

            {/* Social Links */}

            <div className="mt-10 pt-8 border-t border-white/5">

              <p className="text-sm text-gray-500 mb-4">
                Connect with me
              </p>

              <div className="flex gap-4">

                <a
                  href="https://github.com/qwertyaditya0"
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition duration-300"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/aditya-pratap-singh-bb965b2a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 transition duration-300"
                >
                  <FaLinkedin size={20} />
                </a>

              </div>

            </div>

          </div>

          {/* ================= FORM ================= */}

          <form
            className="bg-slate-900/70 border border-white/5 rounded-2xl p-7 sm:p-8 shadow-2xl"
          >

            <div className="mb-6">

              <h3 className="text-2xl font-bold">
                Send a message
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                I'll get back to you as soon as possible.
              </p>

            </div>

            {/* Name */}

            <div className="mb-5">

              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-800 border border-white/5 text-white placeholder-gray-600 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition duration-300"
              />

            </div>

            {/* Email */}

            <div className="mb-5">

              <label className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3.5 rounded-xl bg-slate-800 border border-white/5 text-white placeholder-gray-600 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition duration-300"
              />

            </div>

            {/* Message */}

            <div className="mb-6">

              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3.5 rounded-xl bg-slate-800 border border-white/5 text-white placeholder-gray-600 outline-none resize-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 transition duration-300"
              ></textarea>

            </div>

            {/* Button */}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 text-slate-950 py-3.5 rounded-xl font-semibold hover:bg-cyan-400 hover:-translate-y-0.5 transition duration-300 shadow-lg shadow-cyan-500/10"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}