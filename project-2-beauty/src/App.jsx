import "./App.css";
import Layout from "./Layout";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import FaceProducts from "./FaceProducts";
import EyesProducts from "./EyesProducts";
import LipsProducts from "./LipsProducts";
import NailsProducts from "./NailsProducts";
import ProductsDetails from "./ProductsDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/face-products" element={<FaceProducts />} />
          <Route path="/eyes-products/" element={<EyesProducts />} />
          <Route path="/lips-products" element={<LipsProducts />} />
          <Route path="/nails-products" element={<NailsProducts />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
