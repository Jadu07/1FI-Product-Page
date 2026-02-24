import { useState } from 'react'

const ProductImages = ({ images, productName }) => {
    const [mainImg, setMainImg] = useState(0)

    return (
        <div className="lg:w-[520px] flex-shrink-0">
            <div className="flex gap-3 h-[540px]">
                <div className="flex flex-col gap-2">
                    {images.map((img, i) => (
                        <button key={i} onClick={() => setMainImg(i)}
                            className={`w-16 h-16 rounded-xl border-2 bg-white overflow-hidden shrink-0 transition-all duration-200 ${mainImg === i ? 'border-emerald-500 shadow-sm shadow-emerald-100' : 'border-gray-100 hover:border-gray-300'}`}>
                            <img src={img} alt="" className="w-full h-full object-contain p-1.5" />
                        </button>
                    ))}
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden">
                    <img src={images[mainImg]} alt={productName}
                        className="max-h-[500px] max-w-full object-contain transition-all duration-300" />
                </div>
            </div>
        </div>
    )
}

export default ProductImages
