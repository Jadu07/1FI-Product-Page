import { useEffect, useState } from 'react'
import { getAllProducts } from '../api/productApi'
import ProductCard from '../components/ProductCard'
import { Loader2 } from 'lucide-react'

const ProductListPage = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getAllProducts().then(setProducts).catch(e => setError(e.message)).finally(() => setLoading(false))
    }, [])

    if (loading) return <div className="flex items-center justify-center min-h-[60vh] text-emerald-500"><Loader2 size={36} className="animate-spin" /></div>
    if (error) return <div className="flex items-center justify-center min-h-[60vh] text-red-500 text-sm">⚠️ {error}</div>

    return (
        <main className="bg-gray-50 min-h-screen">
            <div className="bg-white border-b border-gray-100 px-8 py-2.5 text-xs text-gray-400">
                <span className="hover:text-emerald-600 cursor-pointer">Home</span>
                <span className="mx-1.5">›</span>
                <span className="text-gray-600 font-medium">Smart Phones</span>
            </div>

            <div className="max-w-7xl mx-auto px-8 py-8">
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-gray-800">Smart Phones on EMI</h1>
                    <p className="text-sm text-gray-400 mt-1">{products.length} products available</p>
                </div>

                {products.length === 0
                    ? <p className="text-center text-gray-400 py-20">No products found.</p>
                    : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {products.map(p => <ProductCard key={p._id} product={p} />)}
                    </div>
                }
            </div>
        </main>
    )
}

export default ProductListPage