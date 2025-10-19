import React from 'react'
import Nav from "../../components/nav"
import  Courses from "../../components/Courses"
import Footer from '../../components/Footer';
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";
function Course() {
  return (
    <div>
      <Nav/>
      <Courses/>
          <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Course