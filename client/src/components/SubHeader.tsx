import { Link } from "react-router-dom"

const SubHeader = () => {
    return (
        <div className="w-full border-b">
            <div className="flex flex-wrap justify-center md:justify-start w-full md:w-2/3 px-5 p-3 gap-5 md:gap-20">
                <Link className="text-gray-600 border-b-2 border-transparent hover:text-blue-600 focus:text-blue-600 focus:border-blue-600 focus:font-bold" to="/">Home</Link>
                <Link className="text-gray-600 border-b-2 border-transparent hover:text-blue-600 focus:text-blue-600 focus:border-blue-600 focus:font-bold" to="/my-learning">My Learning</Link>
                <Link className="text-gray-600 border-b-2 border-transparent hover:text-blue-600 focus:text-blue-600 focus:border-blue-600 focus:font-bold" to="/online-courses">Online Courses</Link>
                <Link className="text-gray-600 border-b-2 border-transparent hover:text-blue-600 focus:text-blue-600 focus:border-blue-600 focus:font-bold" to="/find-careers">Find Your New Career</Link>
            </div>
        </div>
    )
}

export default SubHeader
