import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <div className="flex w-100 p-4 border border-gray-300">
        <h1 className="text-blue-700 text-2xl font-bold cursor-pointer">E-LEARNING</h1>
        <button className="flex text-blue-800 text-md font-semibold px-2 py-1 rounded border border-blue-800 hover:shadow hover:text-blue-600 focus:border-black focus:border-2">
          Explore
          <img className="px-1 py-2 w-5" src="down-arrow.svg" alt="down-arrow" />
        </button>
        <div className="flex border border-gray-300 rounded-3xl w-1/4 p-1">
          <input className="w-full ml-2 mr-2" placeholder="What do you want to learn?" type="text" />
          <button className="bg-blue-600 rounded-3xl" type="button">
            <img className="w-7 p-1" src="search.png" alt="search" />
          </button>
        </div>
        <h1 className="p-2 text-gray-600 hover:text-blue-600 hover:cursor-pointer">Courses</h1>
        <h1 className="p-2 text-gray-600 hover:text-blue-600 hover:cursor-pointer">Find Careers</h1>
        <img className="p-2 w-10 hover:bg-blue-50" src="shopping-cart.png" alt="shopping-cart" />
      </div>
      <div className="p-2">

      </div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Outlet />
    </>
  )
}

export default Layout
