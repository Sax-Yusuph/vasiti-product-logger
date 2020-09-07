var Product = require('../models/product');

//Simple version, without validation or sanitation
exports.getAllProducts = function (req, res) {
    res.send({"desc": "All Products", "type": "Get"});
};

exports.AddProduct = function (req, res) {
      const file = req.files.file;
      if(file){
          file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
            if (err) {
              console.error(err);
              res.status(500).send(err);
            }
          });
        }
    //    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });

    var product = new Product(
        {"size":Number(req.body.size),
        "color":req.body.color,
        "quantity":Number(req.body.quantity),
        "images":[req.files[0], req.files.file[1]],
        "price":req.body.price}
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};