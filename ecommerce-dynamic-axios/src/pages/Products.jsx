import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { RotatingLines } from "react-loader-spinner";

function Products({ chosenCategory, searchQuery, onSearchCompleted }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let url = '';
    
    // Search query takes priority
    if (searchQuery) {
      url = `https://dummyjson.com/products/search?q=${searchQuery}`;
    } else if (chosenCategory === "All" || chosenCategory === '') {
      // Fallback to "All" products if no search and no specific category is chosen
      url = "https://dummyjson.com/products";
    } else {
      // Fetch products by category
      url = `https://dummyjson.com/products/category/${chosenCategory}`;
    }

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products); // Set products based on search or category
        setLoading(false);
        // if (searchQuery) {
        //   onSearchCompleted();  // Clear search input when search results are fetched
        // }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [chosenCategory, searchQuery, 
    // onSearchCompleted

  ]);


  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="flex justify-center mt-10">
        <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
      </div>
      ) : (
        <div>
          <div className="flex flex-wrap -m-4 my-4">
            {products.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
