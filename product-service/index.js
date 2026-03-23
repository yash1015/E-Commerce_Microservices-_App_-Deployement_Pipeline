const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory product data
const products = [
  { id: 1, name: 'Wireless Headphones', price: 59.99, category: 'Electronics', stock: 15, image: '🎧', description: 'High quality sound with noise cancellation.' },
  { id: 2, name: 'Running Shoes', price: 89.99, category: 'Footwear', stock: 20, image: '👟', description: 'Lightweight and comfortable for daily runs.' },
  { id: 3, name: 'Coffee Maker', price: 45.00, category: 'Kitchen', stock: 8, image: '☕', description: 'Brew perfect coffee every morning.' },
  { id: 4, name: 'Yoga Mat', price: 25.00, category: 'Fitness', stock: 30, image: '🧘', description: 'Non-slip mat for yoga and exercises.' },
  { id: 5, name: 'Backpack', price: 39.99, category: 'Bags', stock: 12, image: '🎒', description: 'Durable backpack with multiple compartments.' },
  { id: 6, name: 'Sunglasses', price: 29.99, category: 'Accessories', stock: 25, image: '🕶️', description: 'UV protection stylish sunglasses.' },
];

// GET all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// GET single product
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Product Service running at http://localhost:${PORT}`);
});
