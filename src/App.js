import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import FashionPage from "./components/Pages/FashionPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyingPage from "./components/Pages/BuyingPage";
import SpecificContentPage from "./components/Pages/SpecificContentPage";
import CartPage from "./components/Pages/CartPage";
import SignIn from "./components/Pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/buyingpage/:id" element={<BuyingPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/specificcontentpage/:type"
          element={<SpecificContentPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
