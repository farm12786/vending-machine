import React from "react";
import { Card, Button, Grid } from "antd";
import "../style/product-card.css";
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../reducers/product_reducer";
import { Link, useLocation } from "react-router-dom";

const { Meta } = Card;
const { useBreakpoint } = Grid;

function ProductCard(props) {
  const desription = "stock : " + props.product.stock;
  const title = props.product.code + " : " + props.product.name.toUpperCase();
  return (
    <div>
      <Card
        hoverable
        style={{
          width: useBreakpoint().sm ? 300 : "42vh",
          borderRadius: 20,
        }}
        cover={
          <div
            className="grid justify-items-stretch"
            style={{ overflow: "hidden", height: "400px", padding: 2 }}
          >
            <img
              className="justify-center"
              alt="example"
              src={props.product.pic}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 20,
              }}
            />
          </div>
        }
        actions={[
          <PriceAction className="bg-primary" price={props.product.price} />,
          <BtnAction className="bg-primary" product={props.product} />,
        ]}
      >
        <Meta title={title} description={desription} />
      </Card>
    </div>
  );
}

function BtnAction(props) {
  const dispatch = useDispatch();
  const nextRoute = useLocation().pathname + "?code=" + props.product.code;
  return (
    <div
      className="w-full grid justify-items-stretch"
      style={{ borderRadius: 10 }}
    >
      <Link to={nextRoute}>
        <Button
          style={{
            backgroundColor: props.product.stock === 0 ? "#BBBBBB" : "#FFC93C",
            borderColor: props.product.stock === 0 ? "#BBBBBB" : "#FFC93C",
          }}
          className="w-3/4 h-full justify-self-center grid justify-items-stretch drop-shadow-2xl"
          type="primary"
          size="large"
          shape="round"
          disabled={props.product.stock === 0 ? true : false}
          onClick={() => {
            dispatch(selectProduct(props.product));
          }}
        >
          <span className="font-bold w-full justify-self-center">
            {props.product.stock === 0 ? "Sold out" : "Buy"}
          </span>
        </Button>
      </Link>
    </div>
  );
}

function PriceAction(props) {
  return (
    <div>
      <span className="text-3xl text-black font-bold w-full justify-self-center">
        {props.price} ฿
      </span>
    </div>
  );
}

export default ProductCard;
