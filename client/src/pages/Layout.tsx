import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="px-10">
      <div className="flex flex-wrap justify-between items-center w-full p-3 gap-4">
        <h1 className="text-blue-700 text-2xl font-bold cursor-pointer">E-LEARNING</h1>
        <button className="flex items-center text-blue-800 text-md font-semibold px-4 py-1 rounded border shadow border-blue-800 hover:shadow-black hover:text-blue-600">
          Explore
          <img className="px-1 py-2 w-5" src="down-arrow.svg" alt="down-arrow" />
        </button>
        <div className="flex border border-gray-300 rounded-3xl w-full md:w-1/4 p-1">
          <input className="w-full ml-2 mr-2" placeholder="What do you want to learn?" type="text" />
          <button className="bg-blue-600 rounded-3xl p-1" type="button">
            <img className="w-7 p-1" src="search.png" alt="search" />
          </button>
        </div>
        <h1 className="p-2 text-gray-600 hover:text-blue-600 cursor-pointer">Courses</h1>
        <h1 className="p-2 text-gray-600 hover:text-blue-600 cursor-pointer">Find Careers</h1>
        <div className="flex gap-2 items-center">
          <img className="p-2 w-10 hover:bg-blue-50 cursor-pointer" src="shopping-cart.png" alt="shopping-cart" />
          <div className="flex items-center p-2 text-gray-600 hover:bg-blue-50 gap-1 cursor-pointer">
            <img className="w-6" src="globe.png" alt="globe" />
            <h1>English</h1>
            <img className="w-3" src="down-arrow.svg" alt="down-arrow" />
          </div>
          <img className="w-10 p-2 hover:bg-blue-50 cursor-pointer" src="notification.png" alt="notification" />
          <div className="flex items-center hover:bg-blue-50 px-2 gap-1 cursor-pointer">
            <h1 className="w-10 py-2 text-center font-semibold bg-blue-900 text-white rounded-3xl">A</h1>
            <img className="w-3" src="down-arrow.svg" alt="down-arrow" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Link className="text-blue-600 hover:underline" to="/">Home</Link>
        <Link className="text-blue-600 hover:underline" to="/login">Login</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
