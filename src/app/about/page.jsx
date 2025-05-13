import "@/app/about/about.css";
export default function About() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="navsection">
          <img src="/logo.png" alt="Agrolla" className="logo" />
          <div className="navlinks">
            <a href="/">Home</a>
            <a href="/product">Products</a>
            <a href="/about" style={{ color: "#2E7D32" }}>
              About us
            </a>
            <a href="/contact">Contact</a>
          </div>
          <button className="bt1">Get Quote</button>
        </div>
      </div>
      {/* Hero Section  */}
      <div className="herosection">
        <div className="titles">
          <p className="h1">Nurturing Quality, Cultivating Trust</p>
          <p className="h6">
            Discover the story behind Agrolla Impex, a distinguished One Star
            Export House and leading manufacturer of premium agricultural
            products.
          </p>
          <div className="btns">
            <button className="btn1">Our Story</button>
            <button className="btn2">Contact Us</button>
          </div>
        </div>
      </div>
      {/* section1  */}
      <div className="section1">
        <div className="who">
          <p className="title">Who We Are</p>
          <p className="semititle">
            Agrolla Impex is a distinguished One Star Export House and a leading
            manufacturer and exporter of peanuts, oilseeds, grains, and pulses.
          </p>
          <div className="detail">
            <div className="desc">
              <p className="description">
                Headquartered in Gujarat, India, we take immense pride in our
                fully integrated operations, ensuring uncompromised quality,
                consistency, and reliability in every shipment.
              </p>
              <p className="description">
                Our strategic location allows us to stay directly connected with
                farmers, enabling real-time communication and strict quality
                oversight right from the cultivation phase. This hands-on
                approach ensures that our products meet stringent global food
                safety and quality standards, making us a preferred supplier
                across international markets.
              </p>
              <div className="quality">
                <div className="quality1">
                  <img src="/state.svg" alt="" />
                  <div className="txt">
                    <p className="tit">State-of-the-Art Processing</p>
                    <p className="des">
                      Equipped with cutting-edge technology to maintain purity,
                      freshness, and nutritional value.
                    </p>
                  </div>
                </div>
                <div className="quality1">
                  <img src="/quality.svg" alt="" />
                  <div className="txt">
                    <p className="tit">Quality Control</p>
                    <p className="des">
                      Every batch undergoes rigorous testing to meet the highest
                      international benchmarks.
                    </p>
                  </div>
                </div>
                <div className="quality1">
                  <img src="/sustain.svg" alt="" />
                  <div className="txt">
                    <p className="tit">Sustainable Sourcing</p>
                    <p className="des">
                      Partnering with trusted farmers to maintain transparency
                      and environmental responsibility.
                    </p>
                  </div>
                </div>
                <div className="quality1">
                  <img src="/global.svg" alt="" />
                  <div className="txt">
                    <p className="tit">Global Distribution</p>
                    <p className="des">
                      Serving bulk buyers, food manufacturers, wholesalers, and
                      retailers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="/aboutSection1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* section2  */}
      <div className="section2">
        <div className="mission">
          <div className="mission1">
            <img src="/mission.svg" alt="" className="missionImg" />
            <p className="missionTitle">Our Mission</p>
            <ul>
              <li>
                <p className="listTitle">Uncompromised Quality</p>
                <p className="listDesc">Uncompromised Quality</p>
              </li>
              <li>
                <p className="listTitle">Expanding Global Reach</p>
                <p className="listDesc">
                  Strengthening our presence in key international markets with
                  seamless trade operations.
                </p>
              </li>
              <li>
                <p className="listTitle">Sustainability & Ethical Sourcing</p>
                <p className="listDesc">
                  Empowering farmers and promoting environmentally responsible
                  agricultural practices.
                </p>
              </li>
              <li>
                <p className="listTitle">Innovation & Growth</p>
                <p className="listDesc">
                  Investing in modern technology and continuous improvement to
                  adapt to evolving market needs.
                </p>
              </li>
              <li>
                <p className="listTitle">Client Success</p>
                <p className="listDesc">
                  Building long-term partnerships by offering customized
                  solutions and exceptional service.
                </p>
              </li>
            </ul>
          </div>
          <div className="mission1">
            <img src="/vision.svg" alt="" className="missionImg" />
            <p className="missionTitle">Our Vision</p>
            <p className="visionTitle">
              To be a globally recognized leader in agro exports, setting
              industry benchmarks in quality, innovation, and sustainable trade
              practices.
            </p>
            <img src="/visionimg.jpg" alt="" className="visionImg" />
            <p className="visionsentence">
              "At Agrolla Impex, we don't just export agro products—we deliver
              trust, excellence, and a commitment to quality in every shipment."
            </p>
          </div>
        </div>
      </div>
      {/* Section3  */}
      <div className="section3">
        <div className="values">
          <p className="title">Our Values</p>
          <p className="semititle">
            At Agrolla Impex, our foundation is built on principles that define
            our commitment to excellence, integrity, and customer satisfaction.{" "}
          </p>
          <div className="valueContainer">
            <div className="value1">
              <img src="/uncompromie.svg" alt="" className="valueImg" />
              <p className="valueTitle">Uncompromising Quality</p>
              <p className="valueDesc">
                We adhere to the strictest international food safety standards,
                ensuring that every product we supply is pure, fresh, and meets
                global regulatory requirements.
              </p>
            </div>
            <div className="value1">
              <img src="/integrety.svg" alt="" className="valueImg" />
              <p className="valueTitle">Integrity & Transparency</p>
              <p className="valueDesc">
                We believe in honest business practices, maintaining full
                transparency in our sourcing, processing, and export operations.
                Our clients trust us for ethical dealings and fair trade.
              </p>
            </div>
            <div className="value1">
              <img src="/centric.svg" alt="" className="valueImg" />
              <p className="valueTitle">Farmer-Centric Approach</p>
              <p className="valueDesc">
                Our close collaboration with farmers ensures fair compensation
                and access to best agricultural practices. We maintain
                traceability and sustainability from farm to market.
              </p>
            </div>
            <div className="value1">
              <img src="/innovation.svg" alt="" className="valueImg" />
              <p className="valueTitle">Innovation & Excellence</p>
              <p className="valueDesc">
                We continuously invest in advanced processing technology and
                innovative techniques to enhance product quality and efficiency,
                meeting the dynamic needs of the global agro-market.
              </p>
            </div>
            <div className="value1">
              <img src="/customer.svg" alt="" className="valueImg" />
              <p className="valueTitle">Customer Commitment</p>
              <p className="valueDesc">
                Customer satisfaction is at the heart of everything we do. We
                provide tailored solutions, timely deliveries, and unmatched
                service quality, building long-term partnerships.
              </p>
            </div>
            <div className="value1">
              <img src="/Perspective.svg" alt="" className="valueImg" />
              <p className="valueTitle">Global Perspective</p>
              <p className="valueDesc">
                With an international outlook, we understand diverse market
                needs and cultural preferences, adapting our products and
                services to meet global demands while maintaining local
                relevance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
