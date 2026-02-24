import { Search, Briefcase, CreditCard, User } from 'lucide-react'

const categories = ['Mobiles', 'Electronics', 'TV & Appliances', 'Kitchen & Home', 'Health & Wellness', 'Fashion', 'Baby & Kids', 'Sports & Fitness']

const Navbar = () => (
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
                <a key={cat} href="notfound" className="px-4 py-2.5 text-sm font-medium text-gray-600 whitespace-nowrap hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-500 transition-colors">{cat}</a>
            ))}
        </nav>
    </header>
)

export default Navbar
