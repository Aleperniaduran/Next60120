import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/app/firebase/config"
import { mockData } from "../../data/products"
import ProductCard from "@/app/components/products/ProductCard"

const getProducts = async (categoria) => {
    const productsRef = collection(db, 'productos')

    const q = categoria === "todos"
        ? productsRef
        : query(productsRef, where('type', '==', categoria))

    const querySnapshot = await getDocs( q )

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

const ProductsList = async ({ categoria }) => {
    const items = await getProducts(categoria)

    return (
        <section className="flex justify-start items-center gap-10 flex-wrap py-16">
            {items.map(product => <ProductCard key={product.slug} item={product} />)}
        </section>
    )
}

export default ProductsList