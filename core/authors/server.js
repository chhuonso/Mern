const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;
const DB = "authorsdb";


//*********** MIDDLEWARE***********
app.use(cors(),express.json(),express.urlencoded({extended: true}));
//*********************************

// DATABASE CONNECTION
require('./server/config/mongoose.config')(DB)

// CONNECTING ROUTES 
require('./server/routes/author.route')(app)

app.listen(PORT, () => console.log(`🌜Listening on port: ${PORT}🌛`) );