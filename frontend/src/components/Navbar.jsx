import { Search, Briefcase, CreditCard, User } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

const categories = ['All', 'Smart Phones', 'Electronics', 'TV & Appliances', 'Kitchen & Home', 'Health & Wellness', 'Fashion', 'Baby & Kids', 'Sports & Fitness']


const Navbar = () => {
    const [params] = useSearchParams()
    const active = params.get('category') ?? 'All'

    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">

            <div className="px-4 sm:px-8 py-3">
                <div className="flex items-center justify-between gap-4">
                    <a href="/products" className="text-xl sm:text-2xl font-extrabold tracking-tight flex-shrink-0">
                        <span className="text-gray-900">PAY</span>
                        <span className="text-emerald-500">FLEX</span>
                    </a>

                    <div className="hidden sm:flex flex-1 max-w-xl items-center bg-gray-100 border border-gray-200 rounded-lg overflow-hidden focus-within:bg-white focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
                        <Search size={16} className="text-gray-400 ml-3" />
                        <input type="text" placeholder="Search for TV, Mobiles & more" className="flex-1 bg-transparent px-2.5 py-2 text-sm outline-none placeholder-gray-400" />
                        <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 text-white font-medium text-sm transition-colors">
                            Search
                        </button>
                    </div>

                    <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                        <a href="notfound" className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"><Briefcase size={15} /> For Business</a>
                        <a href="notfound" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm text-emerald-600 font-medium hover:bg-emerald-50 rounded-md transition-colors"><CreditCard size={15} /> Pay EMI</a>
                        <a href="notfound" className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-sm"><User size={14} className="sm:w-4 sm:h-4" /> Sign-up</a>
                    </div>
                </div>

                <div className="mt-3.5 sm:hidden flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden focus-within:bg-white focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all">
                    <Search size={16} className="text-gray-400 ml-3 flex-shrink-0" />
                    <input type="text" placeholder="Search products..." className="flex-1 bg-transparent px-2.5 py-2.5 text-sm outline-none placeholder-gray-400" />
                </div>
            </div>

            <nav className="flex items-center gap-2.5 px-4 sm:px-8 py-2.5 sm:py-3 border-t border-gray-100 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {categories.map(cat => (
                    <Link
                        key={cat}
                        to={cat === 'All' ? '/products' : `/products?category=${encodeURIComponent(cat)}`}
                        className={`px-4 sm:px-5 py-1.5 sm:py-2 text-[13px] sm:text-sm font-medium rounded-full transition-all duration-200 ${active === cat || (cat === 'All' && !params.get('category'))
                                ? 'bg-gray-900 text-white shadow-sm'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >{cat}</Link>
                ))}
            </nav>
        </header>
    )
}

export default Navbar
