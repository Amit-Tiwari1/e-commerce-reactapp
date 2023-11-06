import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Pages/Cards";
import LoginSingup from "./Pages/LoginSingup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/assets/banner_mens.png";
import kid_banner from "./Components/assets/banner_kids.png";
import women_banner from "./Components/assets/banner_women.png";
function App() {
  return (
    <h1 className="text-l ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cards />} />
          <Route path="/login" element={<LoginSingup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </h1>
  );
}

export default App;
