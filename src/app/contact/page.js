"use client";
import { IoChatbubbleOutline, IoLocationOutline } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { AiOutlineX } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const ContactPage = () => {
  return (
    <section id="contact-page">
      <div className="contact-page-main container">
        <div className="contact-title">
          <h1>Contact our team</h1>
          <p>
            Got any question about the product or scaling on our platform? We&apos;re here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
          </p>
        </div>

        <div className="form-section">
          <div className="form-right">
            <form>
              <div className="first-sec">
                <div className="first-row">
                  <label>First Name</label>
                  <br />
                  <input type="text" placeholder="Ritik" />
                </div>
                <div className="first-row">
                  <label>Last Name</label>
                  <br />
                  <input type="text" placeholder="Shahi" />
                </div>
              </div>

              <div className="form-email">
                <label>Email</label>
                <br />
                <input type="email" placeholder="ritikshahi354@gmail.com" />
              </div>

              <div className="form-number">
                <label>Phone Number</label>
                <br />
                <input type="tel" placeholder="+977-9765982638" />
              </div>

              <div className="form-message">
                <label>Message</label>
                <br />
                <textarea placeholder="Any Message" />
              </div>

              <div className="form-service">
                <h2>Services</h2>
                <div className="service-content">
                  <div className="content-right">
                    <label>
                      <input type="radio" name="service" value="Website Design" />
                      Website Design
                    </label>
                    <br />
                    <label>
                      <input type="radio" name="service" value="UX Design" />
                      UX Design
                    </label>
                    <br />
                    <label>
                      <input type="radio" name="service" value="User Research" />
                      User Research
                    </label>
                    <br />
                  </div>

                  <div className="content-left">
                    <label>
                      <input type="radio" name="service" value="Content Creation" />
                      Content Creation
                    </label>
                    <br />
                    <label>
                      <input type="radio" name="service" value="Strategy &amp; Consulting" />
                      Strategy & Consulting
                    </label>
                    <br />
                    <label>
                      <input type="radio" name="service" value="Other" />
                      Other
                    </label>
                    <br />
                  </div>
                </div>

                <div className="service-btn">
                  <button type="submit">Send message</button>
                </div>
              </div>
            </form>
          </div>

          <div className="form-left">
            <h2>Chat with us</h2>
            <p>Speak to our friendly team via live chat.</p>

            <div className="left-icon">
              <IoChatbubbleOutline /> Start a live chat
              <br />
              <SiMinutemailer /> Shoot us an email
              <br />
              <AiOutlineX /> Message us on X
            </div>

            <div className="call-us">
              <h2>Call us</h2>
              <p>Call our team Mon-Fri from 10am to 5pm.</p>
            </div>

            <div className="left-icon icons">
              <FiPhoneCall /> 01-4274809
            </div>

            <div className="visit">
              <h2>Visit us</h2>
              <p>Chat to us in person at our HQ.</p>
            </div>

            <div className="left-icon icons">
              <IoLocationOutline /> Akashedhara, Kapan, Nepal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
