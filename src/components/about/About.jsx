import React from 'react'
import './about.css'
import ME from '../../assets/antonjb-bg2.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Hard working</h5>
              <small>2 Years Working Experience, Bachelors Degree & 5 Official Certifications</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Team Player</h5>
              <small>Strong verbal/written communication and teamwork skills</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Versatile</h5>
              <small>Experience working on Frontend, Backend and Dev Ops</small>
            </article>
          </div>

          <p>I am a full-stack engineer based in Northwest London with a bachelor’s in computer science. Since graduating, through working at ATOS and KPMG I’ve been able to learn new skills and enhance my existing skills through hands-on experience with new tools and techniques. I am very eager to work with other development platforms and are more than capable enough of picking up new languages and techniques in a timely manner.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About;