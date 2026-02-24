import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Loader2, ShieldCheck, Truck, RefreshCw, Tag, ChevronRight } from 'lucide-react'
import useProduct from '../hooks/useProduct'
import ProductImages from '../components/ProductImages'
import PriceSection from '../components/PriceSection'
import VariantSelector from '../components/VariantSelector'
import EmiSection from '../components/EmiSection'

const ProductPage = () => {
    const { variantSlug } = useParams()
    const navigate = useNavigate()
    const { product, activeVariant, loading, error } = useProduct(variantSlug)
    const [selectedPlan, setSelectedPlan] = useState(null)

    if (loading) return <div className="flex items-center justify-center min-h-[70vh] text-emerald-500"><Loader2 size={36} className="animate-spin" /></div>
    if (error || !product || !activeVariant) return <div className="flex items-center justify-center min-h-[70vh] text-red-400 text-sm">⚠️ {error ?? 'Product not found'}</div>

    const discount = Math.round(((activeVariant.mrp - activeVariant.price) / activeVariant.mrp) * 100)
    const images = activeVariant.images?.length ? activeVariant.images : product.images
    const storages = [...new Set(product.variants.map(v => v.storage))]
    const colors = [...new Set(product.variants.map(v => v.color))]

    const selectVariant = (color, storage) => {
        const match = product.variants.find(v => v.color === color && v.storage === storage)
            ?? product.variants.find(v => v.color === color)
            ?? product.variants.find(v => v.storage === storage)
        if (match?.variantSlug) navigate(`/products/${match.variantSlug}`)
    }

    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Breadcrumb */}
            <nav className="bg-white border-b border-gray-100 px-8 py-3 text-xs text-gray-400 flex items-center gap-1.5">
                <Link to="/products" className="hover:text-emerald-600 transition-colors">Smart Phones</Link>
                <ChevronRight size={12} />
                <span>{product.brand}</span>
                <ChevronRight size={12} />
                <span className="text-gray-700 font-medium">{product.name}</span>
            </nav>

            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
                <ProductImages images={images} productName={product.name} />

                <div className="flex-1 flex flex-col gap-4 min-w-0">
                    <PriceSection product={product} activeVariant={activeVariant} discount={discount} />
                    <VariantSelector storages={storages} colors={colors} activeVariant={activeVariant} onSelect={selectVariant} />
                    <EmiSection emiPlans={product.emiPlans ?? []} onPlanChange={setSelectedPlan} />

                    <button className="w-full bg-gray-900 hover:bg-gray-700 active:scale-[0.99] text-white font-bold py-4 rounded-2xl transition-all duration-200 text-sm tracking-wide shadow-lg shadow-gray-900/10">
                        {selectedPlan ? `Buy on ${selectedPlan.tenureMonths} Months EMI · ${selectedPlan.provider}` : `Buy on EMI`}
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { icon: <Truck size={14} />, text: 'Free Delivery' },
                            { icon: <RefreshCw size={14} />, text: '2 Day Replacement' },
                            { icon: <ShieldCheck size={14} />, text: 'Secure Transaction' },
                            { icon: <Tag size={14} />, text: 'Top Brand' },
                        ].map(({ icon, text }) => (
                            <div key={text} className="flex items-center gap-2 text-xs text-gray-500 bg-white rounded-xl border border-gray-100 px-3 py-2.5">
                                <span className="text-emerald-500">{icon}</span>{text}
                            </div>
                        ))}
                    </div>

                    {product.description && (
                        <div className="bg-white rounded-2xl border border-gray-100 p-5">
                            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">About this Product</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default ProductPage