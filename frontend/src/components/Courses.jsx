import React, { useState } from 'react';
import { Code, Cpu, Cloud, Globe, Smartphone, Wifi, Brain, Zap, BookOpen, Award, Users, Mail, Phone, ChevronDown, ChevronUp, Sparkles, Rocket, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    icon: Code,
    title: "Blockchain & Quantum Computing",
    emoji: "🚀",
    tagline: "Are You Ready to Learn Blockchain & Quantum Computing?",
    intro: "The future isn't coming — it's already here. Are you prepared to be part of it?",
    description: "We're looking for curious, driven individuals who are eager to explore and grow in cutting-edge technologies like:",
    topics: [
      {
        title: "🔗 Blockchain & Web3:",
        items: [
          "Distributed Ledger Technology (DLT)",
          "Smart Contracts & Tokenization",
          "NFTs, DeFi, and Decentralized Applications",
          "Consensus Algorithms & Cryptography"
        ]
      },
      {
        title: "⚛️ Quantum Computing:",
        items: [
          "Quantum Computing Fundamentals (Qubits, Superposition, Entanglement)",
          "Quantum Algorithms & Quantum Supremacy",
          "Post-Quantum Cryptography & Quantum Resilience",
          "Quantum Key Distribution (QKD)"
        ]
      }
    ],
    whoShouldJoin: [
      "Tech professionals eager to move beyond conventional domains",
      "Freshers or mid-level engineers curious about frontier technologies",
      "Anyone willing to invest time and passion into learning the next wave of innovation"
    ],
    whatYouGet: [
      "Exposure to real-world applications & use cases",
      "Learning opportunities through live projects, mentorship, or guided training",
      "A path to future roles in Blockchain, Web3, or Quantum Tech"
    ],
    interested: "📲 Interested? Let's connect.",
    contactInfo: "DM me or contact Hrushikesh at 6364053221",
    cta: "The future belongs to the bold — let's build it together."
  },
  {
    id: 2,
    icon: Cpu,
    title: "EDA Software & CAD Flows",
    emoji: "🛠️💡",
    tagline: "Learn EDA Software & CAD Flows – Power the Design Behind Every Chip",
    intro: "Chips are the brains behind every smart device — and EDA (Electronic Design Automation) is how they come to life.",
    description: "If you're ready to deep-dive into the tools and flows used by global semiconductor giants, now is your chance.",
    topics: [
      {
        title: "🏭 Industry-Standard EDA Tools:",
        items: [
          "Vendor Suites: Synopsys, Cadence, Mentor Graphics (Siemens EDA)",
          "Understanding toolchains across Front-End (FE) & Back-End (BE) flows"
        ]
      },
      {
        title: "🔧 Front-End Design Flows:",
        items: [
          "RTL Design (Verilog/VHDL)",
          "Functional, Formal, and AMS Verification",
          "Circuit Simulation and Logic Synthesis"
        ]
      },
      {
        title: "🧱 Back-End Design Flows:",
        items: [
          "Floorplanning (FP), Place & Route (P&R)",
          "Clock Tree Synthesis (CTS)",
          "Parasitic Extraction, Static Timing Analysis (STA)",
          "Power Analysis, LVS/DRC Sign-off"
        ]
      },
      {
        title: "🧮 Coding & Optimization Skills:",
        items: [
          "C/C++, Python, Perl, TCL",
          "Math & Statistical optimization for EDA flow customization",
          "Automation scripting for tool integration"
        ]
      }
    ],
    whoShouldJoin: [
      "Aspiring VLSI/EDA engineers",
      "Electrical & Electronics graduates looking to specialize in chip design tools",
      "Professionals wanting to sharpen toolchain automation and flow optimization"
    ],
    readyTitle: "📲 Ready to Master the Tools that Design the Future?",
    contactInfo: "Get in touch with Hrushikesh – 6364053221",
    cta: "Let's build the skills that enable silicon to think."
  },
  {
    id: 3,
    icon: Zap,
    title: "Full-Cycle VLSI Design & Smart Chip Architecture",
    emoji: "🔩⚡",
    tagline: "Master Full-Cycle VLSI Design, Smart Chip Architecture & EDA Tools",
    intro: "The semiconductor world is powering everything — from smartphones and AI to quantum computing. If you're ready to enter the core of chip innovation, this is your calling.",
    description: "We're inviting engineers and tech enthusiasts to learn the full stack of VLSI IC design and smart chip development, including cutting-edge EDA/CAD workflows and AI-powered chip architecture.",
    topics: [
      {
        title: "🧠 Architecture & High-Performance Design",
        items: [
          "CPU, GPU, NPU Architecture & Custom Designs",
          "Low-power, high-performance strategies",
          "Advanced ASIC & Semiconductor Process Insights",
          "Digital, Analog, and Mixed-Signal Design including RF & Standard Cells"
        ]
      },
      {
        title: "🛠️ Design Flow & Verification",
        items: [
          "RTL Design, Functional and Formal Verification",
          "Synthesis, PD (RTL to GDS-II), DRC/LVS Signoff",
          "Clock Tree, Floorplanning, Routing, STA (Static Timing Analysis)",
          "Timing & Power Closure, Process Corners, and LPD"
        ]
      },
      {
        title: "🧰 EDA Tools & Smart Chips",
        items: [
          "Cadence, Synopsys, Mentor Graphics workflows",
          "AI-powered chip design tools (DLA, NPU optimization)",
          "Memory Design, Custom & Standard Cell Layout"
        ]
      }
    ],
    whoShouldJoin: [
      "VLSI, Electronics, or Electrical Engineering graduates",
      "Chip design professionals aiming to master full-cycle IC development",
      "Engineers entering EDA/CAD, AI Chip Design, or Smart SoCs"
    ],
    readyTitle: "📲 Ready to Design the Next Generation of Chips?",
    contactInfo: "Connect with Hrushikesh – 6364053221",
    cta: "Build what powers the world — one transistor at a time.",
    hashtags: "#VLSIDesign #ChipDesign #ASIC #CPUArchitecture #GPUs #EDA #RTLDesign #RTL2GDSII #SemiconductorCareers #SmartChips #DLAs #SoCDesign #EDAtools #ICDesign #AIChips #LowPowerDesign"
  },
  {
    id: 4,
    icon: Cloud,
    title: "Cloud Computing & Big Data",
    emoji: "🚀",
    tagline: "Learn Cloud Computing & Big Data – Future-Proof Your Tech Career",
    intro: "Technology is evolving faster than ever — and Cloud & Big Data are at the center of it all.",
    subIntro: "Are you ready to level up and stay ahead?",
    description: "We're inviting ambitious learners and tech professionals who want to dive deep into real-world cloud platforms and data-driven technologies.",
    topics: [
      {
        title: "☁️ Cloud Platforms & Architecture",
        items: [
          "Multi-Cloud Environments: AWS, Azure, GCP",
          "Hybrid Cloud Strategies & Deployments",
          "Platform Models: PaaS, SaaS, CaaS"
        ]
      },
      {
        title: "💾 Big Data & Analytics",
        items: [
          "Data Lakes, ETL Pipelines, Real-time Processing",
          "Tools & Frameworks: Apache Hadoop, Spark, Kafka",
          "Big Data Analytics for decision-making and automation"
        ]
      },
      {
        title: "🧱 Tech Stacks & Modern Development",
        items: [
          "Stacks: MEAN, MERN, LAMP",
          "Microservices Architecture",
          "Docker, Kubernetes, Kubeflow"
        ]
      },
      {
        title: "💻 Programming Languages & Tools",
        items: [
          "Scala, Ruby, Java, Python",
          "Integration with Cloud-native services"
        ]
      }
    ],
    whoShouldJoin: [
      "Freshers, developers, and tech enthusiasts looking to specialize in Cloud & Big Data",
      "Professionals ready to transition into high-demand cloud roles",
      "Anyone who wants hands-on exposure to modern platforms and architectures"
    ],
    readyTitle: "📲 Let's Get Started",
    contactInfo: "Connect with Hrushikesh – 6364053221",
    cta: "Whether you're building your next career move or a new skillset — this is your launchpad.",
    hashtags: "#CloudComputing #BigData #AWS #Azure #GCP #DataLakes #ETLPipelines #Docker #Kubernetes #MEAN #MERN #PaaS #SaaS #Hadoop #CareerInTech #UpskillNow #TechLearning"
  },
  {
    id: 5,
    icon: Smartphone,
    title: "Full Stack Web & Mobile Development",
    emoji: "💻📱",
    tagline: "Learn Full Stack Web & Mobile Development – Build Real Products, Not Just Code",
    intro: "Are you passionate about end-to-end application development?",
    subIntro: "Do you want to master both web and mobile platforms using today's most in-demand tools and frameworks?",
    description: "This is your chance to dive deep into Full Stack Development — and build the kind of products that scale.",
    topics: [
      {
        title: "🎨 Frontend, UI/UX/CX Design",
        items: [
          "Responsive Interfaces with React, Angular, Vue, TypeScript",
          "Cross-platform mobile apps using Flutter, React Native, Ionic",
          "Design Thinking & Seamless CX"
        ]
      },
      {
        title: "🧠 Backend & API Development",
        items: [
          "RESTful and GraphQL APIs",
          "Backend with Node.js, GoLang, PHP, Rust",
          "Authentication, Security, and DevOps practices"
        ]
      },
      {
        title: "🗄️ Database Architecture",
        items: [
          "SQL & NoSQL: MySQL, PostgreSQL, Firebase, GraphDB",
          "Realtime data, offline sync, and scalable structures"
        ]
      },
      {
        title: "📱 Mobile & Web Platforms",
        items: [
          "Build for PWA, Native (Android/iOS), and Hybrid apps",
          "End-to-end deployment pipelines and CI/CD automation"
        ]
      }
    ],
    whoShouldJoin: [
      "Aspiring full stack developers",
      "Web/mobile engineers looking to go cross-platform",
      "Anyone ready to turn ideas into working products — fast"
    ],
    readyTitle: "📲 Let's Build Together",
    contactInfo: "Reach out to Hrushikesh – 6364053221",
    subCta: "Learn it. Build it. Deploy it.",
    cta: "Become a Full Stack Creator — not just a coder.",
    hashtags: "#FullStackDeveloper #MobileDevelopment #WebDevelopment #ReactNative #Angular #NodeJS #Firebase #UXDesign #PWA #HybridApps #Flutter #GoLang #TechLearning #UpskillNow"
  },
  {
    id: 6,
    icon: Wifi,
    title: "IoT, Embedded Systems & Robotics",
    emoji: "🤖📡",
    tagline: "Learn IoT, Embedded Systems & Robotics – Build the Smart Tech of Tomorrow",
    intro: "Are you fascinated by connected devices, real-world automation, and the brains behind machines?",
    description: "We're inviting passionate learners to explore the exciting world of IoT, Embedded Systems, and Robotics — from hardware to AI-enabled intelligence.",
    topics: [
      {
        title: "🌐 Internet of Things (IoT) & IIoT",
        items: [
          "Industrial IoT applications & architectures",
          "Integration with Cloud, AI/ML, and Data Mining",
          "Edge Computing, Streaming Analytics, and Data Security"
        ]
      },
      {
        title: "🛠️ Embedded & Hardware Systems",
        items: [
          "Sensors, Actuators, and Firmware Development",
          "RF Communication & Board-Level Circuit Design",
          "FPGA Design & advanced Embedded Systems development"
        ]
      },
      {
        title: "🚁 Robotics & UAVs",
        items: [
          "Robotics control systems, UAV (Drone) frameworks",
          "Navigation, autonomy, and real-time data handling",
          "Embedded AI integration for smart robotics"
        ]
      }
    ],
    whoShouldJoin: [
      "Engineers and developers passionate about hardware-software integration",
      "Beginners curious about smart devices, drones, and embedded AI",
      "Anyone looking to build real-world IoT/Robotics solutions"
    ],
    readyTitle: "📲 Let's Build the Future",
    contactInfo: "Contact Hrushikesh – 6364053221",
    cta: "Let's turn ideas into intelligent machines and connected ecosystems.",
    hashtags: "#IoT #EmbeddedSystems #Robotics #FPGA #FirmwareDevelopment #EdgeComputing #IIoT #UAV #Drones #AIinIoT #SmartDevices #TechLearning #UpskillNow #EngineeringFuture"
  },
  {
    id: 7,
    icon: Brain,
    title: "AI, Generative AI & Computer Vision",
    emoji: "🤖💡",
    tagline: "Learn AI, Generative AI & Computer Vision – Master the Intelligence Behind Tomorrow's Technology",
    intro: "Do you want to be at the forefront of the AI revolution?",
    subIntro: "Whether it's building smart chatbots, analyzing complex medical images, or understanding the science behind Generative AI — this is your path forward.",
    description: "We're inviting curious minds to upskill in the most transformative fields in tech today.",
    topics: [
      {
        title: "🔍 Artificial Intelligence & Machine Learning",
        items: [
          "Core AI, Machine Learning (ML), Deep Learning (DL), Natural Language Processing (NLP)",
          "Generative AI, Chatbots, Conversational AI (Voice & Text)",
          "Frameworks: PyTorch, TensorFlow, Keras, Scikit-learn, H2O.ai, Caffe2, ONNX"
        ]
      },
      {
        title: "🎥 Computer Vision & Multimodal AI",
        items: [
          "Image, Video, and Audio Analytics",
          "Pattern Recognition, OCR, object detection, facial recognition",
          "Tools: OpenCV, YOLO, MediaPipe"
        ]
      },
      {
        title: "🤖 Conversational & GenAI Tools",
        items: [
          "Large Language Models: GPT-3, BERT, RASA, Kore.ai",
          "Prompt engineering, fine-tuning, and deployment"
        ]
      },
      {
        title: "🧬 AI in Bioinformatics & Life Sciences",
        items: [
          "BioPython, Genomic Data Processing, Biomedical Imaging",
          "Applications in diagnostics, drug discovery, and genetic research"
        ]
      },
      {
        title: "⚙️ AI Hardware & Optimization",
        items: [
          "AI Inference Chips, NPUs, DLAs, and Edge AI",
          "Model compression, quantization, and deployment optimization"
        ]
      }
    ],
    whoShouldJoin: [
      "Developers and engineers curious about building real AI/GenAI systems",
      "Data scientists ready to expand into CV and NLP",
      "Life sciences professionals exploring AI in bioinformatics and healthcare",
      "Anyone serious about building a future-proof AI career"
    ],
    readyTitle: "📲 Ready to Start?",
    contactInfo: "Connect with Hrushikesh – 6364053221",
    cta: "Let's create intelligent systems that learn, see, speak, and evolve.",
    hashtags: "#ArtificialIntelligence #GenerativeAI #ComputerVision #MachineLearning #Chatbots #Bioinformatics #TensorFlow #PyTorch #GPT3 #NLP #DeepLearning #AIinHealthcare #AIUpskilling #FutureTech #AIJobs"
  }
];

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleCourse = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-6000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#00809D] rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Hero Section with Enhanced Animation */}
       <div className="text-center mb-16 animate-fadeInUp">
  <div className="inline-block bg-[#00809D]/10 px-6 py-3 rounded-full mb-6 backdrop-blur-sm border border-[#00809D]/20 animate-slideInDown shadow-lg mt-15 sm:mt-8">
    <span className="text-[#00809D] font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
      <Sparkles className="w-4 h-4 animate-spin-slow" />
      Professional Training Programs
      <Sparkles className="w-4 h-4 animate-spin-slow" />
    </span>
  </div>

  <h1 className="text-5xl md:text-7xl font-bold text-[#0a1f44] mb-6 animate-slideInUp">
    Transform Your Career with
    <br />
    <span className="bg-gradient-to-r from-[#00809D] to-cyan-600 bg-clip-text text-transparent inline-block animate-gradient">
      Cutting-Edge Technology Courses
    </span>
  </h1>
  
  <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fadeIn animation-delay-300">
    Master the skills that power the future. From AI and Cloud to VLSI and Quantum Computing — dive deep into industry-leading technologies with expert mentorship.
  </p>

  {/* Animated Icons */}
  <div className="flex justify-center gap-6 mt-8 flex-wrap">
    {[Code, Cpu, Cloud, Brain, Smartphone, Wifi].map((Icon, idx) => (
      <div
        key={idx}
        className="bg-white/70 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-fadeIn border border-[#00809D]/20"
        style={{ animationDelay: `${idx * 100}ms` }}
      >
        <Icon className="w-8 h-8 text-[#00809D]" />
      </div>
    ))}
  </div>
