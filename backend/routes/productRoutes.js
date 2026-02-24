const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


router.get('/variants/:variantSlug', async (req, res) => {
    try {
        const product = await Product.findOne({ 'variants.variantSlug': req.params.variantSlug })
        if (!product) return res.status(404).json({ error: 'Variant not found' })
        const activeVariant = product.variants.find(
            v => v.variantSlug === req.params.variantSlug
        )
        res.json({ product, activeVariant })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router


// demo http://localhost:3000/api/products/variants/apple-iphone-17-pro-desert-titanium-512-gb-smart-phones