import React from "react";
import { Link } from "react-router-dom";

// Import all images from src/AboutImg
import webImg from "../../../public/AboutImg/web.jpg";
import aiImg from "../../../public/AboutImg/AI.jpg";
import productImg from "../../../public/AboutImg/product.jpg";
import mobileImg from "../../../public/AboutImg/mobile.jpg";
import uxImg from "../../../public/AboutImg/UX.jpg";
import dataImg from "../../../public/AboutImg/data.jpg";
import cloudImg from "../../../public/AboutImg/cloud.avif";
import securityImg from "../../../public/AboutImg/security.jpg";
import digitalImg from "../../../public/AboutImg/digital.jpg";

const LiveProjectsSection = () => {
  const features = [
    {
      title: "Web Development",
      img: webImg,
      alt: "Web Development",
      description:
        "Design and build real-world websites using HTML, CSS, JavaScript, React, and powerful backend technologies like Node.js or Spring Boot.",
    },
    {
      title: "AI/ML Projects",
      img: aiImg,
      alt: "AI/ML Projects",
      description:
        "Develop smart applications using Python, machine learning algorithms, and real-world datasets with expert mentorship.",
    },
    {
      title: "Product Management",
      img: productImg,
      alt: "Product Management",
      description:
        "Learn how to define product vision, write user stories, manage backlogs, and collaborate with cross-functional teams using agile methodologies.",
    },
    {
      title: "Mobile App Development",
      img: mobileImg,
      alt: "Mobile App Development",
      description:
        "Build Android and iOS apps using Flutter, React Native, or Kotlin, and learn how to publish them on the Play Store.",
    },
    {
      title: "UI/UX Design",
      img: uxImg,
      alt: "UI/UX Design",
      description:
        "Master design thinking, wireframing, and prototyping using tools like Figma and Adobe XD to create intuitive user experiences.",
    },
    {
      title: "Data Science",
      img: dataImg,
      alt: "Data Science",
      description:
        "Analyze data, create visualizations, and build predictive models using Python, Pandas, Matplotlib, and Scikit-learn.",
    },
    {
      title: "Cloud & DevOps",
      img: cloudImg,
      alt: "Cloud & DevOps",
      description:
        "Deploy and manage applications on cloud platforms like AWS, Azure, or GCP using Docker, Kubernetes, and CI/CD pipelines.",
    },
    {
      title: "Cybersecurity",
      img: securityImg,
      alt: "Cybersecurity",
      description:
        "Understand ethical hacking, penetration testing, and network security to protect applications from real-world threats.",
    },
    {
      title: "Digital Marketing",
      img: digitalImg,
      alt: "Digital Marketing",
      description:
        "Plan and execute campaigns using SEO, social media, Google Ads, and analytics tools to grow brand visibility and engagement.",
    },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1f44]">
            Industries & Domains We Serve
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-[#00809D]">
            Get hands-on experience by building real-world applications with guidance from industry experts. Learn by doing, not just watching.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-blue-950 inline-flex" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10 flex flex-col items-center text-center"
            >
              <Link to="/Expertise" className="mb-5">
                <div className="w-24 h-24 mb-5">
                  <img
                    src={feature.img}
                    alt={feature.alt}
                    className="rounded-full object-cover w-full h-full border border-indigo-200"
                  />
                </div>
              </Link>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                {feature.title}
              </h2>
              <p className="leading-relaxed text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/Expertise"
            className="text-white bg-blue-900 hover:bg-blue-800 px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            View More <span className="text-xl">{">>"}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LiveProjectsSection;
