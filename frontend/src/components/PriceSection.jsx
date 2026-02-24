const PriceSection = ({ product, activeVariant, discount }) => (
    <div className="bg-white rounded-2xl border border-gray-100 p-5">
        <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-2">{product.brand}</p>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-1">{product.name}</h1>
        <p className="text-sm text-gray-400 mb-5">{activeVariant.storage} · {activeVariant.color} · {activeVariant.ram} RAM</p>
        <div className="flex items-end gap-3 mb-1">
            <span className="text-3xl font-extrabold text-gray-900 leading-none">₹{activeVariant.price.toLocaleString('en-IN')}</span>
            <span className="text-base text-gray-400 line-through mb-0.5">₹{activeVariant.mrp.toLocaleString('en-IN')}</span>
            {discount > 0 && <span className="text-sm font-bold text-emerald-600 mb-0.5">{discount}% off</span>}
        </div>
        <p className="text-xs text-gray-400">Inclusive of all taxes</p>
    </div>
)

export default PriceSection
