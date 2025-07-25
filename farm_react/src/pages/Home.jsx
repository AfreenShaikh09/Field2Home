import ProdCard from "../components/ProdCard";
import "../css/Home.css";
import heroImg from "/images/bgimg1.jpg"; // replace with your actual image

function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-left">
          <h1>
            From Fields <br />
            to Families, <br />
            <span>Field2Home</span>
          </h1>
          <p>Fresh produce, directly from farmers to your doorstep.</p>
        </div>
        <div className="hero-right">
          <img src={heroImg} alt="Hero" />
        </div>
      </div>

      <div className="products-section">
        <main>
          <ProdCard image="/images/prods/prod1.jpeg" name="Product 1" price="200" description="agashns" />
          <ProdCard image="/images/prods/prod2.jpg" name="Product 2" price="200" description="agashns" />
          <ProdCard image="/images/prods/prod3.jpg" name="Product 3" price="200" description="agashns" />
          <ProdCard image="/images/prods/prod4.jpeg" name="Product 4" price="200" description="agashns" />
          <ProdCard image="/images/prods/prod5.jpeg" name="Product 5" price="200" description="agashns" />
          <ProdCard image="/images/prods/prod6.jpeg" name="Product 6" price="200" description="agashns" />
          <ProdCard image="/images/prods/prod7.jpg" name="Product 7" price="200" description="agashns" />
          <ProdCard image="/images/prods/prod8.jpeg" name="Product 8" price="200" description="agashns" />
        </main>
      </div>
    </>
  );
}

export default Home;
