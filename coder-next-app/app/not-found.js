"use client"

import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()

    return (
        <div className="container m-auto py-36">
            <h2 className="text-4xl font-bold">404 PAGE NOT FOUND.</h2>
            <hr />

            <button className="border boder-black/100 bg-gray-950 text-white p-4 uppercase hover:text-black hover:bg-white rounded-lg mt-10" onClick={() => router.back()}>Volver</button>
        </div>
    )
}

export default NotFound