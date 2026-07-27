import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {
  return (
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">

          <img
            src="https://picsum.photos/500/400"
            alt="Product"
            className="rounded-xl shadow-lg w-full"
          />

          <div>
            <h1 className="text-4xl font-bold mb-4">
              HP Laptop
            </h1>

            <p className="text-2xl text-blue-600 font-semibold mb-4">
              KSh 35,000
            </p>

            <p className="text-gray-600 mb-6">
              A well-maintained HP Core i5 laptop, ideal for programming,
              assignments, and online classes.
            </p>

            <p className="mb-2">
              <strong>Seller:</strong> Mary
            </p>

            <p className="mb-6">
              <strong>Location:</strong> Main Campus
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Contact Seller
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;