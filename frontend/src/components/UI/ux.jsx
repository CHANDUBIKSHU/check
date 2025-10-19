import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Users, Sparkles, Target, Brain, PenTool, TestTube, Smartphone, TrendingUp, Clock, Award, Zap, Mail, ArrowRight, Check, Layers, Palette, MousePointer, Grid3x3, Lightbulb, BarChart3, Heart, RefreshCw, DollarSign, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const UXTrainingPage = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedBenefit, setSelectedBenefit] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const learningModules = [
    { icon: Target, title: "User Research & Persona Development", color: "from-purple-500 to-pink-500" },
    { icon: Brain, title: "Information Architecture & Wireframing", color: "from-blue-500 to-cyan-500" },
    { icon: PenTool, title: "Interactive Prototyping", color: "from-green-500 to-emerald-500" },
    { icon: TestTube, title: "Usability Testing & Iteration", color: "from-orange-500 to-red-500" },
    { icon: Layers, title: "Mastery of Design Tools (Figma, Adobe XD, Sketch & more)", color: "from-indigo-500 to-purple-500" },
    { icon: Smartphone, title: "Responsive & Mobile-First Design Principles", color: "from-pink-500 to-rose-500" }
  ];

  const businessImpact = [
    { 
      icon: MousePointer, 
      title: "Increase User Engagement", 
      description: "Intuitive interfaces and smooth navigation keep users on your platform longer." 
    },
    { 
      icon: TrendingUp, 
      title: "Boost Conversions", 
      description: "A seamless user journey encourages action — whether it's signups, purchases, or inquiries." 
    },
    { 
      icon: RefreshCw, 
      title: "Reduce Bounce Rates", 
      description: "When users find what they need easily, they stay." 
    },
    { 
      icon: Heart, 
      title: "Strengthen Brand Loyalty", 
      description: "Positive user experiences lead to repeat customers and stronger relationships." 
    },
    { 
      icon: DollarSign, 
      title: "Enhance ROI", 
      description: "Every design improvement directly impacts user satisfaction and bottom-line results." 
    }
  ];

  const whyChooseUs = [
    "Industry-driven curriculum",
    "Real-world projects & portfolios",
    "Personalized mentorship & feedback",
    "Flexible formats for colleges, professionals, and enterprises",
    "End-to-end support from learning to placement"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
          style={{
            transform: `translate(-${mousePosition.x * 0.03}px, -${mousePosition.y * 0.03}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl px-6 py-3 rounded-full shadow-xl border border-gray-100 animate-bounce mt-8">
              <Sparkles className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#0a1f44] font-semibold">UI/UX Design Training</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0a1f44] leading-tight">
                Designing
                <span className="block bg-gradient-to-r from-[#00809D] via-cyan-500 to-[#00809D] bg-clip-text text-transparent animate-gradient bg-300%">
                  Experiences.
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 font-semibold">Empowering Talent.</p>
            </div>

            {/* Introduction Text */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-100">
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  At <strong className="text-[#00809D]">B2 Tech Services</strong>, our UI/UX Design training program is built to prepare individuals and teams to create engaging, user-centric digital experiences. In an era where design defines product success, we ensure our learners are equipped with the skills that matter.
                </p>
              </div>
            </div>

            {/* Animated CTA Button */}
            <div className="flex justify-center gap-4 pt-8">
  <Link to='/contact'>
    <button className="group relative px-8 py-4 bg-[#00809D] text-white font-semibold rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl">
      <span className="relative z-10 flex items-center gap-2">
        Start Your Journey
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-[#00809D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  </Link>
</div>

          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00809D]/10 px-6 py-3 rounded-full mb-4">
              <BookOpen className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold">Comprehensive Curriculum</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1f44] mb-4">What You'll Learn</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our hands-on, industry-focused training covers all critical aspects of the design process:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {learningModules.map((module, i) => (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`
                  relative h-full bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8
                  transform transition-all duration-500 border-2 border-transparent
                  ${activeCard === i ? 'scale-105 rotate-1 border-[#00809D]' : 'hover:scale-105 hover:border-[#00809D]/30'}
                `}>
                  {/* Gradient Background */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${module.color} opacity-10
                    group-hover:opacity-20 transition-opacity duration-300
                  `} />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`
                        w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${module.color} 
                        rounded-2xl flex items-center justify-center flex-shrink-0
                        transform transition-transform duration-300 group-hover:rotate-12 shadow-lg
                      `}>
                        <module.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      {/* Number Badge */}
                      <div className="w-8 h-8 bg-[#00809D]/10 rounded-full flex items-center justify-center ml-auto">
                        <span className="text-[#00809D] font-bold text-sm">{i + 1}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-[#0a1f44] mb-3 leading-tight">{module.title}</h3>
                    
                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00809D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-3xl px-8 sm:px-12 py-6 sm:py-8 shadow-2xl">
              <p className="text-lg sm:text-xl font-semibold text-white leading-relaxed">
                Whether you're a <span className="text-cyan-300">student</span>, <span className="text-cyan-300">corporate team</span>, or <span className="text-cyan-300">independent professional</span>, our customized programs are tailored to your level and learning goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-[#0a1f44] to-[#00809D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-4 border border-white/20">
              <Lightbulb className="w-5 h-5 text-cyan-300" />
              <span className="text-white font-semibold">Business Impact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">How UX Design Drives Business Growth</h2>
            <p className="text-lg sm:text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Great design isn't just about aesthetics — it's about functionality, usability, and business impact.
            </p>
            <p className="text-xl sm:text-2xl text-white font-semibold">
              Here's how UX design can transform your business:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Impact Cards */}
            <div className="space-y-4 sm:space-y-6">
              {businessImpact.map((impact, i) => (
                <div
                  key={i}
                  className={`
                    p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2
                    ${selectedBenefit === i 
                      ? 'bg-white shadow-2xl scale-105 border-cyan-300' 
                      : 'bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-xl border-white/20 hover:bg-white/20'
                    }
                  `}
                  onClick={() => setSelectedBenefit(i)}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className={`
                      w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0
                      ${selectedBenefit === i 
                        ? 'bg-gradient-to-br from-[#00809D] to-cyan-500' 
                        : 'bg-white/10'
                      }
                      transition-all duration-300 shadow-lg
                    `}>
                      <impact.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${selectedBenefit === i ? 'text-white' : 'text-cyan-300'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className={`text-lg sm:text-xl font-bold leading-tight ${selectedBenefit === i ? 'text-[#0a1f44]' : 'text-white'}`}>
                          ✅ {impact.title}
                        </h3>
                        <Check className={`
                          w-6 h-6 flex-shrink-0
                          ${selectedBenefit === i ? 'text-[#00809D] opacity-100' : 'text-cyan-300 opacity-0'}
                          transition-opacity duration-300
                        `} />
                      </div>
                      <p className={`text-sm sm:text-base leading-relaxed ${selectedBenefit === i ? 'text-gray-700' : 'text-cyan-100'}`}>
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Display */}
            <div className="relative h-80 sm:h-96 bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 overflow-hidden border border-white/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                  {/* Animated Circles */}
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border-2 border-cyan-300/30 rounded-full"
                      style={{
                        animation: `pulse ${2 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                      <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              {businessImpact.map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-cyan-300/40 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 20}%`,
                    animation: `float ${3 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00809D]/10 px-6 py-3 rounded-full mb-4">
              <Award className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold">Excellence in Training</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1f44] mb-4">
              Why Choose B2 Tech Services for UI/UX Training?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Excellence in every aspect of your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Large Feature Card */}
            <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#00809D] to-cyan-600 p-6 sm:p-8 rounded-3xl text-white relative overflow-hidden group">
              <div className="relative z-10">
                <Grid3x3 className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Industry-driven curriculum</h3>
                <p className="text-base sm:text-lg opacity-90 mb-6 leading-relaxed">
                  Learn what matters in the real world. Our curriculum is crafted with input from leading design teams and continuously updated to reflect industry standards.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Figma", "Adobe XD", "Sketch", "Prototyping"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
            </div>

            {/* Feature Cards */}
            <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 border-2 border-gray-100 hover:shadow-2xl hover:border-[#00809D] transition-all duration-300">
              <Palette className="w-10 h-10 text-[#00809D] mb-4" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">Real-world projects & portfolios</h3>
              <p className="text-gray-600 leading-relaxed">Build a portfolio that speaks volumes to potential employers</p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 border-2 border-gray-100 hover:shadow-2xl hover:border-[#00809D] transition-all duration-300">
              <Users className="w-10 h-10 text-[#00809D] mb-4" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">Personalized mentorship & feedback</h3>
              <p className="text-gray-600 leading-relaxed">1-on-1 guidance from industry experts throughout your journey</p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 border-2 border-gray-100 hover:shadow-2xl hover:border-[#00809D] transition-all duration-300">
              <Clock className="w-10 h-10 text-[#00809D] mb-4" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">Flexible formats</h3>
              <p className="text-gray-600 leading-relaxed">For colleges, professionals, and enterprises - learn at your pace, your way</p>
            </div>

            <div className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 border-2 border-gray-100 hover:shadow-2xl hover:border-[#00809D] transition-all duration-300">
              <GraduationCap className="w-10 h-10 text-[#00809D] mb-4" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-2">End-to-end support</h3>
              <p className="text-gray-600 leading-relaxed">From learning to placement - we support your entire journey</p>
            </div>
          </div>

          {/* Summary Statement */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-3xl p-8 sm:p-12 shadow-2xl">
              <p className="text-2xl sm:text-3xl font-bold text-white leading-relaxed mb-4">
                Empower your career. Elevate your products.
              </p>
              <p className="text-xl sm:text-2xl text-cyan-100 leading-relaxed">
                Invest in design that delivers — with <span className="text-white font-bold">B2 Tech Services.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-300 mx-auto mb-6 animate-pulse" />
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Career?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Join thousands who've launched successful design careers with us
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
               <Link to='/contact'>
                <button className="group px-8 py-4 bg-white text-[#00809D] font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button></Link>
              </div>

              
            </div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-32 h-32 border border-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${10 + i * 2}s linear infinite`,
                    animationDelay: `${i}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .bg-300% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default UXTrainingPage;