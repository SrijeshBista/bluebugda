import React from 'react'
import "@/scss/Services/services-page.scss";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import slug from './[slug]/page.js'
const servicesData =[
  {
    slug: "Website-Development",
    title:"Website Development",
    des:"Improve Your Position In Search engines",
    imgSrc:"./img.png",
  },
  {
    slug: "Mobile-App-Development",
    title:"Mobile App Development",
    des:"Improve Your Position In Search engines",
    imgSrc:"./img.png",
  },
  {
    slug: "Software-Developer",
    title:"Software Developer",
    des:"Improve Your Position In Search engines",
    imgSrc:"./img.png",
  },
  {
    slug: "UI-UX",
    title:"UI/UX",
    des:"Improve Your Position In Search engines",
    imgSrc:"./img.png",
  },
  {
    slug: "AI-Integration",
    title:"AI-Integration",
    des:"Improve Your Position In Search engines",
    imgSrc:"./img.png",
  },
  {
    slug: "System-Design",
    title:"System Design",
    des:"Improve Your Position In Search engines",
    imgSrc:"./img.png",
  },
 
 
]
const ServicePage = ()=> {

  return (
  <>
  
  <section id='services-banner'>
    <div className='servicesbanner-main padding container'>
      <div className='servicespage-title'>
        <h1>Our Services</h1>
      </div>
      <div className='servicespage-des'>
        <h3>What We Offer</h3>
        <p>We have successfully built task management systems, travel booking platforms, e-commerce websites, portfolio websites, call center management solutions, educational platforms, and enterprise software, ensuring seamless user experiences and robust performance.</p>
      </div>
      <div className='downbtn'>
        <p>Scroll down ↓</p>
      </div>
    </div>
  </section>

  <section id='services-page'>
    <div className='services-page-main container'>
      <div className='card-row'>
      {servicesData.map((service, index) => (
        <Link href={`/services/${service.slug}`} key={index} className="service-detail">
           
            <h2 className="service-title">{service.title} <span> <FaArrowRight/></span></h2>
            <p className="card-des">{service.des}</p>
            <img src={service.imgSrc}/>
        </Link>
      ))}
    </div>
    </div>
  </section>
  </>
  )
}

export default ServicePage;
