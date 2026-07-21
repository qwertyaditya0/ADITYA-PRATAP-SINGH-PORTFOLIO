export default function About() {
  return (
  <section
  id="about"
  className="bg-slate-900 text-white py-20 px-10"
>
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-12">
          About Me
        </h2>

        <div className="bg-slate-800 rounded-2xl p-10 shadow-xl">

          <p className="text-xl leading-10 text-gray-300">

            Hello! I'm <span className="text-cyan-400 font-semibold">
              Aditya Pratap Singh
            </span>.

            <br /><br />

            I'm currently pursuing B.Tech in Computer Science and Engineering.

            I enjoy building responsive and modern websites using
            React, Tailwind CSS and JavaScript.

            My goal is to become a Full Stack Developer and secure
            a good Software Engineer role.

          </p>

        </div>

      </div>
    </section>
  );
}