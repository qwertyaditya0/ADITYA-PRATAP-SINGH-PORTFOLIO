import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Aditya Pratap Singh
          </h2>

          <p className="text-gray-400 mt-2">
            Frontend Developer | React Developer
          </p>
        </div>

        <div className="flex gap-6 text-3xl mt-6 md:mt-0">

          <a
            href="#"
            className="text-white hover:text-cyan-400 hover:scale-110 duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="text-white hover:text-cyan-400 hover:scale-110 duration-300"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2026 Aditya Pratap Singh. All Rights Reserved.
      </p>

    </footer>
  );
}