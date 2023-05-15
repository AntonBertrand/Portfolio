import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: "Lauren Briggs",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti necessitatibus inventore aut, dolores cupiditate reiciendis doloremque cumque totam sint eaque consequatur alias, quibusdam quia voluptatibus modi ab. Illum, nulla!",
  },
  {
    avatar: AVTR2,
    name: "Sam Phuckett",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti necessitatibus inventore aut, dolores cupiditate reiciendis doloremque cumque totam sint eaque consequatur alias, quibusdam quia voluptatibus modi ab. Illum, nulla!",
  },
  {
    avatar: AVTR3,
    name: "Jeffe Moralez",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti necessitatibus inventore aut, dolores cupiditate reiciendis doloremque cumque totam sint eaque consequatur alias, quibusdam quia voluptatibus modi ab. Illum, nulla!",
  },
  {
    avatar: AVTR4,
    name: "Nadia Sterling",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti necessitatibus inventore aut, dolores cupiditate reiciendis doloremque cumque totam sint eaque consequatur alias, quibusdam quia voluptatibus modi ab. Illum, nulla!",
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>


      {
        data.map(({avatar, name, review}, index) => {
          return (

            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="Client Avatar" />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>

          )
        
        })
      }
       
      </Swiper>
    </section>
  )
}

export default Testimonials;