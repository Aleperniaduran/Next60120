"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import AddToCartButton from "@/app/components/ui/AddToCartButton"
import { db } from "@/app/firebase/config"
import { doc, getDoc} from "firebase/firestore"

const getProduct = async (id) => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc( docRef )

    return docSnapshot.data()
}

const Detail = async ({ params }) => {
    const { id } = params
    const router = useRouter()
    const item = await getProduct( id )

    return (
        <div className="container m-auto py-24">
            <h2 className="text-4xl text-cyan-500 font-bold mb-10">Detalle del producto</h2>

            <div className="flex gap-10 shadow-lg rounded-lg p-6">
                <div className="w-1/3">
                    <Image
                        alt={item.title}
                        src={`/imgs/products/${item.image}`}
                        width={288}
                        height={288}
                        className="w-full block"
                    />
                </div>
                <div className="w-2/3">
                    <h3 className="text-2xl font-semibold text-black pt-4">{item.title}</h3>
                    <p className="text-cyan-500 font-bold py-4 text-xl">UYU {item.price}</p>
                    <p className="text-sm">{item.description}</p>
                </div>
            </div>

            <div className="flex gap-10">
                <button className="border boder-black/100 bg-gray-950 text-white p-4 uppercase hover:text-black hover:bg-white rounded-lg mt-10" onClick={() => router.back()}>Volver</button>
                <button className="border boder-black/100 bg-gray-950 text-white p-4 uppercase hover:text-black hover:bg-white rounded-lg mt-10" onClick={() => router.back()}>Add to cart</button>
                
                 {/* <AddToCartButton /> */}
            </div>
        </div>
    )
}

export default Detail