import React from "react";

function Product(props) {
  console.log(props);
  return (
    <>
      {/* <label className="relative block aspect-[2/0.75] cursor-pointer w-20 rounded-full bg-white bg-[length:100%_100%] shadow-2xl shadow-purple-300 transition-all duration-500 [&amp;:has(input:checked)]:rotate-180  hover:bg-[length:100%_500%] focus:bg-[length:100%_500%]">
          <input type="checkbox" className="peer/input hidden" />
          <div className="absolute left-[3%] top-1/2 aspect-square h-[90%] -translate-y-1/2 rotate-180 rounded-full bg-white border-2 transition-all duration-500 peer-checked/input:left-[63%] peer-checked/input:-rotate-6"></div>
        </label> */}

      <div className=" w-80 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 bg-opacity-75 transition-transform duration-300 ease-in-out">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          alt="Card Image"
          src={props.productsDetail.image}
        />
        <div className="p-4">
          <h2 className="text-xl text-black font-semibold">
            {props.productsDetail.title?.substring(0, 15) + "..."}
          </h2>
          <p className="text-gray-600">
            {props.productsDetail.description?.substring(0, 35) + "..."}
          </p>
          <div className="flex justify-between items-center mt-4">
            {/* <button
              className="bg-blue-500 hover:bg-blue-600
             text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Rating: {props.productsDetail.rating.rate} out of{" "}
              {props.productsDetail.rating.count} peoples
            </button> */}
            <div>
              <div className="flex items-center space-x-2 text-base">
                <h4 className="font-semibold text-slate-900">Ratings</h4>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                  {props.productsDetail.rating.rate}
                </span>
              </div>
              <div className="mt-3 flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="mt-3 text-sm font-medium">
                <a href="#" className="text-blue-500">
                  {props.productsDetail.rating.count} peoples
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
