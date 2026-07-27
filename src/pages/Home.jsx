import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Buy & Sell on Campus
          </h1>

          <p className="text-xl mb-8">
            Find textbooks, laptops, furniture, clothes and hostel essentials
            from students around your campus.
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
              Browse Products
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Sell an Item
            </button>
          </div>
        </div>
      </section>
      {/* Search Section */}
<section className="bg-white py-10 shadow-sm">
  <div className="max-w-4xl mx-auto px-6">
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search for books, laptops, furniture..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Search
      </button>
    </div>
  </div>
</section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <CategoryCard title=" Books" />
          <CategoryCard title=" Electronics" />
          <CategoryCard title=" Furniture" />
          <CategoryCard title=" Clothing" />
          <CategoryCard title=" Hostel" />
          <CategoryCard title=" Others" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
