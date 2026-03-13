require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

// Booking submission endpoint
app.post('/api/bookings', async (req, res) => {
  const {
    type,
    package_name,
    package_slug,
    hotel_slug,
    event_slug,
    date_from,
    date_to,
    quantity,
    total_price,
    extra_services,
    meal_plan,
    purpose,
    itinerary_needed,
    travel_option,
    country,
    county,
    street_address,
    notes,
    payment_method,
    payment_status,
    mpesa_code,
    items // array of cart items
  } = req.body;

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    // Insert into bookings
    const [result] = await conn.execute(
      `INSERT INTO bookings (type, package_name, package_slug, hotel_slug, event_slug, date_from, date_to, quantity, total_price, extra_services, meal_plan, purpose, itinerary_needed, travel_option, country, county, street_address, notes, payment_method, payment_status, mpesa_code)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [type, package_name, package_slug, hotel_slug, event_slug, date_from, date_to, quantity, total_price, JSON.stringify(extra_services), meal_plan, purpose, itinerary_needed, travel_option, country, county, street_address, notes, payment_method, payment_status, mpesa_code]
    );
    const bookingId = result.insertId;
    // Insert booking items
    if (Array.isArray(items)) {
      for (const item of items) {
        await conn.execute(
          `INSERT INTO booking_items (booking_id, item_name, item_type, price, quantity, extra_services)
          VALUES (?, ?, ?, ?, ?, ?)` ,
          [bookingId, item.name, item.type, item.price, item.quantity, JSON.stringify(item.extra_services || null)]
        );
      }
    }
    await conn.commit();
    res.json({ success: true, bookingId });
  } catch (err) {
    await conn.rollback();
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to save booking.' });
  } finally {
    conn.release();
  }
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' });
  }
  try {
    const [result] = await pool.execute(
      `INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone || null, subject, message]
    );
    res.json({ success: true, id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 