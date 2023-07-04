import React from 'react'
import './portfolio.css'
import projectData from '../projectData'
import { Link } from 'react-router-dom'

const Portfolio = () => {

  const data = projectData.data.slice(0, 4);

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">

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
              { demo && <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>}
              </div>
            </article>
            )
          })
        }        
      </div>

      <div className="all__projects">
        <Link to="/projects" className="all__projects__btn">View All Projects</Link>
      </div>

    </section>
  )
}

export default Portfolio;
