"use client"

import { useCartContext } from "@/app/contexts/CartContext"


const ProductDetail = (item) => {
    const { addToCart } = useCartContext()

    return (
        <div>
            <button className="border boder-black/100 bg-gray-950 text-white p-4 uppercase hover:text-black hover:bg-white rounded-lg mt-10" onClick={() => addToCart(item)}>Add to cart</button>
        </div>
    )
}

export default ProductDetail