"use-client";
import "@/CSS/Footer.css";
import { color } from "framer-motion";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="foot1">
            <img src="/footer-logo.png" alt="" />
            <p id="foot1-p">
              Transforming agriculture through <br />
              innovation and sustainable solutions for a <br />
              better tomorrow.
            </p>
            <li>
              <img src="/location.svg" alt="" />
              <span>BM Square-1, Rajlaxmi Park,Junagadh</span>
            </li>
            <li style={{ listStyle: "none" }}>
              <img src="/call.svg" alt="" />
              <span>+91 98765 43210</span>
            </li>
            <li style={{ listStyle: "none" }}>
              <img src="/mail.svg" alt="" />
              <span>info@agrolla.in</span>
            </li>
          </div>
          <div className="foot2">
            <li id="li-title">Quick Links</li>
            <ul style={{ listStyle: "none" }}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="foot3">
            <li id="li-title">Our Services</li>
            <ul style={{ listStyle: "none" }}>
              <li>Precision Farming</li>
              <li>Irrigation Solutions</li>
              <li>Organic Farming</li>
              <li>Crop Protection</li>
              <li>Farm Management</li>
            </ul>
          </div>
          <div className="foot4">
            <li id="li-title">Working Hours</li>
            <ul style={{ listStyle: "none" }}>
              <li>
                Monday - Friday:{" "}
                <span style={{ paddingLeft: "50px" }}>9:00 AM - 6:00 PM</span>
              </li>
              <li>
                Saturday:{" "}
                <span style={{ paddingLeft: "110px" }}>9:00 AM - 4:00 PM</span>
              </li>
              <li>
                Sunday:{" "}
                <span style={{ paddingLeft: "120px", color: "#4CAF50" }}>
                  Closed
                </span>
              </li>
            </ul>
            <li id="li-title">Follow Us</li>
            <div className="icons">
              <img src="/facebook.png" alt="" />
              <img src="/x.png" alt="" />
              <img src="/instagram.png" alt="" />
              <img src="/linkedin.png" alt="" />
            </div>
          </div>
        </div>
        <div id="footerhr">
          <p id="copy">© 2025 Agrolla. All rights reserved.</p>
          <p className="site">Privacy-Policy Terms-of-Service Sitemap</p>
        </div>
      </footer>
    </>
  );
}
