import "@/CSS/Section5.css";
Section5
export default function Section5() {
  return (
    <div className="section1">
      <center>
        <div className="title">
          <hr className="line" />
          <h2 className="title-text">OUR CERTIFICATION</h2>
          <hr className="line" />
        </div>
      </center>
      <h1>
        Quality <span style={{ color: "#2E7D32" }}>Certifications</span> &
        Standards
      </h1>
      <h5>
        Our commitment to excellence is backed by international certifications
        and quality standards, ensuring the highest level of product quality and
        safety.
      </h5>
      <div className="company">
        <img src="/cer1.png" alt=""  className="cer"/>
        <img src="/cer2.png" alt=""  className="cer"/>
        <img src="/cer3.png" alt=""  className="cer"/>
        <img src="/cer4.png" alt=""  className="cer"/>
        <img src="/cer5.png" alt=""  className="cer"/>
      </div>
    </div>
  );
}
