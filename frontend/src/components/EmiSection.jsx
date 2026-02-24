import { useState } from 'react'
import { Tag } from 'lucide-react'

const EmiSection = ({ emiPlans, onPlanChange }) => {
    const [selected, setSelected] = useState(0)
    const plan = emiPlans[selected]

    const handleChange = (i) => {
        setSelected(i)
        onPlanChange?.(emiPlans[i])
    }

    if (!emiPlans?.length) return null

    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Choose EMI Tenure</p>
            <div className="flex flex-col gap-2">
                {emiPlans.map((p, i) => (
                    <label key={i} onClick={() => handleChange(i)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl border-2 cursor-pointer transition-all duration-150 ${selected === i ? 'border-emerald-500 bg-emerald-50' : 'border-gray-100 hover:border-gray-200'}`}>
                        <div className="flex items-center gap-3">
                            <input type="radio" name="emi" checked={selected === i} onChange={() => handleChange(i)} className="accent-emerald-500 w-4 h-4" />
                            <div>
                                <p className="text-sm font-semibold text-gray-800">
                                    ₹{p.monthlyAmount.toLocaleString('en-IN')}
                                    <span className="text-gray-400 font-normal text-xs"> / month × {p.tenureMonths} months</span>
                                </p>
                                <p className="text-[11px] text-gray-400 mt-0.5 font-medium">{p.provider}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${p.interestRate === 0 ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                {p.interestRate === 0 ? '0% Interest' : `${p.interestRate}% p.a.`}
                            </span>
                            <span className="text-[10px] text-gray-400">Total: ₹{p.totalAmount.toLocaleString('en-IN')}</span>
                        </div>
                    </label>
                ))}
            </div>

            {plan?.cashback > 0 && (
                <div className="mt-3 bg-emerald-50 border border-emerald-100 rounded-xl px-3.5 py-2.5 flex items-start gap-2">
                    <Tag size={12} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-emerald-700 font-medium">
                        ₹{plan.cashback.toLocaleString('en-IN')} instant cashback — {plan.cashbackNote}
                    </p>
                </div>
            )}
        </div>
    )
}

export default EmiSection
