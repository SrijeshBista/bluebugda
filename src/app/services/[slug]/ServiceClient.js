"use client"; // This makes it a client component

import "../../../scss/Services/services-page.scss";

export default function ServiceClient({ service }) {
  return (
    <section id="services-detail-page">
      <div className="service-detail-page container">
        <div className="service-header">
          <img src={service.imgSrc} alt={service.title} />
          <h1>{service.title}</h1>
        </div>
        <div className="service-content">
          <p>{service.des}</p>
        </div>
      </div>
    </section>
  );
}
