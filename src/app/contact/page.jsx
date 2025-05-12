"use client";
import "@/app/contact/contact.css";
import Footer from "@/Components/Footer";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion-title");
    const toggleAccordion = (e) => {
      const item = e.target.parentElement;
      item.classList.toggle("active");
    };
    items.forEach((btn) => btn.addEventListener("click", toggleAccordion));

    // Cleanup function
    return () => {
      items.forEach((btn) => btn.removeEventListener("click", toggleAccordion));
    };
  }, []);
  return (
    <>
      {/* Naqvbar */}
      <div className="navbar">
        <div className="navsection">
          <img src="/logo.png" alt="Agrolla" className="logo" />
          <div className="navlinks">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About us</a>
            <a href="/contact" style={{ color: "#2E7D32" }}>
              Contact
            </a>
          </div>
          <button className="bt1">Get Quote</button>
        </div>
      </div>
      {/* Section1 */}
      <div className="section1">
        <h1>Contact Us</h1>
        <p className="title1">
          We're here to help! Reach out to us through any of the channels below
          and we'll get <br />
          back to you as soon as possible.
        </p>
      </div>
      {/* Section2 */}
      <div className="section2">
        <div className="contact">
          <div className="formDetail">
            <p className="formTitle">Send Us a Message</p>
            <form action="">
              <div className="name">
                <div className="fname">
                  <label htmlFor="" className="lable">
                    First Name
                  </label>{" "}
                  <br />
                  <input type="text" /> <br />
                </div>
                <div className="lname">
                  <label htmlFor="" className="lable">
                    Last Name
                  </label>{" "}
                  <br />
                  <input type="text" /> <br />
                </div>
              </div>
              <label htmlFor="" className="lable">
                Email Address
              </label>{" "}
              <br />
              <input type="text" /> <br />
              <label htmlFor="" className="lable">
                Phone Number
              </label>{" "}
              <br />
              <input type="text" /> <br />
              <label htmlFor="" className="lable">
                Subject
              </label>{" "}
              <br />
              <select name="" id="">
                <option value="">Select a subject</option>
                <option value="">Subject-1</option>
                <option value="">Subject-2</option>
              </select>
              <br />
              <label htmlFor="" className="lable">
                Message
              </label>{" "}
              <br />
              <textarea name="" id=""></textarea> <br />
              <input type="checkbox" />{" "}
              <label className="cbTitle">
                I agree to the processing of my personal data according to the
                privacy policy
              </label>{" "}
              <br />
              <button className="btn1">Send Message</button>
            </form>
          </div>
          <div className="addressDetail">
            <p className="formTitle">Contact Information</p>
            <div className="address">
              <div className="location">
                <img src="/location.svg" alt="" />
                <div className="add">
                  <p id="h5">Main Office</p>
                  <p id="h4">
                    BM Square-1, Rajlaxmi Park, <br />
                    Junagadh
                  </p>
                </div>
              </div>
              <div className="location">
                <img src="/call.svg" alt="" />
                <div className="add">
                  <p id="h5">Phone</p>
                  <p id="h4">
                    Main: +1 (555) 123-4567 <br /> Toll-free: 1-800-AGROLLA
                  </p>
                </div>
              </div>
              <div className="location">
                <img src="/clock.svg" alt="" />
                <div className="add">
                  <p id="h5">Business Hours</p>
                  <p id="h4">
                    Monday - Friday: 9:00 AM - 6:00 PM <br /> Saturday: 10:00 AM
                    - 2:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <p className="addTitle">Connect With Us</p>
              <div className="social">
                <img src="/facebook.svg" alt="" />
                <img src="/twitter.svg" alt="" />
                <img src="/linkedin.svg" alt="" />
                <img src="/instagram.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section3 */}
      <div className="section3">
        <p className="h2">Visit Our Office</p>
        <p className="h4">
          Find us at our main office location. We'd love to meet you in person
          and discuss how we can <br /> help with your agricultural needs.
        </p>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846816!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e2c5b1%3A0x4c8b8b6e8f8b8b8b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
            width="1504px"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* Section4  */}
      <div className="section4">
        <p className="h2">Frequently Asked Questions</p>
        <p className="h4">
          Find quick answers to common questions about contacting and working
          with us.
        </p>
        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-title">
              What is the typical response time for inquiries?
            </button>
            <div className="accordion-content">
              <p>
                We strive to respond to all inquiries within 24 business hours.
                For urgent matters, please call our main office directly.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-title">
              Do you offer on-site consultations?
            </button>
            <div className="accordion-content">
              <p>
                Yes, we provide on-site consultations for larger projects and
                implementations. Please contact our sales team to schedule a
                visit.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-title">
              How can I request a product demonstration?
            </button>
            <div className="accordion-content">
              <p>
                Product demonstrations can be scheduled through our sales team.
                Fill out the contact form above or call us directly to arrange a
                demo.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-title">
              What areas do you service?
            </button>
            <div className="accordion-content">
              <p>
                We provide services throughout the United States, with additional support available in
select international locations.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
    <div className="section5">
        <Footer/>
    </div>
    </>
  );
}
