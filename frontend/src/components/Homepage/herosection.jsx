import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Award, Smile } from "lucide-react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import bgImage from "./hu.jpg";
import pix from "../../../public/AboutImg/pexels-thirdman-7993891.jpg";

function Counter({ from = 0, to }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [to, count]);

  return <motion.span>{rounded}</motion.span>;
}

function Herosection() {
  const stats = [
    {
      number: 48,
      label: "Professional Staff",
      icon: <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />,
    },
    {
      number: 24,
      label: "Years of Experience",
      icon: <Award className="w-8 h-8 text-purple-500 mx-auto mb-3" />,
    },
    {
      number: 3578,
      label: "Satisfied Clients",
      icon: <Smile className="w-8 h-8 text-pink-500 mx-auto mb-3" />,
    },
  ];

  return (
    <div>
      <section
        className="relative bg-cover bg-center min-h-screen flex items-center py-16"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Content Wrapper */}
        <div
          className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10 items-center text-white"
          style={{ marginTop: "50px" }}
        >
          {/* ✅ Centered Welcome Text Above Image */}
          <div className="md:col-span-3 flex flex-col items-center text-center mb-8">
            <motion.p
              className="uppercase tracking-wide text-sm bg-gradient-to-r from-white via-purple-400 to-fuchsia-500 bg-clip-text text-transparent mb-2 drop-shadow-[0_2px_6px_rgba(0,255,255,0.4)] text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: "50px",
                fontWeight: "800",
                letterSpacing: "1px",
              }}
            >
              Welcome to B2 Tech Services
            </motion.p>
          </div>

          {/* 🖼️ Center Image */}
          <motion.div
            className="flex justify-center md:col-span-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
          style={{marginTop:'-50px'}}>
            <div className="relative rounded-b-[200px]" >
              {/* Outer Glow */}
              <div className="absolute -inset-9 rounded-b-[220px] bg-gradient-to-b from-blue-400/30 via-blue-400/20 to-blue-500/30 blur-3xl animate-pulse"></div>

              {/* Inner Glow */}
              <div className="absolute -inset-6 rounded-b-[220px] bg-white/20 blur-xl"></div>

              {/* Image Container */}
              <div
                className="relative bg-white rounded-b-[200px] overflow-hidden shadow-2xl"
                style={{ border: "2px solid white" }}
              >
                <img
                  src="./guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg"
                  alt="Team"
                  className="w-80 h-[450px] object-cover relative z-10"
                />
              </div>
            </div>
          </motion.div>

          {/* 🌟 Text & Button Below Image (Unchanged) */}
          <div className="md:col-span-3 flex flex-col items-center text-center " style={{marginTop:'-30px'}}>
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-purple-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering Talent. <br /> Enabling Growth.
            </motion.h1>

            <motion.div
              className="flex justify-center mt-4 md:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/recruitmentservice"
                className="w-full max-w-xs md:max-w-sm
                   bg-[#00809D] 
                   text-white font-semibold
                   py-3 md:py-4 px-6 md:px-7
                   rounded-full
                   flex items-center justify-center gap-3
                   shadow-lg hover:bg-[#0a1f44] hover:shadow-xl
                   transition-all duration-300
                   text-center text-lg md:text-xl cursor-pointer"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
