import Image from "next/image"

const ProductCard = ({ item }) => {
    return (
        <article className="basis-72 shadow-lg rounded-lg">
            <div className="flex flex-justify-center items-center min-h-[280px]">
            <Image
                alt={item.title}
                src={`/imgs/products/${item.image}`}
                width={280}
                height={280}
            />
            </div>
            
            <div className="p-4 border-t border-gray-200">
                <h4 className="text-sm min-h-[60px]">{item.title}</h4>
                <p className="text-2xl font-semibold pt-4">{item.price} UYU</p>
            </div>
        </article>
    )
}

export default ProductCard