import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SellProduct() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Sell an Item
        </h1>

        <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">

          <div>
            <label className="block mb-2 font-semibold">
              Product Name
            </label>

            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Category
            </label>

            <select className="w-full border rounded-lg px-4 py-3">
              <option>Books</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Clothing</option>
              <option>Hostel Essentials</option>
              <option>Others</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Price (KSh)
            </label>

            <input
              type="number"
              placeholder="Enter price"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Describe your item..."
              className="w-full border rounded-lg px-4 py-3"
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Upload Image
            </label>

            <input
              type="file"
              className="w-full"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Post Product
          </button>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default SellProduct;