import React from 'react'
import UI from "../../components/UI/ux"
import Navv from "../../components/nav"
import Footer from '../../components/Footer';
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";
function Uiuxdesign() {
  return (
    <div>
    <Navv/>
     <UI/>
      <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Uiuxdesign