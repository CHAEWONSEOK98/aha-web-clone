import { Link } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { useState } from "react";

const Home = () => {
  const [isToggle, setIsToggle] = useState(false);

  function handleToggleBtn() {
    setIsToggle((current) => !current);
  }

  return (
    <>
      <Header handleToggleBtn={handleToggleBtn} />
      <SideBar isToggle={isToggle} handleToggleBtn={handleToggleBtn} />
    </>
  );
};

export default Home;
