

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');


app.use( bodyParser.json() );
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
  }).catch( err => console.log(err) );


  app.get( '/api/houses', controller.getAll );
  app.put( '/api/houses', controller.create );
  app.delete( '/api/houses/:id', controller.delete );

const port = process.env.SERVER_PORT || 3001;  // nodemon monitors this.
app.listen( port, () => { console.log(`Server listening INTENTLY on port ${port}.`); } );