import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
{
  /* About page*/
}
import Companyphilosophy from "./pages/About/AboutUs";
import Corevalues from "./pages/About/OurValues";
import Founder from "./pages/About/Team";
import Growth from "./pages/About/FoundersVision";
{
  /* services page*/
}
import WeOfferServices from "./pages/services/WeOfferServices"
import Recruitmentservice from "./pages/services/Recruitmentservices";
import Resumeservices from "./pages/services/Resumeservices";
import SoftwareTraining from "./pages/services/softwaretrainingprograms";
import Ui from "./pages/services/Uiuxdesign";
import Whatssets from "./pages/services/whatssets";
import Course from "./pages/services/Course"
{
  /* backend coming routes*/
}
import Sendotp from "./backend/pages/sendotp";
import Dashboard from "./backend/pages/dashboard";
import ProtectedRoute from "./backend/protected/protectedroute";
import Scroll from "./scroll"

function App() {
  return (
    <div>
 
         <Scroll>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About Us" element={<Companyphilosophy />} />
          <Route path="/coreValues" element={<Corevalues />} />
          <Route path="/foundersVision" element={<Founder />} />
          <Route path="/growthJourney" element={<Growth />} />
          <Route path="/recruitmentService" element={<Recruitmentservice />} />
          <Route path="/resumeServices" element={<Resumeservices />} />
          <Route path="/services" element={<WeOfferServices />} />
          <Route path="/Courses" element={<Course />} />
          <Route path="/softwareTraining" element={<SoftwareTraining />} />
          <Route path="/uiUxDesignThinking" element={<Ui />} />
          <Route path="/whatSetsUsApart" element={<Whatssets />} />

          {/* */}
          <Route path="/sendotp" element={<Sendotp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        </Scroll>
    </div>
  );
}

export default App;
