"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services-section">
      <div className="services-main">
        <div className="services-title">
          <h1>Get Our Complete Package of</h1>
          <h2>Services</h2>
        </div>

        <div className="services-card">
          <Link href="/services">
            <div className="card-row">
              <div className="card-title">
                <div className="card-icon">
                  <h2>SEO</h2>
                  <div className="icon">
                    <FaArrowRight />
                  </div>
                </div>
                <p>Improve Your Position In Search engines</p>
              </div>
              <div className="card-image">
                <img src="/img.png" alt="SEO Service" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
