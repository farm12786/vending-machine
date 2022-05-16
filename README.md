# vending-machine

## Configuration

1. set " backend_host " in "frontend/src/models/product-model.js" at line 3 by your host or IP.

```javascript
//  EXAMPLE

//const backend_host = "http://<YOUR_SERVER_HOST>:7707";
const backend_host = "http://157.230.37.137:7707";
```
2. Run application by docker-compose

```bash
cd vending-machine

docker-compose up -d --build
```
