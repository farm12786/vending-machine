import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPayment,
  updatePurchase,
  updateStock,
} from "../reducers/product_reducer";
import { Button, Modal, Grid, Divider } from "antd";
import { BsCashCoin } from "react-icons/bs";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import PaymentModal from "./payment-modal";
import Product from "../models/product-model";
import { useLocation, useNavigate } from "react-router-dom";

const product = new Product();
const { useBreakpoint } = Grid;

function OrderCard(params) {
  const selected_product = useSelector(
    (state) => state.product.selected_product
  );
  const payment_method = useSelector((state) => state.product.payment_method);
  const purchase_status = useSelector((state) => state.product.purchase_status);
  const dispatch = useDispatch();
  const currentPath = useLocation();
  const navigate = useNavigate();
  const title = selected_product.name.toUpperCase();
  const [isModalVisible, setIsModalVisible] = useState(false);

  async function payment_success(code) {
    const result = await product.reduceStock(code);
    setIsModalVisible(false);
    if (!result) {
    } else {
      dispatch(updatePurchase(true));
      dispatch(updateStock(true));
      navigate("/?purchased=true");
    }
  }

  useEffect(() => {
    if (purchase_status) {
      dispatch(updatePurchase(false));
      navigate("/");
    }
  }, []);

  return (
    <div className="w-auto grid justify-items-center">
      <div>
        <img width={400} alt="product" src={selected_product.pic} />
      </div>
      <br />
      <div className="text-4xl font-extrabold">{title}</div>
      <br />
      <div className="flex items-stretch justify-center">
        <span className="self-center text-xl font-bold">Amount :</span>

        <span className="self-center text-4xl font-extrabold pl-5">
          {selected_product.price} ฿
        </span>
      </div>
      <br />
      <div class="grid grid-cols-2 gap-5 justify-center pb-5">
        <div className="drop-shadow-2xl h-15 ">
          <Button
            shape="primary"
            style={{
              width: useBreakpoint().xs ? 150 : 275,
              height: "100%",
              padding: 5,
              backgroundColor: "#FFCE45",
              borderColor: "#FFCE45",
            }}
            onClick={() => {
              dispatch(selectPayment("cash"));
              setIsModalVisible(true);
            }}
          >
            <div className="grid justify-center">
              <BsCashCoin
                size={useBreakpoint().xs ? 30 : 35}
                color={"#000000"}
              />
            </div>
            <div className="text-black text-xl font-bold">Cash</div>
          </Button>
        </div>
        <div className="drop-shadow-2xl h-15">
          <Button
            shape="primary"
            style={{
              width: useBreakpoint().xs ? 150 : 275,
              height: "100%",
              padding: 5,
              backgroundColor: "#5DA7AE",
              borderColor: "#5DA7AE",
            }}
            onClick={() => {
              dispatch(selectPayment("qr"));
              setIsModalVisible(true);
            }}
          >
            <div className="grid justify-center">
              <MdOutlineQrCodeScanner
                size={useBreakpoint().xs ? 30 : 35}
                color={"#000000"}
              />
            </div>
            <div className="text-black text-xl font-bold">Scan QR</div>
          </Button>
        </div>
      </div>
      <Divider />
      <div className="pb-5">
        <div className="drop-shadow-2xl h-16 ">
          <Button
            shape="round"
            style={{
              width: useBreakpoint().xs ? 150 : 275,
              height: "100%",
              padding: 5,
              backgroundColor: "#AAAAAA",
              borderColor: "#AAAAAA",
            }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <div className="text-black text-xl font-bold">Cancel</div>
          </Button>
        </div>
      </div>

      <div className="grid justify-center">
        <Modal
          maskClosable={false}
          centered
          title={
            <div className="text-3xl font-bold grid justify-center">
              Purchase
            </div>
          }
          visible={isModalVisible}
          onCancel={() => {
            setIsModalVisible(false);
          }}
          closeIcon={null}
          footer={
            <div class="grid grid-cols-2 gap-1 justify-items-center h-11">
              <Button
                shape="round"
                style={{
                  width: "85%",
                  height: "100%",
                  backgroundColor: "#AAAAAA",
                  borderColor: "#AAAAAA",
                }}
                onClick={async () => {
                  setIsModalVisible(false);
                }}
              >
                <div className="text-white text-lg font-bold">Cancel</div>
              </Button>
              <Button
                style={{
                  width: "85%",
                  height: "100%",
                  backgroundColor: "#069A8E",
                  borderColor: "#069A8E",
                }}
                shape="round"
                onClick={async () => {
                  await payment_success(currentPath.search.split("=")[1]);
                }}
              >
                <div className="text-white text-lg font-bold">Purchase</div>
              </Button>
            </div>
          }
        >
          <PaymentModal method={payment_method} />
        </Modal>
      </div>
    </div>
  );
}

export default OrderCard;
