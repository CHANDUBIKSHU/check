import React from 'react'
import Resume from "../../components/Resume/Resume"
import Nav from "../../components/nav"
import Footer from '../../components/Footer';
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";
function Resumeservices() {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <Resume/>
      <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Resumeservices