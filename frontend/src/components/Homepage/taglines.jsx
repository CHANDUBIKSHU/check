import { useState } from 'react';
import { Briefcase, Award, Rocket, Handshake, TrendingUp, ChevronRight } from 'lucide-react';

export default function TaglineShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const taglines = [
    {
      number: "01",
      title: "Hiring Excellence",
      text: "Your Go-To Partner for Hiring Excellence in Specialized Tech & Business Domains",
      icon: Briefcase,
      color: "blue"
    },
    {
      number: "02",
      title: "Quality & Trust",
      text: "Our Quality. Your Trust. — That's Our Success Story.",
      icon: Award,
      color: "purple"
    },
    {
      number: "03",
      title: "Discover Your Future",
      text: "Don't Just Find a Job. Discover a Future. With Us.",
      icon: Rocket,
      color: "orange"
    },
    {
      number: "04",
      title: "Reliable Partnership",
      text: "Your Reliable Partner — Turning Today's Challenges into Tomorrow's Wins",
      icon: Handshake,
      color: "green"
    },
    {
      number: "05",
      title: "The B2 Tech Way",
      text: "Trust. Transformation. Triumph. That's the B2 Tech Way",
      icon: TrendingUp,
      color: "indigo"
    }
  ];

  const colorMap = {
    blue: "border-blue-500 bg-blue-500/10 text-blue-400",
    purple: "border-purple-500 bg-purple-500/10 text-purple-400",
    orange: "border-orange-500 bg-orange-500/10 text-orange-400",
    green: "border-green-500 bg-green-500/10 text-green-400",
    indigo: "border-indigo-500 bg-indigo-500/10 text-indigo-400"
  };

  const iconColorMap = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    orange: "bg-orange-500",
    green: "bg-green-500",
    indigo: "bg-indigo-500"
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <p className="text-white text-sm font-semibold tracking-wider">OUR MISSION</p>
          </div>
          <h1 className="text-6xl font-bold text-slate-900 mb-4">
            B2 Tech
          </h1>
          <p className="text-xl text-slate-600">
            Five pillars that define our commitment to excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500" />

          {/* Tagline Items */}
          <div className="space-y-12">
            {taglines.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="relative flex items-start gap-8 group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isHovered ? iconColorMap[item.color] + ' scale-125' : 'bg-slate-100'
                    }`}>
                      <Icon className={`w-7 h-7 transition-colors duration-300 ${
                        isHovered ? 'text-white' : 'text-slate-700'
                      }`} />
                    </div>
                    {/* Pulse effect */}
                    {isHovered && (
                      <div className={`absolute inset-0 rounded-full animate-ping ${iconColorMap[item.color]} opacity-20`} />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    isHovered 
                      ? colorMap[item.color] + ' translate-x-4 shadow-2xl' 
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                  }`}>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className={`text-sm font-bold tracking-widest transition-colors duration-300 ${
                          isHovered ? colorMap[item.color].split(' ')[2] : 'text-slate-400'
                        }`}>
                          {item.number}
                        </span>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">
                          {item.title}
                        </h3>
                      </div>
                      
                    </div>
                    <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                      isHovered ? 'text-slate-900' : 'text-slate-600'
                    }`}>
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
       
      </div>
    </div>
  );
}