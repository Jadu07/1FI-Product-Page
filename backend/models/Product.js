const mongoose = require('mongoose')

const VariantSchema = new mongoose.Schema({
    color: { type: String },
    ram: { type: String },
    storage: { type: String },
    finish: { type: String },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    images: [{ type: String }],
    stock: { type: Number, default: 0 },
    isDefault: { type: Boolean, default: false },
})

const EmiPlanSchema = new mongoose.Schema({
    provider: { type: String, required: true },
    tenureMonths: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    monthlyAmount: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    cashback: { type: Number, default: 0 },
    cashbackNote: { type: String },
    isRecommended: { type: Boolean, default: false },
})

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    images: [{ type: String }],

    variants: [VariantSchema],
    emiPlans: [EmiPlanSchema],
}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema)
