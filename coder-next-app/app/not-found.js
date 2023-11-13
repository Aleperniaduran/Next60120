"use client"

import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()

    return (
        <div>
            PAGINA NO ENCONTRADA
            <hr />

            <button onClick={() => router.back()}>Volver</button>
        </div>
    )
}

export default NotFound