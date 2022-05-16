# vending-machine

## Configuration

### 1. Clone repository.

```bash
git clone https://github.com/farm12786/vending-machine.git
```

```bash
cd vending-machine
```

### 2. Set "backend_host" in "frontend/src/models/product-model.js" at line 3 by your host or IP.

2.1 Default "backend_host" is "localhost". Can use default config for test on local.
Example :

```javascript
//const backend_host = "http://<YOUR_SERVER_HOST>:7707";

const backend_host = "http://157.230.37.137:7707";
```

### 3. Run application by docker-compose

```bash
docker-compose up -d --build
```
