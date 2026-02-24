const VariantSelector = ({ storages, colors, activeVariant, onSelect }) => (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-5">
        <div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Storage</p>
            <div className="flex gap-2 flex-wrap">
                {storages.map(s => (
                    <button key={s} onClick={() => onSelect(activeVariant.color, s)}
                        className={`px-4 py-2 text-sm rounded-xl border-2 font-semibold transition-all duration-150 ${activeVariant.storage === s ? 'border-emerald-500 text-emerald-700 bg-emerald-50' : 'border-gray-100 text-gray-500 hover:border-gray-300'}`}>
                        {s}
                    </button>
                ))}
            </div>
        </div>
        <div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Color</p>
            <div className="flex gap-2 flex-wrap">
                {colors.map(c => (
                    <button key={c} onClick={() => onSelect(c, activeVariant.storage)}
                        className={`px-4 py-2 text-sm rounded-xl border-2 font-semibold transition-all duration-150 ${activeVariant.color === c ? 'border-emerald-500 text-emerald-700 bg-emerald-50' : 'border-gray-100 text-gray-500 hover:border-gray-300'}`}>
                        {c}
                    </button>
                ))}
            </div>
        </div>
    </div>
)

export default VariantSelector
