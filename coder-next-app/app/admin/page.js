import Link from "next/link"
import Image from "next/image"
import ProductTable from "../components/products/ProductTable"
import { mockData } from "../data/products"

const Admin = ({ params }) => {
    const { categoria } = params

    const items = mockData
    return (
        <div>
            <div className="container m-auto py-24">
                <h2 className="text-4xl font-bold mb-16">Admin Pannel</h2>
                <section className="flex flex-col gap-10 justify-center items-center">
                    <div className="w-full flex justify-between">
                        <p className="basis-48 font-bold uppercase">Image</p>
                        <p className="basis-48 font-bold uppercase">Name</p>
                        <p className="basis-48 font-bold uppercase">Stock</p>
                        <p className="basis-48 font-bold uppercase">Price</p>
                        <p className="basis-48 font-bold uppercase">Edit</p>
                    </div>
                    {items.map(product => <ProductTable key={product.slug} item={product} />)}
                </section>
            </div>
        </div>
    )
}

export default Admin