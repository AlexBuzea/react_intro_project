import BlogList from "./BlogList";
import useFetch from "./useFetch";

// const Home = () => {
//   const {
//     data: blogs,
//     isPending,
//     error,
//   } = useFetch("http://localhost:8000/blogs"); //destructure assignemnt to extract 3 variables which will hold corresponding data

//   return (
//     <div className="home">
//       {/* if any err, show err message on page */}
//       {error && <div>{error}</div>}
//       {isPending && <div> Loading... </div>}{" "}
//       {blogs && <BlogList blogs={blogs} title="All Blogs" />}
//     </div>
//   );
// };

//

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(
    "https://my-json-server.typicode.com/AlexBuzea/react_intro_project/blogs"
  ); //destructure assignemnt to extract 3 variables which will hold corresponding data

  return (
    <div className="home">
      {/* if any err, show err message on page */}
      {error && <div>{error}</div>}
      {isPending && <div> Loading... </div>}{" "}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
