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
      <div className=" gap-6 flex flex-wrap justify-evenly">
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
