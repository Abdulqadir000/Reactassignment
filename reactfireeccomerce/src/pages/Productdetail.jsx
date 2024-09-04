import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div>Error fetching product: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/3 lg:h-auto h-60 object-cover object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category.toUpperCase()}
            </h2>
            <h1 className="text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="leading-relaxed mt-4">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
              <p className="text-2xl font-medium">${product.price}</p>
            </div>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
