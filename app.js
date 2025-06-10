const express = require('express');
const path = require('path');

const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const rootDir = require('./utils/pathUtil');
const app = express();
const PORT = 3001;

// Logger
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Parse form data
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files early
app.use(express.static(path.join(rootDir, 'public')));

// Routes
app.use(userRouter);
app.use('/host', hostRouter);

// 404 fallback
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
