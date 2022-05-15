import React, { useState, useEffect } from "react";
import ProductCard from "../components/product-card";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { getProduct, updateStock } from "../reducers/product_reducer";
import Product from "../models/product-model";
import { useLocation } from "react-router-dom";
import OrderCard from "../components/order-card";
import Slip from "../components/purchased-card";

const product = new Product();

function Main(params) {
  const product_list = useSelector((state) => state.product.product_list);
  const update_stock = useSelector((state) => state.product.update_stock);
  const [cardArr, setCardArr] = useState([]);
  const dispatch = useDispatch();
  const currentPath = useLocation();

  // async function ProductCardGen() {
  //   const product_cards = [];
  //   for (let i = 0; i < product_list.length; i++) {
  //     product_cards.push(
  //       <ProductCard className="col-span-1" product={product_list[i]} />
  //     );
  //   }
  //   setCardArr(product_cards);
  //   return product_cards;
  // }

  async function getAllProduct() {
    dispatch(getProduct(await product.getAllProduct()));
  }

  if (update_stock) {
    dispatch(updateStock(false));
    getAllProduct();
  }

  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div className="grid justify-items-stretch h-auto px-2 pb-10 pt-10">
        <div className="desktop:w-5/6 lg:w-4/6 w-full h-full justify-self-center md:bg-white  rounded-3xl grid justify-items-stretch pb-20">
          <h1 className="text-6xl font-extrabold drop-shadow-2xl pt-10">
            {currentPath.search === ""
              ? "Product"
              : currentPath.search.split("=")[0] === "?code"
              ? "Order"
              : "Purchased"}
          </h1>

          {currentPath.search === "" ? (
            <div className=" flex-row flex-wrap grid desktop:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 desktop:gap-28  gap-5 justify-self-center">
              {Object.values(product_list).map((product) => {
                return <ProductCard className="col-span-1" product={product} />;
              })}
            </div>
          ) : currentPath.search.split("=")[0] === "?code" ? (
            <div className="grid justify-center justify-items-stretch w-full bg-white rounded-2xl">
              <OrderCard />
            </div>
          ) : (
            <div className="grid justify-center justify-items-stretch w-full bg-white rounded-2xl">
              <Slip />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default connect()(Main);
