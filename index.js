const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

const schoolRoutes = require('./routes/schoolRoutes');
app.use('/api/schools', schoolRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});