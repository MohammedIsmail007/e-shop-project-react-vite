import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((productS) => {
        setProducts(productS);
        // console.log(json.product);
      });
  }, []);

  return (
    <>
      <header className=" w-full p-2 flex flex-wrap justify-between bg-opacity-10 bg-blue-100 rounded-sm mb-3">
        <h2>E-Commerce Website</h2>

        <ul className="flex flex-wrap">
          <li className="hover:scale-110">Home</li>
          <li className="hover:scale-110">Products</li>
          <li className="hover:scale-110">About</li>
          <li className="hover:scale-110">Contact us</li>
        </ul>
      </header>
      <div className=" gap-6 flex flex-wrap p-3 pb-2">
        {products.map((productsDetail, index) => {
          return (
            <>
              <Product key={index} productsDetail={productsDetail} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
