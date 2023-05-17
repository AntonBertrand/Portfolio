import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/donutclicker.png'
import IMG2 from '../../assets/qrteach2.png'
import IMG3 from '../../assets/hoboarena.png'
import IMG4 from '../../assets/whatson.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Doughnut Clicker',
    desc:'Hobo Arena is a text-based roleplaying game with GUI inspired by the browser game HoboWars. You play as a hobo and can pick a fight against enemies for coins and experience, as well as the ability to scavenge the city for coins and items. Earned coins can be spent in the shop on healing apples and better weapons. You can submit your final score to the Highscores list in which other players will compete for the highest score.',
    github: 'https://google.com',
    demo: 'https://google.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'WhatsOn',
    desc: 'WhatsOn is an Android application targeted towards Brunel University students who lived on Campus or in the nearby area. The application allows these students to view all the events available in the area, as well as the ability to create their own events for other users to see. This allows them to take advantages of all the facilities available to them and keep them updated on what events are soon to take place, giving them a great University experience.',
    github: 'https://google.com',
    demo: 'https://google.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'QRTeach',
    desc:'QRTeach is an Android application designed to help parents and guardians of student’s complete homework efficiently. The user can register as a learner or teacher. Teachers are given the ability to create help sheets and generate a QR Code which can be printed out and put onto a homework sheet. Learners can scan a QR Code on a homework sheet using the app to be presented with the help sheet set by the teacher. Chat function allows learners and teachers to communicate.',
    github: 'https://google.com',
    demo: 'https://google.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'HoboArena',
    desc: 'Hobo Arena is a text-based roleplaying game with GUI inspired by the browser game HoboWars. You play as a hobo and can pick a fight against enemies for coins and experience, as well as the ability to scavenge the city for coins and items. Earned coins can be spent in the shop on healing apples and better weapons. You can submit your final score to the Highscores list in which other players will compete for the highest score.',
    github: 'https://google.com',
    demo: 'https://google.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, desc, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>{desc}</small>
    
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio;
