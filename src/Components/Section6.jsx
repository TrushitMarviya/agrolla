import "@/CSS/Section6.css";
export default function Section6() {
  return (
    <div className="section2">
      <center>
        <div className="title">
          <hr className="line" />
          <h2 className="title-text">OUR GALLERY</h2>
          <hr className="line" />
        </div>
      </center>
      <h1>
      Capturing Agricultural<span style={{ color: "#2E7D32" }}>Excellence</span> 
      </h1>
      <h5>
      Experience the beauty and innovation of modern agriculture through our lens. Each
      image tells a story of dedication, technology, and sustainable farming practices.
      </h5>
    <div className="gallery1">
        <div className="sece1">
            <img src="/gal1.png" alt="" />
        </div>
        <div className="sece2">
            <img src="/gal2.png" alt="" id="im1"/>
            <img src="/gal3.png" alt="" id="im2" />
        </div>
        <div className="sece3">
            <img src="/gal4.png" alt="" />
        </div>
    </div>






    </div>
  );
}
