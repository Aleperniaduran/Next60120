import Image from "next/image"
import UcLogo from "../../assets/img/uc-white-logo.png"
import Link from "next/link"

const Footer = () => {
    return (
        <div className="w-full bg-gray-950">
            <footer className=" container m-auto text-white py-10 flex flex-col gap-8 md:flex-row md:gap-0 justify-between">
                <div className="flex-1 mr-4">
                    <Image
                        alt="UC Logo"
                        src={UcLogo}
                        width={180}
                        height={50}
                    />
                </div>
                <div className="flex flex-col gap-4 flex-1 mr-4">
                    <h3>Column 1 content</h3>
                    <div className="flex flex-col gap-4 text-white">
                        <Link href={"#"}>Enlace 1</Link>
                        <Link href={"#"}>Enlace 2</Link>
                        <Link href={"#"}>Enlace 3</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 flex-1">
                    <h3>Column 2 content</h3>
                    <div className="flex flex-col gap-4 text-white">
                        <Link href={"#"}>Enlace 1</Link>
                        <Link href={"#"}>Enlace 2</Link>
                        <Link href={"#"}>Enlace 3</Link>
                    </div>
                </div>
            </footer>
        </div>

    );
};

export default Footer;
