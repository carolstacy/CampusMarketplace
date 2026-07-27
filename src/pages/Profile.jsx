import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-6">

          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">

            <img
              src="https://i.pravatar.cc/200"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-blue-600"
            />

            <div>
              <h1 className="text-4xl font-bold">
                Ndeti Carol
              </h1>

              <p className="text-gray-600 mt-2">
                johndoe@student.ac.ke
              </p>

              <p className="text-gray-600">
                Computer Science Student
              </p>

              <p className="text-gray-600">
                 Main Campus
              </p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Edit Profile
              </button>
            </div>

          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-3xl font-bold text-blue-600">12</h2>
              <p>Products Listed</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-3xl font-bold text-green-600">8</h2>
              <p>Products Sold</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h2 className="text-3xl font-bold text-yellow-500">4.9 </h2>
              <p>Seller Rating</p>
            </div>

          </div>

          {/* My Listings */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">
            <h2 className="text-2xl font-bold mb-6">
              My Listings
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between items-center border rounded-lg p-4">
                <div>
                  <h3 className="font-semibold">Programming Textbook</h3>
                  <p className="text-gray-500">KSh 1,500</p>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>
              </div>

              <div className="flex justify-between items-center border rounded-lg p-4">
                <div>
                  <h3 className="font-semibold">HP Laptop</h3>
                  <p className="text-gray-500">KSh 35,000</p>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;