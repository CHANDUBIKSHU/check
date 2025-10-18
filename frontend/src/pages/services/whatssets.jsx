import React from 'react'
import Whatset from "../../components/Promise/Whatset"
import Nav from "../../components/nav"
import Footer from '../../components/Footer';
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";
function Whatssets() {
  return (
    <div>
     <div>
       <Nav/>
     </div>
      <Whatset/>
        <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Whatssets