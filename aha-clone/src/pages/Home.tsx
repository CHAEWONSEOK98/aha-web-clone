import { Link } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const Home = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Link to="/connects"></Link>
    </>
  );
};

export default Home;
