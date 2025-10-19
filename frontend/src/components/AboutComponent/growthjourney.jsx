import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Rocket,
  Heart,
  Users,
  Zap,
  Award,
  Target,
  CheckCircle,
  Star,
  Sparkles,
  ArrowRight,
  Briefcase,
  UserCheck,
  Clock,
  Shield,
} from "lucide-react";

export default function ValuesPage() {
  const [scrollY, setScrollY] = useState(0);

  // Placeholder images - replace with your actual imports
  const images = {
    In: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    growth:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    team2:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    leader:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const values = [
    {
      icon: TrendingUp,
      title: "Every Day is an Opportunity to Improve",
      description:
        "Growth is a continuous journey. Every day offers a fresh chance to learn, evolve, and elevate — in ourselves, our services, and our relationships.",
      color: "from-blue-500 to-cyan-500",
      emoji: "🌱",
    },
    {
      icon: Rocket,
      title: "A Better Tomorrow Starts Today",
      description:
        "We take meaningful action today to build a stronger, more successful future. Progress waits for no one — and neither do we.",
      color: "from-purple-500 to-pink-500",
      emoji: "🚀",
    },
    {
      icon: Heart,
      title: "Making a Difference",
      description:
        "We create value that lasts. For our clients, candidates, and communities, our goal is to leave a positive and enduring impact through everything we do.",
      color: "from-red-500 to-orange-500",
      emoji: "💡",
    },
    {
      icon: Users,
      title: "Working Together",
      description:
        "Collaboration is at the heart of our success. By nurturing strong partnerships — within our team and with our clients — we move faster, smarter, and farther.",
      color: "from-green-500 to-teal-500",
      emoji: "🤝",
    },
    {
      icon: Zap,
      title: "Going the Extra Mile",
      description:
        '"Good enough" is not part of our vocabulary. We consistently push beyond expectations to deliver outstanding results that speak volumes.',
      color: "from-yellow-500 to-orange-500",
      emoji: "🔥",
    },
    {
      icon: Award,
      title: "Delivering Our Very Best",
      description:
        "We take ownership of our work and every outcome. Excellence isn't just a goal — it's our standard.",
      color: "from-indigo-500 to-purple-500",
      emoji: "🏆",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .float-animation {
          animation: float 15s infinite ease-in-out;
        }
      `,
        }}
      />

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1f44] via-[#0a1f44] to-[#00809D]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-96 h-96 bg-[#00809D] rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          ></div>
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          style={{ marginTop: "70px" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            We Believe In
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our beliefs aren't just words — they are the foundation of our
            culture, the compass for every decision, and the fuel behind our
            relentless pursuit of excellence.
          </p>
        </div>
      </div>

      {/* B2 = Believe & Become Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-[#00809D]/20 mb-6">
              <Sparkles className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold text-sm sm:text-base">
                Our Philosophy
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              🔷 Why "B2"?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto mb-8"></div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#00809D] mb-6">
              B2 = Believe & Become
            </h3>
          </div>

          <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] rounded-3xl p-8 md:p-12 shadow-2xl text-white mb-12">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed">
                At B2 Tech Services, our name is more than just a brand — it's a
                mindset.{" "}
                <span className="font-bold text-[#00809D] bg-white px-2 py-1 rounded">
                  "Believe in yourself. Become who you're meant to be."
                </span>
              </p>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                We believe that every great journey—whether it's building a
                career, growing a business, or transforming an idea—starts with
                belief and is shaped through consistent, determined action.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <p className="text-xl font-bold text-center">
                  This isn't just our philosophy. It's the core of everything we
                  do.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a1f44] mb-6 text-center">
              It's more than a name — it's a mindset
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              We believe that every remarkable journey starts with one essential
              ingredient: belief — Belief in your talent, your vision, and your
              possibility. We exist to turn that belief into reality by helping
              individuals and businesses become their best.
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <p className="text-xl text-[#0a1f44] text-center font-semibold">
                Whether you're a professional looking for your next big
                opportunity, or a company searching for game-changing talent —
                B2 Tech Services is your launchpad for success.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#00809D] to-[#0a1f44] rounded-2xl p-8 text-center text-white shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold">
              This isn't just a tagline — It's our mission, our mindset, and the
              movement we're building.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                We Don't Just Fill Roles — We Fuel Your Growth and Success
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Guided by a visionary leader who leads by example, our team
                stands for quality, trust, and meaningful impact in every client
                partnership.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] text-center mb-4">
            We Believe In
          </h2>
          <p className="text-xl text-gray-600 text-center mb-8 max-w-4xl mx-auto">
            Here's what drives us every single day
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl">{value.emoji}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1f44] mb-4 group-hover:text-[#00809D] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#0a1f44] to-[#00809D] rounded-2xl p-8 text-white shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold">
                At B2 Tech Services, These Aren't Just Values — They Are the
                Principles That Power Everything We Do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-[#00809D]/20 mb-6">
              <Users className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold text-sm sm:text-base">
                Our Approach
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              How We Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
              We operate as one unified team, blending individual strengths,
              diverse expertise, and shared values to drive collective success.
              Our collaborative approach allows us to navigate challenges with
              precision and agility, ensuring the best possible outcomes for
              every client, every time.
            </p>
          </div>
        </div>
      </div>

      {/* Movement Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] to-[#00809D]"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              More Than a Recruitment Firm
            </h2>
            <p className="text-2xl text-blue-100 font-light">
              B2 Tech is a movement — built on integrity, excellence, and
              lasting value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#00809D]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                For Businesses
              </h3>
              <p className="text-blue-100 text-lg">
                Find exceptional talent to fuel your growth and drive innovation
                forward
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#00809D]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                For Professionals
              </h3>
              <p className="text-blue-100 text-lg">
                Gain the tools, recognition, and support to elevate your craft
                and career
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-white font-semibold mb-6">
              B2 Tech Services stands as a trusted partner for those who
              understand that
            </p>
            <p className="text-2xl md:text-3xl text-[#00809D] font-bold bg-white/8 inline-block px-8 py-4 rounded-full">
              People are the true engine of progress
            </p>
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
                Culture of Continuous Improvement
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We refuse to settle. Constantly innovating, learning, and
                raising the bar to exceed expectations.
              </p>
              <div className="space-y-4">
                {[
                  "Never settling for good enough",
                  "Pushing boundaries every day",
                  "Learning and adapting constantly",
                  "Setting new industry standards",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00809D] rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={images.In}
                  alt="Innovation"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src={images.growth}
                  alt="Growth"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={images.team2}
                  alt="Teamwork"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
                <img
                  src={images.leader}
                  alt="Leadership"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Proven Excellence Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0a1f44] mb-6">
              Proven Excellence
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#00809D] mb-6">
              Leadership That Sets the Standard
            </h3>
          </div>

          <div className="bg-gradient-to-br from-[#0a1f44] to-[#00809D] p-12 rounded-3xl shadow-2xl text-white mb-12">
            <p className="text-xl leading-relaxed mb-6">
              Renowned for consistently exceeding expectations, our founder has
              earned the trust of engineering and talent acquisition leaders
              around the globe. His track record isn't just built on performance
              — it's built on partnership, precision, and an unwavering
              commitment to quality.
            </p>
            <p className="text-xl leading-relaxed">
              But his drive to be the best goes beyond personal ambition. It's
              the foundation of B2 Tech Services' culture — a culture that
              inspires excellence, accountability, and impact at every level.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold text-[#0a1f44] mb-8 text-center">
              This relentless pursuit of excellence ensures every client
              engagement delivers:
            </h4>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-[#00809D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-[#0a1f44] mb-2">
                  Exceptional Talent
                </h5>
                <p className="text-gray-600">
                  Top-tier professionals who drive real results
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-[#00809D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-[#0a1f44] mb-2">
                  Strategic Alignment
                </h5>
                <p className="text-gray-600">
                  Perfect matches for your vision and goals
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="w-16 h-16 bg-[#00809D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-xl font-bold text-[#0a1f44] mb-2">
                  Measurable Results
                </h5>
                <p className="text-gray-600">
                  Tangible outcomes you can count on
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-[#0a1f44] mb-4">
                Every client. Every time. Without compromise.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full border border-[#00809D]/20 mb-6">
              <Award className="w-5 h-5 text-[#00809D]" />
              <span className="text-[#00809D] font-semibold text-sm sm:text-base">
                Partner With Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              Join Us on Our Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
              As we continue to set new standards in recruitment and talent
              solutions, we invite forward-thinking organizations to partner
              with us.
            </p>

            <h3 className="text-2xl font-bold text-[#0a1f44] mb-6 text-center">
              Whether you are:
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#00809D] rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Filling highly specialized technical roles
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#00809D] rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Scaling rapidly and need a reliable, efficient hiring engine
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-[#00809D] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Seeking strategic, long-term talent support
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl text-gray-700 font-semibold">
                We're here to power your growth with top-tier talent and
                comprehensive, end-to-end hiring solutions.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-[#00809D] mb-8">
              Let's build the future — together.
            </p>
          </div>
        </div>
      </div>

      {/* Right Job Right Candidate Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1f44] mb-6">
              Right Job. Right Candidate. Right Now.
            </h2>
            <p className="text-2xl text-[#00809D] font-bold mb-8">
              Only Possible with B2 Tech Services.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#00809D] to-[#0a1f44] mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Finding the perfect match in today's fast-paced world isn't easy.
              Whether you're a candidate searching for the right opportunity or
              a company seeking ideal talent, timing and precision matter—more
              than ever.
            </p>
            <p className="text-2xl font-bold text-center text-[#0a1f44] mb-4">
              That's where B2 Tech Services steps in.
            </p>
            <p className="text-lg text-gray-600 text-center">
              We don't just fill positions; we connect potential with
              opportunity—swiftly, accurately, and effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Candidates */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-6">
                For Candidates:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00809D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#0a1f44] mb-1">
                      Tailored Opportunities:
                    </p>
                    <p className="text-gray-600">
                      We understand your skills, aspirations, and career goals
                      to match you with roles where you can truly thrive.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00809D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#0a1f44] mb-1">
                      Immediate Impact:
                    </p>
                    <p className="text-gray-600">
                      Our vast network means you gain access to openings that
                      suit your profile right now—not months later.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00809D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#0a1f44] mb-1">
                      Career Growth:
                    </p>
                    <p className="text-gray-600">
                      We partner with industry leaders who value and invest in
                      your development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Employers */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00809D] to-[#0a1f44] rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44] mb-6">
                For Employers:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00809D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#0a1f44] mb-1">
                      Top-Tier Talent:
                    </p>
                    <p className="text-gray-600">
                      Access India's elite pool of candidates, rigorously vetted
                      and ready to contribute from day one.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00809D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#0a1f44] mb-1">
                      Speed & Precision:
                    </p>
                    <p className="text-gray-600">
                      Our proven processes ensure you meet the right
                      candidates—saving you time and resources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00809D] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#0a1f44] mb-1">
                      Scalable Solutions:
                    </p>
                    <p className="text-gray-600">
                      Whether hiring a single star player or building entire
                      teams, we adapt to your pace and needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#00809D] to-[#0a1f44]"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20 float-animation"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm sm:text-base">
              Take Action Today
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            At B2 Tech Services, These Aren't Just Values
          </h2>
          <p className="text-2xl md:text-3xl text-blue-100 mb-8">
            They Are the Principles That Power Everything We Do
          </p>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            We don't just connect talent with opportunity; we build the
            foundation for your future success.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-bold text-white mb-4">
              📩 Looking to hire or get hired?
            </p>
            <p className="text-lg text-blue-100">
              Connect with us today and let's take the next big step in your
              recruitment journey.
            </p>
          </div>

          <button className="bg-white text-[#00809D] px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center gap-3">
            <Link to="/contact">Partner With Us Today</Link>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
