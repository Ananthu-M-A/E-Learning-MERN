import Courses from "../components/Courses"

const Home = () => {
  return (
    <>
      <Courses course={"New"} />
      <Courses course={"Popular"} />
      <Courses course={"Recent"} />
    </>
  )
}

export default Home