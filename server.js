const express = require('express');
const path = require('path');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // якщо надсилаєш JSON
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.post('/send-review', async (req, res) => {
  const { rating = 5, name, phone, message, pluses, minuses = 'Поки не бачу' } = req.body;
  const avatarId = Math.floor(Math.random() * 21) + 1;

  try {
    await pool.query(
      `INSERT INTO reviews (username, rating, avatar_id, review_text, pros, cons, phone)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [name, rating, avatarId, message, pluses, minuses, phone]
    );

    res.status(200).json({ success: true, message: 'Відгук збережено ❤️' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Щось пішло по дупі 😥' });
  }
});

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Сервер шпарить на http://localhost:${PORT}`);
});
