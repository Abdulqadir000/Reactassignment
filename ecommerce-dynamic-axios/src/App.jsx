import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import Productdetail from "./pages/Productdetail";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

function AppRouter() {
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state
  const [localSearchQuery, setLocalSearchQuery] = useState(""); // Local input for search field

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Clear local search query when search results are displayed
  // const handleSearchCompleted = () => {
  //   setLocalSearchQuery(""); // Clear search field after results are loaded
  // };

  return (
    <BrowserRouter>
      <Navbar
        categories={categories}
        chosenCategory={chosenCategory}
        setChosenCategory={setChosenCategory}
        setSearchQuery={setSearchQuery} // Pass search query setter to Navbar
        localSearchQuery={localSearchQuery}
        setLocalSearchQuery={setLocalSearchQuery}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              chosenCategory={chosenCategory}
              searchQuery={searchQuery}
              // onSearchCompleted={handleSearchCompleted}
            />
          }
        />
        <Route path="/products/:id" element={<Productdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
