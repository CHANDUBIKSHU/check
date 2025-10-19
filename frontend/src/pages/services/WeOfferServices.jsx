import React from 'react'
import WeOffer from "../../components/WeOffer"
import Navv from "../../components/nav"
import Footer from '../../components/Footer';
import WhatsAppButton from "../../components/whatsapp";
import ChatWidget from "../../components/chatwidget";
function WeOfferServices() {
  return (
    <div>
    <Navv/>
     <WeOffer/>
      <ChatWidget />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default WeOfferServices