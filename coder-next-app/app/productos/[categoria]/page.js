import ProductsList from "@/app/components/products/ProductList"
import { Suspense } from "react"

export const generateMetadata = async ({params}) => {
    return {
        title : 'Commerce - ' + params.categoria
    }
}

const Productos = ({params}) => {
    const { categoria } = params

    return (
        <div className="py-10">
            <h2 className="text-4xl font-bold">Productos</h2>
            <hr/>

            <Suspense fallback={<div>Cargando Productos...</div>}>
                <ProductsList categoria={categoria} />
            </Suspense>            
        </div>
    )
}

export default Productos