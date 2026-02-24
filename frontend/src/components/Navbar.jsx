import { Search, Briefcase, CreditCard, User } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

const categories = ['All', 'Smart Phones', 'Electronics', 'TV & Appliances', 'Kitchen & Home', 'Health & Wellness', 'Fashion', 'Baby & Kids', 'Sports & Fitness']


const Navbar = () => {
    const [params] = useSearchParams()
    const active = params.get('category') ?? 'All'

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">

            <div className="flex items-center gap-4 px-8 py-3">
                <a href="/products" className="text-2xl font-extrabold tracking-tight">
                    <span className="text-gray-900">PAY</span>
                    <span className="text-emerald-500">FLEX</span>
                </a>

                <div className="flex flex-1 max-w-xl items-center bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
                    <input type="text" placeholder="Search for TV, Mobiles & more" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder-gray-400" />
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 text-white">
                        <Search size={16} />
                    </button>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                    <a href="notfound" className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md"><Briefcase size={15} /> For Business</a>
                    <a href="notfound" className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-emerald-600 font-medium hover:bg-emerald-50 rounded-md"><CreditCard size={15} /> Pay EMI</a>
                    <a href="notfound" className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium bg-gray-900 text-white rounded-md hover:bg-gray-800"><User size={15} /> Sign-up</a>
                </div>
            </div>

            <nav className="flex items-center gap-1 px-8 border-t border-gray-100">
                {categories.map(cat => (
                    <Link
                        key={cat}
                        to={cat === 'All' ? '/products' : `/products?category=${encodeURIComponent(cat)}`}
                        className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${active === cat || (cat === 'All' && !params.get('category'))
                            ? 'text-emerald-600 border-emerald-500'
                            : 'text-gray-600 border-transparent hover:text-emerald-600 hover:border-emerald-500'
                            }`}
                    >{cat}</Link>
                ))}
            </nav>
        </header>
    )
}

export default Navbar
