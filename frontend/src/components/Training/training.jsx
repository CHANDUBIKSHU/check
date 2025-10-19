import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Users, Zap, Target, Code, Brain, Cloud, Smartphone, Palette, Network, Cpu, Mail, CheckCircle, ArrowRight, Sparkles, BookOpen, Rocket, Globe } from 'lucide-react';
 import { Link } from 'react-router-dom';
const TrainingServicesPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const technologies = [
    { 
      icon: Brain, 
      title: "AI / Gen-AI", 
      desc: "Artificial Intelligence / Generative AI", 
      glow: "from-purple-500 to-pink-500" 
    },
    { 
      icon: Code, 
      title: "Data Science / ML", 
      desc: "Data Science & Machine Learning", 
      glow: "from-blue-500 to-cyan-500" 
    },
    { 
      icon: Cpu, 
      title: "Embedded Systems", 
      desc: "Specialized computing systems", 
      glow: "from-green-500 to-emerald-500" 
    },
    { 
      icon: Cloud, 
      title: "Salesforce", 
      desc: "Cloud-based CRM solutions", 
      glow: "from-orange-500 to-yellow-500" 
    },
    { 
      icon: Smartphone, 
      title: "4G/5G Protocol Stack Dev.", 
      desc: "Mobile network protocol development", 
      glow: "from-red-500 to-pink-500" 
    },
    { 
      icon: Code, 
      title: "Golang", 
      desc: "High-performance programming language", 
      glow: "from-cyan-500 to-blue-500" 
    },
    { 
      icon: Palette, 
      title: "UX Design", 
      desc: "User-centric product and interface design", 
      glow: "from-pink-500 to-purple-500" 
    },
    { 
      icon: Cloud, 
      title: "AWS Solution Architect", 
      desc: "Scalable, secure, and cost-effective cloud setups", 
      glow: "from-yellow-500 to-orange-500" 
    },
    { 
      icon: Network, 
      title: ".Net Core / Azure / IoT", 
      desc: "Microsoft stack and Internet of Things", 
      glow: "from-purple-500 to-indigo-500" 
    },
    { 
      icon: Code, 
      title: "Python Automation (4G/5G)", 
      desc: "Network protocol-specific automation", 
      glow: "from-green-500 to-teal-500" 
    },
    { 
      icon: Palette, 
      title: "QT / QML", 
      desc: "Cross-platform GUI development framework", 
      glow: "from-indigo-500 to-purple-500" 
    },
  ];

  const features = [
    { 
      icon: Target, 
      title: "Tailored for Industry Demands", 
      desc: "Our curriculum is constantly updated to match the latest trends, tools, and technologies." 
    },
    { 
      icon: Zap, 
      title: "Hands-On, Practical Learning", 
      desc: "We emphasize real-world projects and use cases — not just theory — to ensure true skill development." 
    },
    { 
      icon: Users, 
      title: "Pipeline of Ready-to-Deploy Talent", 
      desc: "Whether you need fresh talent or to upskill your team, we provide professionals who can deliver immediate impact." 
    },
    { 
      icon: Rocket, 
      title: "Fast, Scalable Solutions", 
      desc: "Our training programs are designed for speed and scale, enabling you to grow your teams quickly and efficiently." 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-200/20 to-blue-200/20 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 100}px, ${mousePosition.y * 100}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-green-200/20 to-emerald-200/20 blur-3xl animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto text-center z-10">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-2 border-cyan-200 mb-8 animate-bounce mt-8">
            <Sparkles className="w-5 h-5 text-[#00809D]" />
            <span className="text-sm font-semibold text-[#0a1f44]">
              Industry-Leading Training Programs
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent animate-gradient bg-300">
              Software Training
            </span>
            <br />
            <span className="text-[#0a1f44]">at B2 Tech Services</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 font-light text-[#0a1f44]">
            Empowering Talent. <span className="font-semibold">Enabling Success.</span>
          </p>

          {/* Description Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-lg shadow-2xl border-2 border-white/50">
              <p className="text-base sm:text-lg leading-relaxed text-[#0a1f44]">
                At <strong className="text-[#00809D]">B2 Tech Services</strong>, we go beyond recruitment by delivering <span className="font-semibold">comprehensive, industry-aligned training programs</span> that equip talent with the skills needed to thrive in today's fast-evolving tech landscape.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0a1f44] to-[#00809D] shadow-2xl text-white">
              <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-cyan-300" />
              <p className="text-base sm:text-lg leading-relaxed">
                Our mission is to <span className="font-bold text-cyan-300">bridge the gap between theoretical knowledge and real-world application</span> — ensuring every candidate we train is <span className="font-bold">job-ready from day one.</span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            <Globe className="w-5 h-5 text-[#00809D]" />
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button 
              className="group relative px-8 py-4 rounded-full text-white font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 bg-[#00809D]"
            >
             <Link to='/recruitmentService'> <span className="relative z-10 flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span></Link>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00809D]/10 px-6 py-3 rounded-full mb-6">
              <Award className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0a1f44]">
              Why Choose B2 Tech's Training Programs?
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-[#00809D]"
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 group-hover:scale-110 transition-transform shadow-md">
                    <feature.icon className="w-8 h-8 text-[#00809D]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-[#0a1f44] leading-tight">
                    ✅ {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                  
                  <div className={`mt-4 flex items-center gap-2 transition-all duration-500 ${activeCard === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">Ready to implement</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 sm:py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00809D]/10 px-6 py-3 rounded-full mb-6">
              <Code className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold">Tech Stack Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0a1f44]">
              Technologies We Cover
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our training programs span a wide range of cutting-edge domains and platforms:
            </p>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          </div>

          {/* Technology Table Header */}
          <div className="max-w-5xl mx-auto mb-8 hidden md:grid grid-cols-2 gap-4 p-4 bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-2xl text-white shadow-xl">
            <div className="font-bold text-lg flex items-center gap-2">
              <Code className="w-6 h-6" />
              💻 Technology
            </div>
            <div className="font-bold text-lg flex items-center gap-2">
              <Target className="w-6 h-6" />
              🔍 Focus Area
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="group relative"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:scale-105 overflow-hidden border-2 border-transparent hover:border-[#00809D]">
                  {/* Animated Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.glow} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Floating Particles */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 animate-ping" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 animate-ping" style={{ animationDelay: '200ms' }} />
                  
                  <div className="relative z-10">
                    <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${tech.glow} bg-opacity-10 group-hover:rotate-12 transition-transform duration-500 shadow-md`}>
                      <tech.icon className="w-8 h-8 text-[#00809D]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-[#0a1f44]">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{tech.desc}</p>
                    
                    {/* Progress Bar Animation */}
                    <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-2xl overflow-hidden border-2 border-[#00809D]">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, #00809D 0, #00809D 1px, transparent 1px, transparent 15px)`,
              }} />
            </div>

            <div className="relative z-10 text-center">
              <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-[#00809D]" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0a1f44]">
                Our Mission
              </h3>
              <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto text-[#0a1f44] mb-12">
                To bridge the gap between theoretical knowledge and real-world application — 
                ensuring every candidate we train is <span className="font-bold text-cyan-600">job-ready from day one.</span>
              </p>
              
              {/* Stats Counter */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-cyan-100 hover:border-[#00809D] transition-all">
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    10+
                  </div>
                  <p className="text-gray-600 mt-2 font-medium">Trained Professionals</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-cyan-100 hover:border-[#00809D] transition-all">
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    95%
                  </div>
                  <p className="text-gray-600 mt-2 font-medium">Placement Rate</p>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg border-2 border-cyan-100 hover:border-[#00809D] transition-all">
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                    10+
                  </div>
                  <p className="text-gray-600 mt-2 font-medium">Tech Domains</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 relative">
        <div className="max-w-4xl mx-auto relative">
          <div className="relative p-8 sm:p-12 rounded-3xl overflow-hidden shadow-2xl bg-[#00809D]">
            {/* Animated Wave Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-20">
                <svg className="absolute bottom-0 w-full h-40" viewBox="0 0 1440 320">
                  <path fill="white" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    <animate attributeName="d" dur="10s" repeatCount="indefinite"
                      values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,64L48,80C96,96,192,128,288,160C384,192,480,224,576,213.3C672,203,768,149,864,128C960,107,1056,117,1152,128C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                  </path>
                </svg>
              </div>
            </div>

            <div className="relative z-10 text-center text-white">
              <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 animate-pulse text-cyan-300" />
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Future-Ready Training. Industry-Ready Talent.
              </h2>
              <p className="text-base sm:text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Whether you're a company looking to build high-performing teams or a candidate preparing 
                for your next big opportunity, B2 Tech Services provides the skills, knowledge, and confidence to succeed in today's competitive market.
              </p>
              
              {/* Contact Card */}
              <div className="w-full flex justify-center mt-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-2xl px-4 sm:px-6 py-4 sm:py-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <div className="flex flex-col text-center sm:text-left">
                    
                    <a
                      href="mailto:hrushikesh@b2techservices.in"
                      className="font-bold text-white text-base sm:text-lg hover:underline break-all"
                    >
                      hrushikesh@b2techservices.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-300 {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default TrainingServicesPage;