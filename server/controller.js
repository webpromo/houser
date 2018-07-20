module.exports = {
    read: ( req, res ) => {  
        const dbInstance = req.app.get('db'); // same with each endpoint
        dbInstance.getAll()
        .then(houses => res.status(200).send(houses))
        .catch(err => {
            res.status(500).send({errorMessage: "It's not you, it's us."});
        })
    },
    create: ( req, res ) => {  
        const dbInstance = req.app.get('db');
      const { name, price, img } = req.body;
      dbInstance.add_product([name, price, img]).then(newProduct => res.status(200).send(newProduct));
    } ,
    update: ( req, res ) => {  
        const dbInstance = req.app.get('db');
      const { id, name, price, img } = req.body;
      dbInstance.update_product([id, name, price, img]).then(updatedProduct => {
        console.log(updatedProduct)
        res.status(200).send(updatedProduct)});
    } ,
    delete: ( req, res ) => {  
        const dbInstance = req.app.get('db');
      const { id } = req.body;
      dbInstance.nix_product([id]).then(() => res.status(200).send("Product deleted"));
    } 
} 