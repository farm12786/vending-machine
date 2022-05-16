const axios = require("axios").default;

const backend_host = "http://203.151.164.229:7707";
const uri = backend_host + "/api/v1/products/";
const config = {
  headers: {
    Authorization: "dmVuZGluZ21hY2hpbmVhZG1pbm5pbWRhZW5paGNhbWduaWRuZXY=",
  },
};

class Product {
  async getAllProduct() {
    console.log(uri);
    return new Promise(async (resolve, reject) => {
      await axios
        .get(uri + "all_product", config)
        .then((result) => {
          console.log(typeof result.data.result);
          resolve(result.data.result);
        })
        .catch((e) => {
          resolve(false);
        });
    });
  }

  async reduceStock(code) {
    return new Promise(async (resolve, reject) => {
      await axios
        .put(uri + "reduce_stock/" + code, {}, config)
        .then((result) => {
          resolve(result.data);
        })
        .catch((e) => {
          resolve(false);
        });
    });
  }
}

export default Product;
