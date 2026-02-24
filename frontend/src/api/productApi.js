const BASE_URL = 'http://localhost:3000/api'

export const getAllProducts = async () => {
    const res = await fetch(`${BASE_URL}/products`)
    if (!res.ok) throw new Error('Failed to fetch products')
    return res.json()
}

export const getProductByVariantSlug = async (variantSlug) => {
    const res = await fetch(`${BASE_URL}/products/variants/${variantSlug}`)
    if (!res.ok) throw new Error('Variant not found')
    return res.json()
}
