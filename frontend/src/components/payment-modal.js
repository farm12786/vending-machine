import React, { useState, useEffect } from "react";
import { BsCashCoin } from "react-icons/bs";

var QRCode = require("qrcode");

function PaymentModal(props) {
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    async function qr_generate() {
      QRCode.toDataURL("test order", function (err, url) {
        setQrCode(url);
      });
    }

    qr_generate();
  }, []);
  return (
    <div className="grid justify-items-center">
      {props.method === "qr" ? (
        <div className="justify-center" style={{ width: 350 }}>
          <img src={qrCode} alt="qrcode" style={{ width: "100%" }} />
          <div className="grid justify-items-center">
            <span className="text-ls font-bold text-center">
              Scan QR code for pay the order and tap on "Purchase" button.
            </span>
            <br />
          </div>
        </div>
      ) : (
        <div className="justify-center" style={{ width: 350 }}>
          <div className="grid justify-items-center" style={{ width: 350 }}>
            <BsCashCoin className="justify-center" size={200} />
          </div>

          <div className="grid justify-items-center">
            <br />
            <span className="text-ls font-bold grid justify-items-center">
              <div>Pay cash</div>
              <div>and tap on "Purchase" button.</div>
            </span>
            <br />
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentModal;
