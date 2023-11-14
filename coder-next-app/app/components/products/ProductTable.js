import Image from "next/image"

const ProductTable = ({ item }) => {
    return (
        <article className="flex items-center w-full justify-between">
            <Image
                alt={item.title}
                src={`/imgs/products/${item.image}`}
                width={192}
                height={192}
                className="basis-48"
            />
            <p className="text-sm basis-48">{item.title}</p>
            <p className="basis-48">{item.inStock}</p>
            <p className="basis-48">{item.price} UYU</p>
            <div className="basis-48 flex gap-2">
                <button className="bg-gray-950 text-white p-2 rounded-lg">Edit</button>
                <button className="bg-red-700 text-white p-2 rounded-lg">Delete</button>
            </div>
        </article>
    )
}

export default ProductTable