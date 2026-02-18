import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  return (
    <div className="container">
      <h2>Handcrafted Collection</h2>
      <div className="products">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
