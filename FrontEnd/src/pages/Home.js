import React from 'react'
import '../Styles/Home.css';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-page'>
      <header className='hero'>
        <h1>Track Your Projects in Real-Time</h1>
        <p>Stay on top of your projects by accessing detailed progress updates and ticket statuses</p>
        <div className='cta-buttons'>
          <Link to="/Login-SingUp" className='cta-button'>Login to View Your Projects</Link>
        </div>
      </header>

      <section className='how-it-works'>
        <h2>How it Works</h2>
        <ul>
          <li>1, Log in to your account</li>
          <li>2, Access detailed project tickets and progress</li>
          <li>3, Stay updated with real-time progress and milestones</li>
        </ul>
      </section>

      <section className='ticket-lookup'>
        <h2>Check Your Project Status</h2>
        <p>Enter your ticket number to view the latest updates on your project.</p>
        <form>
          <input type='text' placeholder='Enter Ticket Number' />
          <button type='submit'>Check Ticket Status</button>
        </form>
      </section>

      <section className='features'>
        <h2>Key Features</h2>
        <ul>
          <li>Real-time project updates</li>
          <li>Detailed ticket tracking</li>
          <li>Clear communication with your development team</li>
        </ul>
      </section>

      <section className='contact'>
        <h2>Get In Touch</h2>
        <p>Have any questions or need support? Contact us directly!</p>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />  
          <textarea placeholder='Your Message'></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Home