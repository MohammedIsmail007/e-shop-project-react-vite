import { useState, useEffect } from "react";
import React from "react";
//https://github.com/1000ship/react-scroll-motion link
import Header from "./Header";
import Footer from "./Footer";

import Product from "./Product";
import { batch, Sticky, MoveOut, Fade } from "react-scroll-motion";
import { Link } from "react-router-dom";
import {
  Animator,
  FadeIn,
  ScrollContainer,
  ScrollPage,
} from "react-scroll-motion";

function Home() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((productS) => {
        setProducts(productS);
      });
  }, []);

  return (
    <div>
      <Header />
      <br />
      <div
        className="
       w-auto md:w-auto"
      >
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span
                style={{
                  fontSize: "40px",
                  fontFamily: "Times New Roman",
                  color: "black",
                }}
              >
                <h1 style={{ fontSize: "80px" }}>
                  <b>WELCOME TO E-SHOP</b>
                </h1>
                <p>
                  React project Using <br /> Vite, Tailwind css, Flowbite,
                  <br /> React-scroll-motion, api, router method
                </p>
              </span>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>

      <br />
      <div>
        <p className=" text-center text-2xl text-black font-semibold pl-1 ml-3">
          OUR PRODUCTS
        </p>

        <br />
      </div>
      <div className=" gap-6 flex flex-wrap justify-center">
        {products.slice(12, 16).map((productsDetail, index) => {
          return (
            <>
              <Product key={index} productsDetail={productsDetail} />
            </>
          );
        })}
      </div>
      <button
        type="button"
        className="text-white p-3 m-3 bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg hover:bg-blue-400 text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        <Link to="/Products">See More</Link>
      </button>
      <br />

      <Footer />
    </div>
  );
}

export default Home;
