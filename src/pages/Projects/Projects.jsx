import React, { useState, useEffect } from 'react'
import projectData from '../../components/projectData'
import './projects.css'

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
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

        <ul className="project__categories">
            <li onClick={() => setCategory("all")}>All Projects</li>
            <li onClick={() => setCategory("fs")}>Full Stack</li>
            <li onClick={() => fetchProjects("f")}>Frontend</li>
            <li onClick={() => setCategory("b")}>Backend</li>
        </ul>

    <div className="projects__container">

      {
        projectList.map((project, i) => {

          return (
            <article key={project.id} className="projects__item" >
            <h3>{project.title}</h3>  
            <div className="projects__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="projects__item-cta">
            <a href={project.github} className='btn' target='_blank'>Github</a>
            <a href={project.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
          )
        })
      }
      
    </div>
  </section>
  )
}
