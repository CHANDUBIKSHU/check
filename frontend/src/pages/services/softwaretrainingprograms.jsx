import React from 'react'
import Nav from "../../components/nav"
import Training from "../../components/Training/training"
import Footer from '../../components/Footer';
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";
function Softwaretrainingprograms() {
  return (
    <div>
      <Nav/>
      <Training/>
          <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Softwaretrainingprograms