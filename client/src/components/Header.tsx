const Header = () => {
    return (
        <div className="flex flex-wrap justify-between items-center w-full p-3 gap-4 bg-white fixed top-0 left-0">
            <div className="flex gap-2 items-center">
                <h1 className="text-blue-700 text-xl md:text-2xl font-bold cursor-pointer">E-LEARNING</h1>
                <button className="flex items-center text-blue-800 text-sm md:text-md font-semibold px-3 py-1 rounded border shadow border-blue-800 hover:shadow-black hover:text-blue-600">
                    Explore
                    <img className="px-1 py-2 w-4 md:w-5" src="down-arrow.svg" alt="down-arrow" />
                </button>
            </div>
            <div className="flex border border-gray-300 rounded-3xl w-full md:w-1/3 lg:w-1/4 p-1">
                <input className="w-full ml-2 mr-2" placeholder="What do you want to learn?" type="text" />
                <button className="bg-blue-600 rounded-3xl p-1" type="button">
                    <img className="w-6 md:w-7 p-1" src="search.png" alt="search" />
                </button>
            </div>
            <div className="flex gap-2 items-center">
                <img className="p-2 w-8 md:w-10 hover:bg-blue-50 cursor-pointer" src="shopping-cart.png" alt="shopping-cart" />
                <div className="flex items-center p-2 text-gray-600 hover:bg-blue-50 gap-1 cursor-pointer">
                    <img className="w-5 md:w-6" src="globe.png" alt="globe" />
                    <h1 className="hidden sm:block">English</h1>
                    <img className="w-3" src="down-arrow.svg" alt="down-arrow" />
                </div>
                <img className="w-8 md:w-10 p-2 hover:bg-blue-50 cursor-pointer" src="notification.png" alt="notification" />
                <div className="flex items-center hover:bg-blue-50 px-2 gap-1 cursor-pointer">
                    <h1 className="w-8 md:w-10 py-2 text-center font-semibold bg-blue-900 text-white rounded-3xl">A</h1>
                    <img className="w-3" src="down-arrow.svg" alt="down-arrow" />
                </div>
            </div>
        </div>
    )
}

export default Header
