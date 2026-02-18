import products from "../data/products";
import ProductCard from "../components/product/ProductCard";

function Home({ addToCart }) {
  return (
    <div className="container">
      <h1>Discover Authentic Handcrafted Products</h1>
      <p>Supporting artisans with modern technology.</p>

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
