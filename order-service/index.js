const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory orders
let orders = [];
let nextId = 1001;

// GET all orders
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// POST – place new order
app.post('/api/orders', (req, res) => {
  const { items, total } = req.body;
  const order = {
    id: nextId++,
    items,
    total,
    status: 'Processing',
    placedAt: new Date().toLocaleString()
  };
  orders.unshift(order); // newest first
  res.json({ message: 'Order placed', order });
});

// PATCH – update order status
app.patch('/api/orders/:id/status', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ error: 'Order not found' });
  order.status = req.body.status;
  res.json(order);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Order Service running at http://localhost:${PORT}`);
});
