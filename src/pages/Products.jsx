import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../data/products";

function Products() {
  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">
          All Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              seller={product.seller}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Products;