import ProdCard from "../components/ProdCard";
import "../css/Products.css";

function Products(){
  return (
    <>
    <main>
      <div className="products-intro">
        <h1 className="section-title">Our Products</h1>
        <h3 className="section-subtitle">Explore our range of fresh produce sourced directly from farmers.</h3>
        </div>
        <ProdCard image="/images/prods/prod1.jpeg" name="Product 1" price="200" description="agashns" /> 
        <ProdCard image="/images/prods/prod2.jpg" name="Product 2" price="200" description="agashns" />
        <ProdCard image="/images/prods/prod3.jpg" name="Product 3" price="200" description="agashns" /> 
        <ProdCard image="/images/prods/prod4.jpeg" name="Product 4" price="200" description="agashns" />
        <ProdCard image="/images/prods/prod5.jpeg" name="Product 5" price="200" description="agashns" /> 
        <ProdCard image="/images/prods/prod6.jpeg" name="Product 6" price="200" description="agashns" />
        <ProdCard image="/images/prods/prod7.jpg" name="Product 7" price="200" description="agashns" /> 
        <ProdCard image="/images/prods/prod8.jpeg" name="Product 8" price="200" description="agashns" /> 
      </main>
    </>
  );
};

export default Products;
