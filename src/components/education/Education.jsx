import React from 'react'
import './education.css'
import {FaAward} from 'react-icons/fa'
import PEGA from '../../assets/pega.png'
import AZURE from '../../assets/azure.png'
import AWS from '../../assets/aws.png'
import BRUNEL from '../../assets/brunel.png'


const Education = () => {
  return (
    <section className='education'>
        <h5>My Qualifications</h5>
        <h2>Education</h2>

        <div className='container education__container'>
            <article className='certificate__card'>
                <img src={PEGA} alt="" />
                <h5>Pega Certified Senior System Architect</h5>
                <small>Issued Dec 2022</small>
            </article>
            <article className='certificate__card'>
                <img src={AZURE} alt="" />
                <h5>Microsoft: Azure Fundamentals</h5>
                <small>Issued Apr 2022</small>
            </article>
            <article className='certificate__card'>
                <img src={AWS} alt="" />
                <h5>AWS: Cloud Practitioner</h5>
                <small>Issued Mar 2022</small>
            </article>
            <article className='certificate__card'>
                <img src={BRUNEL} alt="" />
                <h5>Computer Science BSc</h5>
                <small>Issued Jun 2021</small>
            </article>
        </div>
    </section>
 
  )
}

export default Education;