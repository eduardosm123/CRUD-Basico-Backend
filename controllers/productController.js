const { Product } = require('../models/Product');

const ProductController = {
    create: async (req, res) => {
        try {
            const product = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description ? req.body.description : '',
                category: req.body.category
            };

            const response = await Product.create(product);

            res.status(201).json({
                response,
                msg: "Produto criado com sucesso"
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: "Erro ao criar produto" });
        }
    },
    getAll: async (req, res) => {
        try {
             const product = await Product.find();

             res.json(product);
        } catch (err) {
            console.error(err)
        }
    },
    get:  async (req, res) => {
        try {
            // id => URL
            const id = req.params.id;
            const product = await Product.findById(id);

            if (!product) {
                res.status(404).json({
                    msg: "Produto não encontrado"
                })
                return;
            }
            res.json(product);
        } catch (err) {
            console.error(err)
        }
    },
    delete: async (req, res) => {
        try {
            // id => URL
            const id = req.params.id;
            const product = await Product.findById(id);

            if (!product) {
                res.status(404).json({
                    msg: "Produto não encontrado"
                })
                return;
            }
            const deleteProducty = await Product.findByIdAndDelete(id);

            res.status(200).json({
                deleteProducty, msg: "Produto removido"
            })
        } catch (err) {
            console.error(err)
        }
    },
    update: async (req, res) => {
        try {
            // id => URL
            const id = req.params.id;

            const product = {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description ? req.body.description : '',
                category: req.body.category
            };

            const updateProduct = await Product.findByIdAndUpdate(id, product);

            if (!updateProduct) {
                res.status(404).json({
                    msg: "Produto não encontrado"
                })
                return;
            }
           
            res.status(200).json({ msg: "Produto atualizado com sucesso", product})
        } catch (err) {
            console.error(err)
        }
    }
      
};

module.exports = ProductController;
