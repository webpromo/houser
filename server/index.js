

const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

// const cors = require('cors');
// const massive = require('massive');
// require('dotenv').config();

const app = express();
// massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );
app.use( bodyParser.json() );

const port = process.env.SERVER_PORT || 3000;  // nodemon monitors this.
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );