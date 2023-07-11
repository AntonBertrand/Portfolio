import React, { useState, useEffect } from 'react'
import projectData from '../../components/projectData'
import './projects.css'
import { Link } from 'react-router-dom';
import {AiOutlineHome} from 'react-icons/ai'

export const Projects = () => {

    const [selectedCategory, setCategory] = useState("all");
    const [projectList, setProjectList] = useState([]);
    const fullList = projectData.data;

    const fetchProjects = (category) => {
      setCategory(category);
    }

    
    useEffect(() => {      

      var tempArray = [];
          
        for (var i = 0; i < fullList.length ; i++) {

          if (selectedCategory == "all") {
            tempArray = fullList;
          } else {

            if (fullList[i].category == selectedCategory) {
              tempArray.push(fullList[i])
            } 

          }
        }

        setProjectList(tempArray);

    }, [selectedCategory])

  return (
    <section id='projects'>
    <h5>All Of My Personal Projects</h5>
    <h2>Portfolio</h2>

        <ul className="project__categories">
            <Link to="/" >
              <li className='desktop-home'>Back To Home</li>
              <div className="mobile-home-bg"><AiOutlineHome className='mobile-home'/></div>
             </Link>
            <li onClick={() => setCategory("all")}>All Projects</li>
            <li onClick={() => setCategory("Full Stack")}>Full Stack</li>
            <li onClick={() => fetchProjects("Frontend")}>Frontend</li>
            <li onClick={() => setCategory("Backend")}>Backend</li>
        </ul>

    <div className="projects__container">

      {
        projectList.map((project, i) => {

          return (
            <article key={project.id} className="projects__item" >
              <div className="project__header">
              <h3>{project.title}</h3>  
              <div className="project__category">{project.category}</div>
              </div>
            <div className="projects__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project__tech__container">
              { project.tech && project.tech.map((item) => <div className='project__tech'> {item} </div>)}
            </div>
            <small>{project.desc}</small>
            <div className="projects__item-cta">
            <a href={project.github} className='project__button' target='_blank'>Github</a>
            {project.demo && <a href={project.demo} className='project__button' target='_blank'>Live Demo</a>}
            </div>
          </article>
          )
        })
      }
      
    </div>
  </section>
  )
}
