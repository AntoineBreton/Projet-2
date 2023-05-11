import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import FaceProducts from "./FaceProducts";
import EyesProducts from "./EyesProducts";
import LipsProducts from "./LipsProducts";
import NailsProducts from "./NailsProducts";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div>test</div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/face-products" element={<FaceProducts />} />
          <Route path="/eyes-products/" element={<EyesProducts />} />
          <Route path="/lips-products" element={<LipsProducts />} />
          <Route path="/nails-products" element={<NailsProducts />} />
        </Route>
        <Route element={<Footer />} />
      </Routes>
    </>
  );
}
export default App;
