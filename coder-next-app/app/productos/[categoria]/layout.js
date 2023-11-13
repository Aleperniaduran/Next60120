import Link from "next/link"

const ProductosLayout = ({children, params}) => {
    const { categoria } = params
    return (
        <div className="container m-auto flex gap-20">
            <nav className="flex flex-col gap-10 pl-6 pt-56">
                <Link className={`${categoria === "todos" ? 'font-bold' : ''}`} href={"/productos/todos"}>Todos</Link>
                <Link className={`${categoria === "tvs" ? 'font-bold' : ''}`} href={"/productos/tvs"}>TVs</Link>
                <Link className={`${categoria === "hornos" ? 'font-bold' : ''}`} href={"/productos/hornos"}>Hornos</Link>
                <Link className={`${categoria === "aires" ? 'font-bold' : ''}`} href={"/productos/aires"}>Aires</Link>
            </nav>

            {children}
        </div>
    )
}

export default ProductosLayout