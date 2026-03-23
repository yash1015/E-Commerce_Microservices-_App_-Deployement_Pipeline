# 🛒 Ecommerce Microservices App

A simple Node.js ecommerce app split into 3 microservices.

## Services

| Service          | Port | Description                  |
|------------------|------|------------------------------|
| Gateway (Store)  | 3000 | Main storefront landing page |
| Product Service  | 3001 | Browse and view products     |
| Cart Service     | 3002 | Add/remove items from cart   |
| Order Service    | 3003 | Place and track orders       |

## How to Run

### Step 1 – Install dependencies for each service

```bash
cd gateway && npm install && cd ..
cd product-service && npm install && cd ..
cd cart-service && npm install && cd ..
cd order-service && npm install && cd ..
```

### Step 2 – Open 4 terminal tabs and run each service

**Terminal 1 – Gateway (Main Store)**
```bash
cd gateway && node index.js
```

**Terminal 2 – Product Service**
```bash
cd product-service && node index.js
```

**Terminal 3 – Cart Service**
```bash
cd cart-service && node index.js
```

**Terminal 4 – Order Service**
```bash
cd order-service && node index.js
```

### Step 3 – Open your browser

Go to: **http://localhost:3000**

## Project Structure

```
microservices-app/
├── gateway/          → Main storefront (port 3000)
├── product-service/  → Products API + UI (port 3001)
├── cart-service/     → Cart API + UI (port 3002)
├── order-service/    → Orders API + UI (port 3003)
└── README.md
```

> **Note:** Data is stored in memory. It resets when you restart a service.
