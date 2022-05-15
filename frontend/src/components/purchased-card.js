import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { updatePurchase } from "../reducers/product_reducer";

function Slip(params) {
  const selected_product = useSelector(
    (state) => state.product.selected_product
  );
  const title = selected_product.name.toUpperCase();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="w-auto grid justify-items-center">
      <br />
      <div className="text-4xl font-extrabold">{title}</div>
      <div>
        <img width={400} alt="product" src={selected_product.pic} />
      </div>
      <br />
      <br />
      <div className="flex items-stretch justify-center">
        <span className="self-center text-4xl font-extrabold pl-5">
          HAVE A GOOD DRUNK !
        </span>
      </div>
      <br />
      <div style={{ height: 80 }}>
        <Button
          shape="round"
          style={{
            width: 300,
            height: "100%",
            padding: 5,
            backgroundColor: "#FFD124",
            borderColor: "#FFD124",
          }}
          onClick={() => {
            dispatch(updatePurchase(false));
            navigate("/");
          }}
        >
          <div className="text-white text-3xl font-bold">Success</div>
        </Button>
      </div>
      <br />
    </div>
  );
}

export default Slip;
