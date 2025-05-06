import Head from 'next/head';
import '../styles/Home.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agrolla Impex</title>
      </Head>
      <div className="hero-container">
        <nav className="navbar">
          <div className="logo">AGROLLA <span>IMPEX</span></div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Products</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
          <button className="quote-btn">Get Quote</button>
        </nav>

        <div className="hero-content">
          <div className="sky-elements">
            <img src="/images/sun.png" className="sun" alt="sun" />
            <img src="/images/cloud.png" className="cloud cloud1" alt="cloud" />
            <img src="/images/cloud.png" className="cloud cloud2" alt="cloud" />
          </div>
          <h1>
            <span className="highlight">Rev</span>olutionizing <br />
            <span className="highlight">Agriculture</span>
          </h1>
          <p>
            Agrolla delivers cutting-edge agricultural solutions that maximize yield, minimize environmental impact,
            and transform farming practices for a sustainable future.
          </p>
          <div className="btn-group">
            <button className="explore">Explore Services</button>
            <button className="contact">Contact Us</button>
          </div>
          <div className="ground-scene">
            <img src="/images/windmill.png" className="windmill" alt="windmill" />
            <img src="/images/farmer.png" className="farmer" alt="farmer" />
            <img src="/images/tractor.png" className="tractor" alt="tractor" />
          </div>
        </div>
      </div>
    </>
  );
}
