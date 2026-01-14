const express = require('express');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/media-market', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('مذ تم الاتصال بقاعدة البيانات');
}).catch((err) => {
  console.error('خطأ الاتصال بقاعدة البيانات:', err);
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'مرحبا بك في API ميديا ماركت' });
});

// Contact API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'الحقول المطلوبة لم يتم ملؤها' });
    }
    
    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    
    res.status(201).json({ message: 'تم حفظ رسالتك بنجاح' });
  } catch (error) {
    res.status(500).json({ error: 'حدث خطأ في الخادم' });
  }
});

// Get all contacts (Admin)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'خطأ في الخادم' });
  }
});

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`الخادم يعمل على http://localhost:${PORT}`);
});

module.exports = app;
