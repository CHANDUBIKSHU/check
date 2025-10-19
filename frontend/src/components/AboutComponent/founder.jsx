import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Award,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Handshake,
  Eye,
  Zap,
  Shield,
  Star,
} from "lucide-react";

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState(null);

  // Placeholder images - replace with your actual imports
  const images = {
    ceo: "/AboutImg/ceo.png",
    hr: "/AboutImg/hr.png",
    pm: "/AboutImg/pm.png",
    team2:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    pro: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    believe:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    expert:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  };

  const teamMembers = [
    {
      name: "Hrushikesh Mohapatro",
      role: "Founder & CEO",
      image: images.ceo,
      description:
        "Author. Entrepreneur. Innovator. Creator. Lifelong Learner. — From Ideas to Impact — From Vision to Victory — From Dreams to Dominance — Writing History, Not Just Living It",
      highlight: true,
    },
    {
      name: "Jesika",
      role: "HR Director",
      image: images.hr,
      description:
        "Expert in talent acquisition and organizational development with a passion for people.",
      highlight: false,
    },
    {
      name: "Aswini",
      role: "Product Manager",
      image: images.pm,
      description:
        "Strategic thinker driving innovation and excellence in our recruitment solutions.",
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#0a1f44] via-[#0a1f44] to-[#00809D]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00809D] rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          style={{ marginTop: "80px" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            The passionate professionals driving excellence in recruitment
          </p>
        </div>
      </div>

      {/* Founder's Vision Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-[#00809D]/20 mb-6">
              <Eye className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold text-sm sm:text-base">
                The Vision Behind B2 Tech
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              Our Founder's Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#00809D] mb-6">
              Recognizing the Power Behind Every Great Team
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 mb-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl">
                Talent acquisition professionals are often the unsung heroes of
                organizational success — working behind the scenes to shape
                teams, drive growth, and build the future. Yet, their efforts
                often go uncelebrated, their impact underappreciated.
              </p>
              <p className="text-lg md:text-xl font-semibold text-[#0a1f44]">
                Our founder saw things differently.
              </p>
              <p className="text-lg md:text-xl">
                He envisioned a future where talent acquisition is not just a
                function, but a force — one that is recognized, empowered, and
                rewarded.
              </p>
              <div className="bg-gradient-to-r from-[#00809D] to-[#0a1f44] p-6 rounded-2xl">
                <p className="text-xl md:text-2xl font-bold text-white text-center">
                  That vision gave rise to B2 Tech Services.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-[#00809D]/20">
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                More than a recruitment firm
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                B2 Tech is a movement — built on the values of integrity,
                excellence, and lasting value. It's a platform where:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00809D] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Businesses find exceptional talent to fuel their growth, and
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00809D] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Recruitment professionals gain the tools, recognition, and
                    support to elevate their craft and careers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] p-8 rounded-2xl text-white shadow-xl">
              <Sparkles className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">A Trusted Partner</h3>
              <p className="text-blue-100 leading-relaxed">
                Today, B2 Tech Services stands as a trusted partner for those
                who understand that people are the true engine of progress — and
                that finding the right talent changes everything.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Proven Excellence Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-[#00809D]/20 mb-6">
              <Award className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold text-sm sm:text-base">
                Our Track Record
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              Proven Excellence
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#00809D] mb-6">
              Leadership That Sets the Standard
            </h3>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-100 mb-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl">
                Renowned for consistently exceeding expectations, our founder
                has earned the trust of engineering and talent acquisition
                leaders around the globe. His track record isn't just built on
                performance — it's built on partnership, precision, and an
                unwavering commitment to quality.
              </p>
              <p className="text-lg md:text-xl">
                But his drive to be the best goes beyond personal ambition. It's
                the foundation of B2 Tech Services' culture — a culture that
                inspires excellence, accountability, and impact at every level.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-xl font-semibold text-[#0a1f44] mb-4">
                  This relentless pursuit of excellence is what fuels our team's
                  passion and ensures that every client engagement delivers:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: "✅", text: "Exceptional talent" },
                    { icon: "✅", text: "Strategic alignment" },
                    { icon: "✅", text: "Measurable results" },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="font-semibold text-[#0a1f44]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-xl font-bold text-center text-[#00809D]">
                Every client. Every time. Without compromise.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00809D] to-[#0a1f44] rounded-2xl p-8 text-center text-white shadow-2xl">
            <p className="text-xl md:text-2xl font-bold">
              At B2 Tech Services, we don't just connect talent with
              opportunity; we build the foundation for your future success.
            </p>
          </div>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] to-[#00809D]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm sm:text-base">
                Our Commitment
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Promise
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#00809D] mb-6">
              More Than Recruitment — Real Results, Real Impact
            </h3>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-white/20 mb-12">
            <div className="space-y-6 text-white leading-relaxed">
              <p className="text-lg md:text-xl text-center">
                At B2 Tech Services, we make a simple but powerful commitment:
                To deliver results that truly matter.
              </p>
              <p className="text-lg md:text-xl text-center">
                Driven by our founder's uncompromising passion for excellence
                and relentless pursuit of performance, we go far beyond
                traditional hiring practices.
              </p>
              <p className="text-lg md:text-xl text-center">
                We deliver tailored, strategic talent solutions — built around
                your unique business goals and powered by speed, precision, and
                deep domain expertise.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <p className="text-xl md:text-2xl font-bold text-white text-center mb-6">
              Because with us, you're not just filling positions.
            </p>
            <p className="text-lg text-blue-100 text-center mb-6">
              You're building high-impact teams. Strengthening your
              organization. Laying the foundation for long-term success.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "✅", text: "Precision-driven hiring" },
                { icon: "✅", text: "Strategic alignment" },
                { icon: "✅", text: "Exceptional outcomes — every time" },
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <div className="text-3xl">{item.icon}</div>
                  <p className="text-blue-100 font-semibold">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-[#00809D]/20 mb-6">
              <Star className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold text-sm sm:text-base">
                Our Differentiators
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              What Sets Us Apart
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Unwavering Belief in Hard Work & Perseverance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Success is earned through dedication, grit, and consistent
                effort — never shortcuts.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Results-Driven Mindset
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Grounded in deep industry expertise, we deliver solutions that
                produce measurable, impactful outcomes.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Culture of Continuous Improvement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We refuse to settle. Constantly innovating, learning, and
                raising the bar to exceed expectations.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Commitment to Long-Term Partnerships
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our relationships go beyond placements — we invest in lasting
                connections that fuel sustained growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Founder Highlight */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-4">
                Leadership That Inspires
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto"></div>
            </div>

            <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-[500px] lg:h-auto">
                  <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44] to-transparent opacity-60"></div>
                </div>

                <div className="p-12 flex flex-col justify-center text-white">
                  <div className="mb-6">
                    <Sparkles className="w-12 h-12 text-[#00809D] mb-4" />
                    <h3 className="text-4xl font-bold mb-2">
                      {teamMembers[0].name}
                    </h3>
                    <p className="text-2xl text-blue-200 mb-4">
                      {teamMembers[0].role}
                    </p>
                    <div className="w-20 h-1 bg-[#00809D]"></div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-blue-100">
                    {teamMembers[0].description}
                  </p>
                  <div className="space-y-3">
                    {[
                      "Global Recruitment Expertise",
                      "Visionary Leadership",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#00809D] flex-shrink-0" />
                        <span className="text-blue-100">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
                Our Core Leadership
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {teamMembers.slice(1).map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44] via-transparent to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-lg text-blue-200">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              How We Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At B2 Tech Services, we operate as a cohesive team, maximizing
              each other's strengths to achieve collective success. Our
              collaborative approach enables us to tackle challenges
              effectively, ensuring the best outcomes for every client, every
              time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Cohesive Team
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Working together seamlessly, leveraging diverse strengths to
                deliver exceptional results for every client engagement.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Strategic Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tackling challenges with precision and strategy, ensuring
                optimal outcomes through collaborative problem-solving.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-4">
                Collective Success
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Maximizing team synergy to achieve outstanding results that
                exceed expectations every single time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] to-[#00809D]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Commitment to You
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-2xl text-[#00809D] font-bold">
              Excellence is more than a goal — it's our unwavering standard.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-white/20 mb-12">
            <div className="space-y-6">
              {[
                'We never settle for "good enough."',
                "We uphold the highest levels of care, precision, and professionalism.",
                "We treat every project and partnership with the attention it truly deserves.",
                "We strive not only to meet but to consistently exceed your expectations.",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white/5 p-4 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-[#00809D] flex-shrink-0 mt-1" />
                  <p className="text-lg text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00809D] to-cyan-500 rounded-2xl p-8 text-center shadow-2xl">
            <p className="text-xl md:text-2xl font-bold text-white">
              When you choose B2 Tech Services, you're not just hiring a service
              provider — you're gaining a dedicated partner invested in your
              long-term success.
            </p>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Handshake className="w-16 h-16 text-[#00809D] mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
                Join Us on Our Journey
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                As we continue to provide exceptional recruitment services, we
                invite more organizations to partner with us. Whether you're
                looking to fill technical positions or scale your team, we're
                here to help you grow with top-tier talent.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Together, we can drive success and make a lasting impact on your
                organization's future.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Technical Position Fulfillment",
                  "Team Scaling Solutions",
                  "Top-Tier Talent Acquisition",
                  "Long-term Partnership Growth",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00809D] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <button className="bg-[#00809D] hover:bg-[#006b84] text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Link to="/contact">Partner With Us</Link>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src={images.team2}
                    alt="Teamwork"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={images.pro}
                    alt="Meeting"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src={images.believe}
                    alt="Success"
                    className="rounded-2xl shadow-xl w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={images.expert}
                    alt="Partnership"
                    className="rounded-2xl shadow-xl w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
