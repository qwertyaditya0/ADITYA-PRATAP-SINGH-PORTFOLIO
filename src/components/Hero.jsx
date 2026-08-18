import hero from "../assets/aditya.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-10 pt-24"
>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-xl mb-2">
            Hello I'm
          </p>

          <h1 className="text-6xl font-bold">
            Aditya <span className="text-cyan-400">Pratap Singh</span>
          </h1>

     <h2 className="text-2xl mt-5 text-cyan-400 font-semibold">
  <TypeAnimation
    sequence={[
      "Frontend Developer",
      2000,
      "React Developer",
      2000,
      "Java Developer",
      2000,
    ]}
    speed={50}
    repeat={Infinity}
  />
</h2>

          <p className="mt-6 text-gray-400 leading-8">
            Passionate about creating beautiful,
            responsive and modern websites using
            React & Tailwind CSS.
          </p>

          <div className="mt-8 flex gap-5">

<a
 href="/Aditya_Pratap_Singh_Resume%20%283%29.pdf"
  download
  className="bg-cyan-500 px-8 py-3 rounded-xl hover:bg-cyan-600 hover:scale-105 duration-300 inline-block"
>
  Download Resume
</a>

  <a
  href="#contact"
  className="border-2 border-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-400 hover:text-black duration-300 inline-block"
>
  Contact Me
</a>

  </div>

</div>

        {/* Right Side */}
        <div className="flex justify-center">
         <img
  src={hero}
  alt="Aditya"
  className="w-96 h-96 object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
/>
        </div>

      </div>
    </section>
  );
}
