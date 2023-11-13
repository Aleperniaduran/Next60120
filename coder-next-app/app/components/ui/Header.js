import Image from "next/image"
import UcLogo from "../../assets/img/uc-white-logo.png"
import Menu from "./Menu"

const Header = () => {
    return (
        <header className="w-full bg-gray-950">
            <div className="container m-auto py-4 flex justify-between items-center">
                <Image
                    alt="UC Logo"
                    src={UcLogo}
                    width={180}
                    height={50}
                />
                <Menu />

            </div>
        </header>
    )
}

export default Header