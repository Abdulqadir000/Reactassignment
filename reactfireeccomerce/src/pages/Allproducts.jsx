import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Allproducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold mb-8">All Latest Products</h1>
          <div className="flex flex-wrap -m-4">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.title}
                    className="object-cover object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category.toUpperCase()}
                  </h3>
                  <h2 className="title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">${product.price}</p>
                </div>
                <Link
                  to={`/product/${product.id}`}
                  className="text-indigo-500 hover:underline"
                >
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Allproducts;
