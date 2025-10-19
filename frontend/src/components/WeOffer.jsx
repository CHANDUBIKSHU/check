import React, { useState, useEffect } from 'react';
import { CheckCircle, Zap, TrendingUp, Users, Mail, MessageCircle, Star, ArrowRight, Sparkles, Award, Target, FileText, Briefcase, Check, Search, UserCheck, Building2, Rocket, Code, Brain, Shield, Cloud, Palette, GraduationCap, TrendingDown, Database, Globe, Lock } from 'lucide-react';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 6);
    }, 4000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const coreServices = [
    {
      icon: UserCheck,
      title: "Permanent Staffing (Full-Time Hiring)",
      description: "We provide end-to-end recruitment solutions for permanent roles — sourcing, screening, and placing top-tier talent that aligns with your business goals and culture.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Contract Staffing (Short-Term / Project-Based)",
      description: "Need agile talent for specific projects or short durations? Our contract staffing solutions offer flexibility and speed without compromising on quality.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Building2,
      title: "Executive & Leadership Hiring",
      description: "We specialize in placing CXOs, Directors, and senior leaders across industries. Our executive search process is discreet, strategic, and focused on long-term fit.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Lateral Hiring (Mid to Senior-Level Professionals)",
      description: "We fill critical roles with experienced professionals who are ready to make an immediate impact — especially in niche and technical areas.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Project-Based Hiring",
      description: "We align recruitment delivery based on your project timelines, resource needs, and growth phase — offering scalable hiring support when you need it most.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Search,
      title: "Hands-On Recruitment & Headhunting",
      description: "Our recruiters work closely with your internal team, offering dedicated support to speed up your hiring lifecycle — especially for urgent and hard-to-fill roles.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const technicalTraining = [
    { icon: Brain, text: "AI/Gen AI, Data Science, ML" },
    { icon: Globe, text: "Embedded Systems, 4G/5G Protocols" },
    { icon: Code, text: "Salesforce, Drupal, DevOps" },
    { icon: Database, text: "Python, .NET, Java" },
    { icon: Palette, text: "UI/UX" },
    { icon: Cloud, text: "Cloud (AWS, Azure)" },
    { icon: Lock, text: "Cybersecurity & more" }
  ];

  const whyPartner = [
    { icon: Rocket, title: "Speed & Accuracy", desc: "in hiring delivery" },
    { icon: Brain, title: "Industry-Specific Knowledge", desc: "across tech and business domains" },
    { icon: Users, title: "End-to-End Support", desc: "from sourcing to onboarding" },
    { icon: Award, title: "High-Quality, Vetted Candidates", desc: "every single time" },
    { icon: TrendingUp, title: "Scalable Solutions", desc: "for startups, SMEs, and enterprises" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(-${scrollY * 0.2}px)` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border-2 border-[#00809D] mb-8 mt-8">
              <Briefcase className="w-5 h-5 text-[#00809D]" />
              <span className="font-bold text-[#0a1f44]">💼 Services We Offer</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0a1f44] mb-6 leading-tight">
              Your Growth, Powered by
              <span className="block bg-gradient-to-r from-[#00809D] to-cyan-500 bg-clip-text text-transparent mt-2">
                Precision Talent Solutions
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-8">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                At <strong className="text-[#00809D]">B2 Tech Services Private Limited</strong>, we go beyond traditional recruitment. We specialize in connecting high-impact talent with forward-thinking organizations across a wide range of specialized domains.
              </p>
              <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#00809D]">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Our services are tailored to meet the unique hiring needs of each client — ensuring <strong className="text-[#0a1f44]">speed, quality, and long-term success.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00809D]/10 px-6 py-3 rounded-full mb-6">
              <Search className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold">Core Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
              🔍 Our Core Offerings
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#00809D] to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-2 transition-all duration-500 ${
                  activeService === idx ? 'border-[#00809D] scale-105 shadow-2xl' : 'border-transparent hover:border-cyan-200'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 rounded-3xl transition-opacity`} />
                
                <div className="relative">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform`}>
                    <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0a1f44] mb-4 leading-tight">
                    ✅ {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className={`mt-6 flex items-center gap-2 text-[#00809D] font-semibold transition-all ${activeService === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Featured Service</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00809D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Development Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0a1f44] to-[#00809D]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-6 border border-white/20">
              <GraduationCap className="w-5 h-5 text-cyan-300" />
              <span className="text-white font-semibold">Upskilling & Development</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              📈 Talent Development & Upskilling Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-white mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Technical Training */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Code className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    ✅ Technical Training Programs
                  </h3>
                  <p className="text-cyan-100 text-base sm:text-lg leading-relaxed">
                    Upskill your workforce with corporate, group, or college-level training in high-demand technologies such as:
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {technicalTraining.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <tech.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium text-sm sm:text-base">* {tech.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Building */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    ✅ Resume Building & Career Branding
                  </h3>
                  <p className="text-cyan-100 text-base sm:text-lg leading-relaxed">
                    We help professionals stand out in competitive job markets by crafting impactful, ATS-optimized resumes and building strong personal brands.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <div className="text-[#0a1f44] font-bold text-lg">Professional Branding</div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#00809D] flex-shrink-0" />
                    <span className="text-sm sm:text-base">ATS-Optimized Resumes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#00809D] flex-shrink-0" />
                    <span className="text-sm sm:text-base">LinkedIn Profile Enhancement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#00809D] flex-shrink-0" />
                    <span className="text-sm sm:text-base">Personal Brand Strategy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00809D]/10 px-6 py-3 rounded-full mb-6">
              <Target className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
              🎯 Why Partner with B2 Tech Services?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {whyPartner.map((reason, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-6 sm:p-8 shadow-lg border-2 border-transparent hover:border-[#00809D] hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00809D] to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform">
                  <reason.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0a1f44] mb-2">
                  * 🚀 {reason.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{reason.desc}</p>
              </div>
            ))}
          </div>

          {/* Believe Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
              <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-300 mx-auto mb-6 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Believe in More. Become More. Start Now.
              </h3>
              <p className="text-lg sm:text-xl text-cyan-100 leading-relaxed">
                We recognize that hiring for specialized roles requires more than resumes — it demands <span className="text-white font-bold">deep understanding, speed, and accuracy.</span> We know what it takes to find the perfect fit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0a1f44] via-[#00809D] to-cyan-600 rounded-3xl p-8 sm:p-12 shadow-2xl text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{ 
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative text-center">
              <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-cyan-300" />
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                📩 Let's Build Your Dream Team
              </h2>
              
              <p className="text-lg sm:text-xl text-cyan-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                We're ready to support your hiring goals — whether you're scaling fast or searching for your next game-changing hire.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
                <a 
                  href="mailto:hrushikesh@b2techservices.in" 
                  className="group flex items-center gap-3 bg-white text-[#0a1f44] px-6 sm:px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-5 h-5 text-[#00809D] flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all sm:break-normal">📧 hrushikesh@b2techservices.in</span>
                </a>
                
                <a 
                  href="https://wa.me/916364053221" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center gap-3 bg-green-500 text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all hover:scale-105 hover:bg-green-600 w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">📞 +91 63640 53221</span>
                </a>
              </div>

              <div className="border-t border-white/20 pt-8">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  B2 Tech Services
                </p>
                <p className="text-lg sm:text-xl text-cyan-200">
                  Right Job. Right Candidate. Right Now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}