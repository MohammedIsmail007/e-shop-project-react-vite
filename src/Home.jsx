import React from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";
import img1 from "./assets/item1.jpg";
import img2 from "./assets/item2.jpg";
import img3 from "./assets/item3.jpg";
import img4 from "./assets/item4.jpg";
import img5 from "./assets/item5.jpg";

function Home() {
  return (
    <div>
      <Header />
      <br />
      <div
        id="default-carousel"
        className="relative w-full h-48"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative  overflow-hidden  md:h-96">
          {/* <!-- Item 1 --> */}
          <div
            className="hidden duration-700 ease-in-out h-44"
            data-carousel-item
          >
            <img
              src={img1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md"
              alt="..."
            />
          </div>

          {/* <!-- Item 2 --> */}
          <div
            className="hidden duration-700 ease-in-out h-44"
            data-carousel-item
          >
            <img
              src={img2}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md"
              alt="..."
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div
            className="hidden duration-700 ease-in-out h-44"
            data-carousel-item
          >
            <img
              src={img3}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md"
              alt="..."
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div
            className="hidden duration-700 ease-in-out h-44"
            data-carousel-item
          >
            <img
              src={img4}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-md"
              alt="Noimage"
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div
            className="hidden duration-700 ease-in-out h-44"
            data-carousel-item
          >
            <img
              src={img5}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-2xl"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div> */}
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/docs/images/blog/image-4.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a> */}

      <br />
      <div>
        <p className=" text-left text-2xl text-amber-300 font-semibold pl-1 ml-3 hover:text-blue-400">
          Products...
        </p>

        <br />

        <ProductList />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Home;
