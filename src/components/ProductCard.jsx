import { Link } from "react-router-dom";
function ProductCard({ name, price, seller, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{name}</h3>

        <p className="text-blue-600 font-semibold text-lg mt-2">
          KSh {price}
        </p>

        <p className="text-gray-500 mt-1">
          Seller: {seller}
        </p>

        <Link to="/product/1">
  <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
    View Details
  </button>
</Link>
      </div>
    </div>
  );
}

export default ProductCard;