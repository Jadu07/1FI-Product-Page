import { useState, useEffect } from 'react'
import { getProductByVariantSlug } from '../api/productApi'

const useProduct = (variantSlug) => {
    const [product, setProduct] = useState(null)
    const [activeVariant, setActiveVariant] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!variantSlug) return
        setLoading(true)
        setError(null)
        getProductByVariantSlug(variantSlug)
            .then(({ product, activeVariant }) => {
                setProduct(product)
                setActiveVariant(activeVariant)
            })
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [variantSlug])

    return { product, activeVariant, setActiveVariant, loading, error }
}

export default useProduct
