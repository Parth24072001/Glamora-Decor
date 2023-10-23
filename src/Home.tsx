import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
};

export default Home;
