"use client"
import Image from "next/image"
import IconHamburguer from "../../assets/img/icon-hamburguer.svg"
import MenuList from "./MenuList"
import { useState } from "react"

const Menu = () => {
    const [open, setOpen] = useState(false)

    const handleMenu = () => {
        setOpen(!open)
    }

    return (
        <>
            <div onClick={handleMenu}>
                <Image
                    alt="Hamburguer menu Icon"
                    src={IconHamburguer}
                    width={48}
                    height={48}
                    className="invert hover:cursor-pointer"
                />
            </div>

            <MenuList open={open} setOpen={setOpen}/>
        </>
    )
}

export default Menu

