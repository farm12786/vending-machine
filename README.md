# vending-machine

## FLOW DIAGRAM

[Project Flowchart Diagram](https://docs.google.com/document/d/1KHaoI8wt2n65tKAnVU-c3fgM19m0qlTbKIqE91Mz61Q/edit?usp=sharing)

## CONFIGURATION

### **1. Clone repository**

```
git clone https://github.com/farm12786/vending-machine.git
```

```bash
cd vending-machine
```

### **2. Set "backend_host"**

- 2.1 Edit at line 3 in file "frontend/src/models/product-model.js"

- 2.2 Default "backend_host" is "localhost". Can use default config for test on local.

**Example :**

```javascript
//  const backend_host = "http://<YOUR_SERVER_HOST>:7707";

const backend_host = "http://157.230.37.137:7707";
```

## RUN APPLICATION

```bash
docker-compose up -d --build
```

## MORE DETAIL

### **1. Port conflict**

- Can set up running port in "docker-compose.yaml" file

### **2. Project tree**

```
vending-machine
    |
    ├─ database                     // source code for database
    |    |
    |    ├─ ...
    |
    ├─ backend                      // source code for backend
    |    |
    |    ├─ ...
    |
    ├─ frontend                     // source code for frontend
    |    |
    |    ├─ ...
    |
    ├─ docker-compose.yaml
    |
    ├─ .gitignore
    |
    └─ README.md


```
