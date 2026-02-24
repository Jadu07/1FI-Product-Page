import { useNavigate } from 'react-router-dom'
import { Zap } from 'lucide-react'

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    const v = product.variants?.find(v => v.isDefault) ?? product.variants?.[0]
    const emi = product.emiPlans?.find(e => e.isRecommended) ?? product.emiPlans?.[0]
    const discount = v ? Math.round(((v.mrp - v.price) / v.mrp) * 100) : 0
    const storages = [...new Set(product.variants?.map(v => v.storage).filter(Boolean))]

    return (
        <div
            onClick={() => v?.variantSlug && navigate(`/products/${v.variantSlug}`)}
            className="bg-white rounded-xl border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer overflow-hidden flex flex-col h-full"
        >
            <div className="bg-gray-50 flex items-center justify-center p-3 sm:p-4 h-32 sm:h-48">
                {product.images?.[0]
                    ? <img src={product.images[0]} alt={product.name} className="h-full w-full object-contain" />
                    : <span className="text-2xl sm:text-4xl">📱</span>}
            </div>

            <div className="p-2 sm:p-3 border-t border-gray-50 flex-1 flex flex-col">
                <p className="text-[9px] sm:text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-0.5">{product.brand}</p>
                <h3 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2 sm:line-clamp-1 mb-1.5 sm:mb-2">{product.name}</h3>

                <div className="flex flex-wrap gap-1 mb-1.5 sm:mb-2">
                    {storages.map(s => <span key={s} className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded whitespace-nowrap">{s}</span>)}
                </div>

                <div className="mt-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5 sm:mb-2 items-start gap-0.5 sm:gap-0">
                        <div className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
                            <span className="text-xs sm:text-sm font-bold text-gray-900">₹{v?.price.toLocaleString('en-IN')}</span>
                            {discount > 0 && <span className="text-[9px] sm:text-[10px] text-gray-400 line-through">₹{v?.mrp.toLocaleString('en-IN')}</span>}
                        </div>
                        {discount > 0 && <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-600">{discount}% off</span>}
                    </div>

                    {emi && (
                        <div className="flex items-start sm:items-center gap-1 sm:gap-1.5 text-[9px] sm:text-[11px] text-gray-500 leading-tight">
                            <Zap size={10} className="text-emerald-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                            <span>EMI from <span className="font-semibold text-gray-700 block sm:inline">₹{emi.monthlyAmount.toLocaleString('en-IN')}/mo</span></span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductCard