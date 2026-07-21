import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="space-y-8">

  <div className="flex items-center gap-5 hover:translate-x-2 duration-300">
    <FaEnvelope className="text-cyan-400 text-3xl" />
    <div>
      <p className="text-gray-400 text-sm">Email</p>
      <p className="font-semibold">aditya@example.com</p>
    </div>
  </div>

  <div className="flex items-center gap-5 hover:translate-x-2 duration-300">
    <FaPhone className="text-cyan-400 text-3xl" />
    <div>
      <p className="text-gray-400 text-sm">Phone</p>
      <p className="font-semibold">+91 9876543210</p>
    </div>
  </div>

  <div className="flex items-center gap-5 hover:translate-x-2 duration-300">
    <FaMapMarkerAlt className="text-cyan-400 text-3xl" />
    <div>
      <p className="text-gray-400 text-sm">Location</p>
      <p className="font-semibold">Greater Noida, India</p>
    </div>
  </div>

  <div className="flex gap-6 pt-6 text-4xl">
<a
  href="https://github.com/qwertyaditya0"
  target="_blank"
  rel="noreferrer"
  className="hover:text-cyan-400 hover:scale-125 duration-300"
>
  <FaGithub />
</a>

<a
  href="https://www.linkedin.com/in/aditya-pratap-singh-bb965b2a0/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-cyan-400 hover:scale-125 duration-300"
>
  <FaLinkedin />
</a>
  </div>

</div>

          {/* Right Side */}
        <form className="bg-slate-800 p-8 rounded-2xl shadow-2xl hover:shadow-cyan-500/30 duration-300">

            <input
              type="text"
              placeholder="Your Name"
             className="w-full mb-5 p-4 rounded-lg bg-slate-700 border border-slate-600 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 duration-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-5 p-3 rounded-lg bg-slate-700 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full mb-5 p-3 rounded-lg bg-slate-700 outline-none"
            ></textarea>

           <button
  className="w-full bg-cyan-500 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-600 hover:scale-105 duration-300 shadow-lg"
>
  Send Message 
</button>

          </form>

        </div>

      </div>
    </section>
  );
}