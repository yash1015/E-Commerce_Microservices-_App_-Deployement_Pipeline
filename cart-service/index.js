const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory cart
let cart = [];

// GET cart
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

// POST – add item to cart
app.post('/api/cart', (req, res) => {
  const { productId, name, price, quantity } = req.body;
  const existing = cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, name, price, quantity });
  }
  res.json({ message: 'Item added', cart });
});

// DELETE – remove item from cart
app.delete('/api/cart/:productId', (req, res) => {
  cart = cart.filter(item => item.productId !== parseInt(req.params.productId));
  res.json({ message: 'Item removed', cart });
});

// DELETE – clear cart
app.delete('/api/cart', (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Cart Service running at http://localhost:${PORT}`);
});
