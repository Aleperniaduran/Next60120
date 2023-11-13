"use client"
import Link from "next/link"


const MenuList = ({open, setOpen}) => {

    const handleCLose = () => setOpen(false)

    return (
            <div className={`${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all fixed inset-0 bg-black/75 flex justify-end`}>
                <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-950`}>
                    <div 
                    className="text-white text-right p-6 text-3xl hover:cursor-pointer w-fit ml-auto"
                    onClick={()=>{setOpen(false)}}
                    >
                        X
                    </div>
                    <nav className="flex flex-col gap-4 px-4 text-white">
                        <Link onClick={handleCLose} href={"/"}>Inicio</Link>
                        <Link onClick={handleCLose} href={"/contact"}>Contacto</Link>
                    </nav>
                </aside>
            </div>
    )
}

export default MenuList

