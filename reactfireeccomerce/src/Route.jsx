import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UseState from "./pages/UseState";
import App from "./App";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/Productdetail";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/Productdetail";
import Product from "./components/Product";
import Allproducts from "./pages/Allproducts";
import Contactus from "./pages/Contactus";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route index element={<App />} /> */}
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/pages/Allproducts" element={<Allproducts/>}/>
          <Route path="pages/Contactus" element={<Contactus/>}/>
          {/* <Route path="/about" element={<About />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/products" element={<Products />} /> */}
          {/* <Route path="/product/:productId" element={<Productdetail/>} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
