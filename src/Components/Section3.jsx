import "../CSS/Section3.css";
export default function Section2() {
  return (
    <>
      <div className="container">
        <div className="colm">
          <div className="text">
            <div className="lable">
              <img src="/leaf.png" alt="" />
              100% ORGANIC
            </div>
            <p className="text1">Fresh From Farm</p>
            <p className="text2" style={{color:"#111827"}}>Healthy Produce For Every Home</p>
            <p className="text3">
              Discover nature's finest organic produce, carefully <br /> cultivated and
              harvested to bring the freshest, most <br /> nutritious food directly
              from our farms to your table.
            </p>
            <div className="btns">
              <button className="btn1">Shop Now</button>
              <button className="btn2">Learn More</button>
            </div>
          </div>
          <div className="img">
            <img src="/farmer.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
