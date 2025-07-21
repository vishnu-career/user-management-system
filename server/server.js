const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const candidateRoutes = require('./routes/candidates');
require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/candidates', candidateRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
