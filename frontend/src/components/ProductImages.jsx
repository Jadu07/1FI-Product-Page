import { useState } from 'react'

const ProductImages = ({ images, productName }) => {
    const [mainImg, setMainImg] = useState(0)

    return (
        <div className="lg:w-[520px] flex-shrink-0 w-full mb-4 lg:mb-0">
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:h-[540px]">
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden h-[350px] sm:h-[450px] lg:h-auto order-1 lg:order-2 p-4">
                    <img src={images[mainImg]} alt={productName}
                        className="max-h-full max-w-full object-contain transition-all duration-300" />
                </div>

                <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden order-2 lg:order-1 pb-2 lg:pb-0 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {images.map((img, i) => (
                        <button key={i} onClick={() => setMainImg(i)}
                            className={`w-14 sm:w-16 h-14 sm:h-16 rounded-xl border-2 bg-white overflow-hidden shrink-0 transition-all duration-200 ${mainImg === i ? 'border-emerald-500 shadow-sm shadow-emerald-100' : 'border-gray-100 hover:border-gray-300'}`}>
                            <img src={img} alt="" className="w-full h-full object-contain p-1.5 sm:p-2" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductImages
