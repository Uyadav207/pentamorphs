import React from 'react'
import Home from './components/Home'
import Team from './components/Team'
import ContactForm from './components/ContactForm'
import Mission from './components/Mission'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import './utils/fontawesome'
import Header from './components/Header'

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Mission />
      <Team />
      <ContactForm />
    </>
  )
}

export default Dashboard
