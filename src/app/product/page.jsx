"use-client";
import '@/app/product/product.css'
export default function page() {
  return (
    <>
      <div className="navbar">
        <div className="navsection">
          <img src="/logo.png" alt="Agrolla" className="logo" />
          <div className="navlinks">
            <a href="/">Home</a>
            <a href="/product"style={{ color: "#2E7D32" }}>Products</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact</a>
          </div>
          <button className="bt1">Get Quote</button>
        </div>
      </div>
    </>
  );
}
