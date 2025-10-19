import React from 'react';
import { Link } from 'react-router-dom';

function Ourservices() {
  const recruitmentServices = [
    {
      title: "Permanent Staffing (Full-Time Hiring)",
      description: "We provide end-to-end recruitment solutions for permanent roles — sourcing, screening, and placing top-tier talent that aligns with your business goals and culture.",
    },
    {
      title: "Contract Staffing (Short-Term / Project-Based)",
      description: "Need agile talent for specific projects or short durations? Our contract staffing solutions offer flexibility and speed without compromising on quality.",
    },
    {
      title: "Executive & Leadership Hiring",
      description: "We specialize in placing CXOs, Directors, and senior leaders across industries. Our executive search process is discreet, strategic, and focused on long-term fit.",
    },
    {
      title: "Lateral Hiring (Mid to Senior-Level Professionals)",
      description: "We fill critical roles with experienced professionals who are ready to make an immediate impact — especially in niche and technical areas.",
    },
    {
      title: "Project-Based Hiring",
      description: "We align recruitment delivery based on your project timelines, resource needs, and growth phase — offering scalable hiring support when you need it most.",
    },
    {
      title: "Hands-On Recruitment & Headhunting",
      description: "Our recruiters work closely with your internal team, offering dedicated support to speed up your hiring lifecycle — especially for urgent and hard-to-fill roles.",
    },
  ];

  const trainingServices = [
    {
      title: "Technical Training Programs",
      description: 
      <>Upskill your workforce with corporate, group, or college-level training in high-demand technologies such as:
          <br />• AI / Gen AI, Data Science, ML
          <br />• Embedded Systems, 4G / 5G Protocols
          <br />• Salesforce, Drupal, DevOps, Python, .NET, Java
          <br />• UI / UX, Cloud (AWS, Azure), Cybersecurity & more
          </>
    },
    {
      title: "Resume Preparation & Career Branding",
      description: "We help professionals stand out in competitive job markets by crafting impactful, ATS-optimized resumes and building strong personal brands..Enhance your professional profile with well-crafted resumes and strong personal branding.",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1f44]">
              Our Core Offerings
            </h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              We provide end-to-end recruitment solutions and talent development programs to help organizations and professionals grow.
            </p>
          </div>

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

            {/* Recruitment Solutions */}
            <div className="w-full">
              <h2 className="text-xl font-semibold flex items-center" style={{ marginTop: '-60px' }}>
                🔹 Recruitment Solutions
              </h2>
            </div>

            {recruitmentServices.map((item) => (
              <div key={item.title} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex flex-col p-4 h-full">
                  <div className="flex items-center mb-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-[#00809D] w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">{item.title}</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-10">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Talent Development & Training */}
            <div className="w-full">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                🔹 Talent Development & Training
              </h2>
            </div>

            {trainingServices.map((item) => (
              <div key={item.title} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 rounded flex flex-col p-4 h-full">
                  <div className="flex items-center mb-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      className="text-[#00809D] w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">{item.title}</span>
                  </div>
                  <p className="text-gray-600 text-sm ml-10">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <button className="flex items-center mx-auto mt-16 text-white bg-[#00809D] border-0 py-2 px-8 focus:outline-none hover:bg-[#0a1f44] rounded-full text-lg">
            <Link to="/contact">📞 Contact Us</Link>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Ourservices;
