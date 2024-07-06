interface CoursesProps {
    course: string;
}

const Courses = (Props: CoursesProps) => {
    return (
        <>
            {Props.course === "New" && <h1 className="px-3 py-1 text-2xl mt-32">Learn New Courses</h1>}
            {Props.course === "Popular" && <h1 className="px-3 py-1 text-2xl">Popular Courses</h1>}
            {Props.course === "Recent" && <h1 className="px-3 py-1 text-2xl">Recently Visited</h1>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-3">
                {Array(4).fill('').map((_, index) => (
                    <div key={index} className="border-2 border-gray-200 p-2 rounded-2xl cursor-pointer hover:shadow-xl hover:shadow-black transition duration-500 ease-in-out">
                        <img className="rounded-xl" src="UoL-Campus-Header.png" alt="" />
                        <p className="text-sm font-semibold text-gray-500 p-1">
                            University of Knowledge
                        </p>
                        <h1 className="text-md font-semibold p-1">
                            Diploma in Computer Science
                        </h1>
                        <p className="text-sm text-blue-700 p-1">
                            Learn a course
                        </p>
                        <p className="text-sm text-black p-1">
                            Diploma
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center px-3 py-3">
                <h1 className="text-md font-semibold text-blue-600 hover:text-blue-800 border border-blue-600 hover:bg-blue-50 px-2 py-1 rounded-md cursor-pointer">
                    Show More
                </h1>
            </div>
        </>
    )
}

export default Courses
