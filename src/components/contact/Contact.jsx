import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {TfiNotepad} from 'react-icons/tfi'
import {BsLinkedin} from 'react-icons/bs'
import CV from '../../assets/cv.pdf'
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("xrgvdqee");
  if (state.succeeded) {
      return <p>Message Sent - I will reply back shortly!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text" 
        name="name"
        placeholder='Enter Your Name' required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Enter your Email' required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Enter Your Message' required
        rows = "7"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className='btn btn-primary' disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}


 const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>antonbertrand@hotmail.com</h5>
            <a href="mailto:antonbertrand@hotmail.com" target='_blank'>Send an email</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/anton-bertrand/" target='_blank'>Connect with me</a>
          </article>

          <article className='contact__option'>
            <TfiNotepad className='contact__option-icon'/>
            <h4>CV</h4>
            <a href={CV} download>Download</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
          <ContactForm/>
      </div>
    </section>
  )
}

export default Contact;