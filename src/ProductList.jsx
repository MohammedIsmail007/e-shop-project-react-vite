import React, { useEffect, useState } from "react";
import Product from "./Product";
import Home from "./Home";

function ProductList() {
  let [products, setProducts] = useState([]);
  let [categorys, setCategorys] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((productS) => {
        setProducts(productS);
        setCategorys(productS);
        // console.log(json.product);
      });
  }, []);

  return (
    <>
      <div className=" gap-6 flex flex-wrap justify-evenly">
        {products.map((productsDetail, category, index) => {
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
