import ProductCard from "@/app/components/products/ProductCard"
import { mockData } from "../../data/products"

export const generateMetadata = async ({params}) => {
    return {
        title : 'Commerce - ' + params.categoria
    }
}

const Productos = ({params}) => {
    const { categoria } = params

    const items = categoria === 'todos' ? mockData : mockData.filter(product => product.type === categoria)

    return (
        <div className="py-10">
            <h2 className="text-4xl font-bold">Productos</h2>
            <hr/>

            <section className="flex justify-start items-center gap-10 flex-wrap py-16">
                { items.map(product => <ProductCard key={product.slug} item={product} />) }
            </section>
        </div>
    )
}

export default Productos