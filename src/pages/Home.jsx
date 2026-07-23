import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Navbar />

      <section style={styles.hero}>
        <h1>Welcome to Campus Marketplace</h1>

        <p>
          Buy and sell textbooks, electronics, furniture, clothes and more
          within your campus community.
        </p>

        <button style={styles.button}>Browse Products</button>
      </section>
      <section style={styles.categories}>
        <h2>Browse Categories</h2>

        <div style={styles.grid}>
          <CategoryCard title=" Books" />
          <CategoryCard title=" Electronics" />
          <CategoryCard title=" Furniture" />
          <CategoryCard title=" Clothing" />
          <CategoryCard title=" Hostel Essentials" />
          <CategoryCard title=" Others" />
        </div>
      </section>
      <section style={styles.products}>
        <h2>Featured Products</h2>

        <div style={styles.grid}>
          <ProductCard
            name="Programming Textbook"
            price="1500"
            seller="John"
          />

          <ProductCard
            name="HP Laptop"
            price="35000"
            seller="Mary"
          />

          <ProductCard
            name="Study Desk"
            price="4500"
            seller="Brian"
          />
        </div>
      </section>
<section style={styles.products}>
  </section>
  <Footer />
    </main>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "#f4f4f4",
    minHeight: "80vh",
  },

  button: {
    marginTop: "20px",
    padding: "12px 25px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  categories: {
    padding: "50px 20px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },

  products: {
    padding: "50px 20px",
    textAlign: "center",
  },

};

export default Home;