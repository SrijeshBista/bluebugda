"use client";

import { useParams } from "next/navigation";
import servicespagescss from '../../../scss/Services/services-page.scss';


const serviceData = {
  "Website-Development":{
    slug: "Website-Development",
    imgSrc:"../img.png",
    title:"Website Development",
    des:"When building modern web applications, frameworks like Next.js offer powerful tools for handling dynamic routes — essential for creating pages like blog posts, product detail views, or, in this case, service pages. However, as with any framework, understanding how these tools work under the hood is crucial for avoiding common pitfalls that can break an application. In today's digital world, two important careers in technology are software development and web development. Both roles involve writing code and building programs, but they focus on different areas and use different tools and skills.While both software developers and web developers write code and solve problems, their focus areas are different. Software developers might work on offline applications or system software, while web developers focus more on online platforms and user experiences on the internet.",
  },
  "Mobile-App-Development":{

    slug: "Mobile-App-Development",
    title:"Mobile App Development",
    imgSrc:"../img.png",
    des:"We develop native and cross-platform mobile applications that deliver smooth performance, high responsiveness, and engaging user experiences across iOS and Android devices. By leveraging modern frameworks like Swift and Kotlin for native development and React Native or Flutter for cross-platform solutions, we ensure seamless functionality, optimized performance, and reduced development costs. Our approach focuses on user-centric design, ensuring intuitive navigation, visually appealing interfaces, and frictionless interactions that enhance engagement and retention. We integrate powerful features such as real-time notifications, secure authentication, cloud synchronization, and offline access to provide a seamless experience regardless of network conditions. Security is a top priority, and we implement advanced measures such as end-to-end encryption, multi-factor authentication, and compliance with industry standards to safeguard user data. Our team follows agile development methodologies, enabling rapid prototyping, iterative testing, and continuous optimization to meet evolving business needs. Additionally, we focus on performance enhancements, including efficient memory management, optimized API calls, and streamlined code execution, ensuring apps run smoothly without lag or crashes. Whether building a consumer-facing app, an enterprise solution, or an innovative digital product, we provide end-to-end support, from concept and development to deployment and post-launch maintenance. By combining technical excellence with strategic insights, we help businesses transform their ideas into high-quality mobile applications that drive growth, customer engagement, and competitive advantage.",
  },
  "Software-Developer":{
    slug: "Software-Developer",
    title:"Software Development",
    des:"When building modern web applications, frameworks like Next.js offer powerful tools for handling dynamic routes — essential for creating pages like blog posts, product detail views, or, in this case, service pages. However, as with any framework, understanding how these tools work under the hood is crucial for avoiding common pitfalls that can break an application. In today's digital world, two important careers in technology are software development and web development. Both roles involve writing code and building programs, but they focus on different areas and use different tools and skills.While both software developers and web developers write code and solve problems, their focus areas are different. Software developers might work on offline applications or system software, while web developers focus more on online platforms and user experiences on the internet.",
    imgSrc:"../img.png",
  },
  "UI-UX":{
    slug: "UI-UX",
    title:"UI/UX",
    imgSrc:"../img.png",
    des:"We create visually appealing and user-friendly designs that enhance customer engagement and usability. Our design process includes user research, wireframing, prototyping, and usability testing to ensure an intuitive user experience. By leveraging the latest design trends and tools, we craft interfaces that are not only aesthetically pleasing but also enhance user satisfaction and conversion rates, making your digital products more impactful. We focus on accessibility, ensuring inclusivity for all users. Through iterative feedback and A/B testing, we fine-tune designs to optimize navigation, interactivity, and responsiveness across various platforms and devices.",
  },
  "AI-Integration":{
    slug: "AI-Integration",
    title:"AI Integration",
    imgSrc:"../img.png",
    des:"We leverage artificial intelligence to automate workflows, enhance decision-making, and improve business efficiency by integrating cutting-edge AI technologies into various operational processes. Our AI solutions encompass machine learning, natural language processing, predictive analytics, and computer vision, enabling businesses to optimize performance, reduce manual tasks, and gain valuable insights from vast amounts of data. Through intelligent automation, we streamline repetitive tasks such as data entry, customer support, and process management, allowing organizations to focus on high-value activities. Our AI-powered analytics tools process real-time and historical data to identify trends, forecast outcomes, and support data-driven decision-making, leading to better strategic planning and operational agility. By implementing AI-driven chatbots and virtual assistants, we enhance customer interactions, ensuring personalized and efficient responses to inquiries. Additionally, our AI-driven recommendation engines help businesses improve user engagement, increase conversions, and deliver tailored experiences based on customer behavior. Security and compliance are at the forefront of our AI integration services, as we implement advanced algorithms for fraud detection, anomaly recognition, and risk assessment, ensuring data integrity and regulatory adherence. Our scalable AI models seamlessly integrate with existing software systems, cloud platforms, and IoT devices, enabling businesses to enhance efficiency and drive innovation without disrupting current operations. Whether you aim to automate routine processes, optimize decision-making, or gain actionable insights, our AI integration solutions empower organizations to unlock new levels of productivity and competitiveness in an increasingly digital world.",
  },
  "System-Design":{
    slug: "System-Design",
    title:"System Design",
    imgSrc:"../img.png",
    des:"We build robust system architectures by designing well-structured databases, efficient APIs, and scalable microservices that ensure high performance, security, and flexibility. Our approach begins with database optimization, where we select the best relational or non-relational databases based on business needs, ensuring seamless data storage, retrieval, and integrity. We then develop efficient APIs that facilitate smooth communication between system components, leveraging RESTful and GraphQL architectures for enhanced interoperability. Security measures such as authentication, encryption, and role-based access controls are integrated at every level to protect sensitive data. Additionally, we implement a microservices-based architecture that enhances modularity and scalability, allowing different services to operate independently while maintaining seamless connectivity. This approach reduces downtime, improves fault tolerance, and simplifies system maintenance. By incorporating best practices in cloud computing, caching mechanisms, and load balancing, we ensure that the system remains responsive even under high traffic conditions. Our system design strategy focuses on future-proofing solutions, enabling businesses to scale and adapt effortlessly as technology evolves.",
  },
}
const Serviceprop = () => {
  const { slug } = useParams();
  const service = serviceData[slug];
  return (
    <>
    <section id="services-detail-page"> 
      <div className="service-detail-page container">
        <div className="service-header">
        <img src={service.imgSrc}/>
          <h1>{service.title}</h1>
        </div>
        <div className="service-content">
          <p>{service.des}</p>
        </div>
      </div>
    </section>  
    </>
  )
}

export default Serviceprop ;