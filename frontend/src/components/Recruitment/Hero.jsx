import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Users, Award, Zap, TrendingUp, CheckCircle, Star, Rocket, Shield, Heart, Sparkles } from "lucide-react";

// Button Component (replace with your actual Button import)
const Button = ({ children, className, onClick, style }) => (
  <button
    onClick={onClick}
    style={style}
    className={`bg-[#00809D] text-white hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
  >
    {children}
  </button>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Your Original Design */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#e5f6fb] to-[#d0f0fa] py-14 sm:py-20 md:py-28 px-3 sm:px-5 md:px-8 lg:px-16 xl:px-32">
        {/* Curved Bottom Shape */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-40 bg-white rounded-t-[50%]" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto w-full">
          {/* Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3 sm:space-y-5 md:space-y-7"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1f44] leading-snug sm:leading-tight md:leading-tight mt-8">
              Welcome to B2 Tech<br />Recruitment Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#0a1f44] font-semibold">
              Where Exceptional Talent Fuels Extraordinary Growth
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              At B2 Tech Services, we don't just recruit — We build futures. We drive transformation.
            </p>
            <Link to='/Expertise'><Button className="px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg md:text-xl rounded-full">
              Get Started
            </Button></Link>
          </motion.div>
          
          {/* Image with Rounded & Curved Frame */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00809D] to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl border-4 border-[#00809D]/20">
                <div className="bg-gradient-to-br from-[#00809D]/20 to-cyan-500/20 p-12 text-center">
                  <Sparkles className="w-32 h-32 text-[#00809D] mx-auto animate-bounce" />
                  <p className="text-2xl font-bold text-[#0a1f44] mt-6">Building Futures Together</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
              We are the trusted partner where <span className="font-bold text-[#00809D]">top-tier professionals</span> connect with <span className="font-bold text-[#0a1f44]">industry-leading organizations</span> across specialized and high-demand domains.
            </p>
          </motion.div>

          {/* Origin Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00809D]/10 to-cyan-500/10 px-6 py-3 rounded-full mb-6 shadow-lg">
                <Rocket className="w-6 h-6 text-[#00809D] animate-bounce" />
                <span className="text-[#00809D] font-bold text-lg">Our Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-6">
                🚀 Our Origin Story
              </h2>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00809D]/5 to-cyan-500/5 rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white border-2 border-[#00809D]/30 rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                  What began as one expert's vision has evolved into a <span className="font-bold text-[#00809D]">mission-driven movement</span>. Our founder — a <span className="font-bold text-[#0a1f44]">seasoned talent acquisition strategist</span> — saw beyond the limitations of recruiting for a single company. He envisioned a platform that could amplify potential on both sides of the talent equation — <span className="font-bold text-[#00809D]">empowering professionals to thrive and helping organizations scale with the right people.</span>
                </p>
                <div className="text-center">
                  <motion.p
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00809D] inline-block"
                  >
                    And so, B2 Tech Services was born.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Why B2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-6">
                🔷 Why "B2"?
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold">
                It's more than a name — it's a mindset.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00809D] to-cyan-600 rounded-3xl transform -rotate-1 opacity-10"></div>
              <div className="relative bg-gradient-to-br from-white to-cyan-50 border-4 border-[#00809D] rounded-3xl p-10 sm:p-16 shadow-2xl">
                <div className="text-center space-y-8">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#00809D] to-cyan-600 bg-clip-text text-transparent mb-6">
                      B2 = Believe & Become
                    </h3>
                  </motion.div>
                  
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    We believe that every remarkable journey starts with one essential ingredient: <span className="font-bold text-[#00809D]">belief</span> — Belief in your talent, your vision, and your possibility. We exist to turn that belief into reality by helping individuals and businesses <span className="font-bold text-[#0a1f44]">become their best.</span>
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#00809D]/10 to-cyan-500/10 rounded-2xl p-6 sm:p-8 border-2 border-[#00809D]/20">
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                      Whether you're a professional looking for your next big opportunity, or a company searching for game-changing talent — <span className="font-bold text-[#00809D]">B2 Tech Services is your launchpad for success.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Founder's Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00809D]/10 to-cyan-500/10 px-6 py-3 rounded-full mb-6 shadow-lg">
                <Heart className="w-6 h-6 text-[#00809D] animate-pulse" />
                <span className="text-[#00809D] font-bold text-lg">Vision & Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-4">
                Our Founder's Vision
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00809D]">
                Recognizing the Power Behind Every Great Team
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-white to-cyan-50 border-2 border-[#00809D]/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Shield className="w-16 h-16 text-[#00809D] mb-6 animate-pulse" />
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  Talent acquisition professionals are often the <span className="font-bold text-[#0a1f44]">unsung heroes of organizational success</span> — working behind the scenes to shape teams, drive growth, and build the future. Yet, their efforts often go uncelebrated, their impact underappreciated.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-white to-cyan-50 border-2 border-[#00809D]/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Target className="w-16 h-16 text-[#00809D] mb-6 animate-bounce" />
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                  <span className="font-bold text-[#00809D] text-2xl">Our founder saw things differently.</span>
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  He envisioned a future where talent acquisition is not just a function, but a <span className="font-bold text-[#0a1f44]">force</span> — one that is recognized, empowered, and rewarded.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-3xl p-10 sm:p-12 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
              </div>
              
              <div className="relative z-10">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
                  That vision gave rise to B2 Tech Services.
                </p>
                
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8">
                  More than a recruitment firm, B2 Tech is a <span className="font-bold text-cyan-300">movement</span> — built on the values of integrity, excellence, and lasting value. It's a platform where:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <Star className="w-8 h-8 text-cyan-300 flex-shrink-0 mt-1 animate-spin-slow" />
                      <p className="text-base sm:text-lg md:text-xl">
                        <span className="font-bold">* Businesses</span> find exceptional talent to fuel their growth, and
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <Star className="w-8 h-8 text-cyan-300 flex-shrink-0 mt-1 animate-spin-slow" />
                      <p className="text-base sm:text-lg md:text-xl">
                        <span className="font-bold">* Recruitment professionals</span> gain the tools, recognition, and support to elevate their craft and careers.
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-center text-cyan-200 leading-relaxed">
                  Today, B2 Tech Services stands as a trusted partner for those who understand that people are the true engine of progress — and that finding the right talent changes everything.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Proven Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full mb-6 shadow-lg border-2 border-[#00809D]/20">
                <Award className="w-6 h-6 text-[#00809D] animate-bounce" />
                <span className="text-[#00809D] font-bold text-lg">Excellence Defined</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-4">
                Proven Excellence
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00809D]">
                Leadership That Sets the Standard
              </p>
            </div>

            <div className="bg-white border-2 border-[#00809D]/30 rounded-3xl p-8 sm:p-12 shadow-2xl mb-12 hover:shadow-3xl transition-all duration-500">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                Renowned for consistently exceeding expectations, our founder has earned the trust of engineering and talent acquisition leaders around the globe. His track record isn't just built on performance — it's built on <span className="font-bold text-[#00809D]">partnership, precision, and an unwavering commitment to quality.</span>
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                But his drive to be the best goes beyond personal ambition. It's the foundation of <span className="font-bold text-[#0a1f44]">B2 Tech Services' culture</span> — a culture that inspires excellence, accountability, and impact at every level.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                This relentless pursuit of excellence is what fuels our team's passion and ensures that every client engagement delivers:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: CheckCircle, text: "Exceptional talent", color: "from-green-400 to-emerald-500" },
                { icon: Target, text: "Strategic alignment", color: "from-blue-400 to-cyan-500" },
                { icon: TrendingUp, text: "Measurable results", color: "from-[#00809D] to-cyan-600" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity"></div>
                  <div className={`relative bg-gradient-to-r ${item.color} rounded-2xl p-8 text-center text-white shadow-xl`}>
                    <item.icon className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                    <p className="text-xl sm:text-2xl font-bold">✅ {item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-3xl p-10 text-center shadow-2xl"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Every client. Every time. Without compromise.
              </p>
              <div className="h-1 w-32 bg-cyan-400 mx-auto rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00809D]/10 to-cyan-500/10 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white border-4 border-[#00809D] rounded-3xl p-10 sm:p-16 text-center shadow-2xl">
              <Sparkles className="w-20 h-20 text-[#00809D] mx-auto mb-6 animate-spin-slow" />
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1f44] leading-tight">
                At B2 Tech Services, we don't just connect talent with opportunity;
                <br />
                <span className="bg-gradient-to-r from-[#00809D] to-cyan-600 bg-clip-text text-transparent">
                  we build the foundation for your future success.
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Your Original Design */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-r from-[#00809D] to-[#0a1f44] text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-white rounded-b-[50%]"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Find the Perfect Match?
          </h2>

          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
            Let's make recruitment faster, smarter, and success-driven.
          </p>
<Link to='/Contact'>

          <Button
            className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl font-semibold rounded-full transition-colors duration-300"
            style={{ backgroundColor: "white", color: "#00809D" }}
          >
            Contact Us Today
          </Button>
</Link>
        </motion.div>
      </section>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;