</div>


        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: BookOpen, value: '8+', label: 'Specialized Courses', color: 'from-blue-400 to-cyan-400' },
            { icon: Users, value: '100%', label: 'Job Assistance', color: 'from-[#00809D] to-cyan-500' },
            { icon: Award, value: 'Expert', label: 'Instructors', color: 'from-cyan-400 to-blue-500' },
            { icon: Zap, value: 'Live', label: 'Projects', color: 'from-[#00809D] to-indigo-500' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative group animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                   style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-[#00809D]">
                <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#0a1f44] mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Courses Grid */}
        <div className="space-y-8 mb-16">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const isExpanded = expandedCourse === course.id;
            const isHovered = hoveredCard === course.id;
            
            return (
              <div
                key={course.id}
                className="relative group animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00809D] to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border-2 border-transparent hover:border-[#00809D]/50 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00809D]/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Course Header */}
                  <div
                    className="p-6 md:p-8 cursor-pointer relative"
                    onClick={() => toggleCourse(course.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-6 flex-1">
                        {/* Animated Icon */}
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-br from-[#00809D] to-cyan-500 rounded-2xl blur-lg opacity-50 ${isHovered ? 'animate-pulse' : ''}`}></div>
                          <div className="relative bg-gradient-to-br from-[#00809D]/20 to-cyan-500/20 p-5 rounded-2xl border-2 border-[#00809D] backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                            <Icon className={`w-10 h-10 text-[#00809D] ${isHovered ? 'animate-bounce' : ''}`} />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-4xl mb-3 animate-bounce inline-block">{course.emoji}</div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-[#00809D] text-white px-3 py-1 rounded-full text-sm font-bold">
                              Course {course.id}
                            </span>
                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
                          </div>
                          <h3 className="text-2xl md:text-4xl font-bold text-[#0a1f44] mb-3 group-hover:text-[#00809D] transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-xl md:text-2xl text-[#00809D] font-bold mb-3 animate-fadeIn">
                            {course.tagline}
                          </p>
                          <p className="text-lg text-gray-700 font-semibold mb-2">{course.intro}</p>
                          {course.subIntro && (
                            <p className="text-lg text-gray-600 font-medium italic">{course.subIntro}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Animated Expand Button */}
                      <button className="text-white bg-gradient-to-r from-[#00809D] to-cyan-600 hover:from-cyan-600 hover:to-[#00809D] p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 animate-bounce" />
                        ) : (
                          <ChevronDown className="w-6 h-6 animate-pulse" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content with Smooth Animation */}
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-8 pb-8 border-t border-cyan-100">
                      <div className="pt-8 space-y-8">
                        {/* Description */}
                        <div className="animate-fadeIn">
                          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium bg-gradient-to-r from-white/50 to-cyan-50/50 p-6 rounded-2xl border border-cyan-100">
                            {course.description}
                          </p>
                        </div>

                        {/* What You'll Learn */}
                        <div className="animate-slideInUp">
                          <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="w-8 h-8 text-[#00809D] animate-spin-slow" />
                            <h4 className="text-3xl md:text-4xl font-bold text-[#0a1f44]">
                              What You'll Learn:
                            </h4>
                            <Sparkles className="w-8 h-8 text-[#00809D] animate-spin-slow" />
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            {course.topics.map((topic, idx) => (
                              <div
                                key={idx}
                                className="group/topic bg-gradient-to-br from-white to-cyan-50 p-6 rounded-2xl border-2 border-cyan-100 hover:border-[#00809D] transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fadeIn"
                                style={{ animationDelay: `${idx * 100}ms` }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00809D]/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover/topic:opacity-100 transition-opacity"></div>
                                <h5 className="text-xl md:text-2xl font-bold text-[#00809D] mb-4 flex items-center gap-2">
                                  <Rocket className="w-6 h-6 group-hover/topic:animate-bounce" />
                                  {topic.title}
                                </h5>
                                <ul className="space-y-3">
                                  {topic.items.map((item, itemIdx) => (
                                    <li
                                      key={itemIdx}
                                      className="flex items-start gap-3 text-gray-700 text-base md:text-lg hover:text-[#00809D] transition-colors group/item"
                                    >
                                      <span className="text-[#00809D] mt-1 flex-shrink-0 text-xl group-hover/item:scale-125 transition-transform">▸</span>
                                      <span className="font-medium">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Who Should Join */}
                        <div className="animate-slideInUp animation-delay-200">
                          <div className="flex items-center gap-3 mb-6">
                            <Users className="w-8 h-8 text-[#00809D] animate-pulse" />
                            <h4 className="text-3xl md:text-4xl font-bold text-[#0a1f44]">
                              🌱 Who Should Join:
                            </h4>
                          </div>
                          <div className="bg-gradient-to-br from-white to-cyan-50 p-8 rounded-2xl border-2 border-[#00809D]/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                            <ul className="space-y-4">
                              {course.whoShouldJoin.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-4 text-gray-700 text-lg md:text-xl group/item hover:translate-x-2 transition-transform duration-300"
                                >
                                  <span className="text-[#00809D] mt-1 text-2xl flex-shrink-0 group-hover/item:scale-125 transition-transform">✓</span>
                                  <span className="font-medium">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* What You'll Get */}
                        {course.whatYouGet && (
                          <div className="animate-slideInUp animation-delay-300">
                            <div className="flex items-center gap-3 mb-6">
                              <Award className="w-8 h-8 text-[#00809D] animate-bounce" />
                              <h4 className="text-3xl md:text-4xl font-bold text-[#0a1f44]">
                                📌 What You'll Get:
                              </h4>
                            </div>
                            <div className="bg-gradient-to-br from-white to-cyan-50 p-8 rounded-2xl border-2 border-[#00809D]/30 shadow-lg hover:shadow-2xl transition-all duration-300">
                              <ul className="space-y-4">
                                {course.whatYouGet.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-4 text-gray-700 text-lg md:text-xl group/item hover:translate-x-2 transition-transform duration-300"
                                  >
                                    <span className="text-[#00809D] mt-1 text-2xl flex-shrink-0 group-hover/item:rotate-180 transition-transform duration-500">★</span>
                                    <span className="font-medium">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* Contact Section */}
                       

                        {/* Hashtags */}
                        {course.hashtags && (
                          <div className="pt-6 animate-fadeIn animation-delay-500">
                            <div className="bg-gradient-to-r from-white/50 to-cyan-50/50 p-6 rounded-2xl border border-cyan-100">
                              <p className="text-sm md:text-base flex flex-wrap gap-2">
                                {course.hashtags.split(' ').map((tag, idx) => (
                                  <span 
                                    key={idx} 
                                    className="text-[#00809D] hover:text-cyan-600 transition-colors font-semibold hover:scale-110 inline-block cursor-pointer bg-white px-3 py-1 rounded-full border border-[#00809D]/20 hover:border-[#00809D] hover:shadow-md"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Final CTA Section */}
        <div className="relative overflow-hidden rounded-3xl animate-fadeIn">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44] via-[#00809D] to-cyan-600 animate-gradient"></div>
          
          {/* Animated particles in CTA */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-white rounded-full opacity-30 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 8}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="relative p-10 md:p-16 text-center">
            <Sparkles className="w-16 h-16 text-cyan-200 mx-auto mb-6 animate-spin-slow" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-pulse">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-xl md:text-2xl text-cyan-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Don't wait for the future — create it. Join thousands of professionals who are already building tomorrow's technology today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:6364053221"
                className="group bg-white text-[#00809D] px-10 py-5 rounded-full font-bold text-xl hover:bg-cyan-50 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 inline-flex items-center gap-3 hover:scale-110 animate-bounce"
              >
                <Phone className="w-6 h-6 group-hover:animate-spin" />
                Call: 6364053221
              </a>
              <a
                href="mailto:hrushikesh@b2techservices.in"
                className="group bg-green-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-600 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 inline-flex items-center gap-3 hover:scale-110 animate-bounce animation-delay-500"
              >
                <Mail className="w-6 h-6 group-hover:animate-spin" />
                Email Us
              </a>
            </div>
            
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              {[Rocket, Star, Sparkles, Zap].map((Icon, idx) => (
                <div
                  key={idx}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full animate-bounce"
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <Icon className="w-8 h-8 text-cyan-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -60px) scale(1.1); }
          50% { transform: translate(-30px, 30px) scale(0.9); }
          75% { transform: translate(60px, 60px) scale(1.05); }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-100px) translateX(50px);
            opacity: 0.5;
          }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blob {
          animation: blob 10s infinite;
          background-size: 400% 400%;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-slideInDown {
          animation: slideInDown 0.8s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}