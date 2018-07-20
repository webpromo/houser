module.exports = {
    getAll: ( req, res ) => {  
        const dbInstance = req.app.get('db'); // same with each endpoint
        console.log(req.app.get);
        dbInstance.getAll() // throwing error "Cannot read property 'getAll' of undefined"
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage: "It's not you, it's us."});
        })
    },
    create: ( req, res ) => {  
        const dbInstance = req.app.get('db');
      const { name, address, city,state,zip } = req.body;
      dbInstance.add_house([name, address, city, state,zip]).then(newHouse => res.status(200).send(newHouse));
    } ,
    delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        dbInstance.nix_house([ params.id ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      }
} 