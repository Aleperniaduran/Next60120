import Image from "next/image"
import Link from "next/link"
import ciberlunesImg from "../app/assets/img/ciberlunes.webp"
import tvsImg from "../app/assets/img/tvs-img.webp"
import paymentImg from "../app/assets/img/payment.png"

export default function Home() {
  return (
    <main className="container m-auto py-16">
      <div>
      <Image
          alt="UC Logo"
          src={ciberlunesImg}
          width={1000}
          height={500}
          className="w-full"
        />
      </div>
      <div className="flex">
        <Image
          alt="UC Logo"
          src={tvsImg}
          width={1000}
          height={500}
          className="w-2/3"
        />
        <div className="w-1/3 bg-gray-950 flex items-center">
          <p className="text-white font-semibold text-4xl p-10 text-center">Tenemos las mejores marcas del mercado de Televisores HDR</p>
        </div>
      </div>

      <div className="flex">
        <div className="w-1/3 bg-gray-950 flex items-center">
          <p className="text-white font-semibold text-4xl p-10 text-center">Ofertas especiales si pagas con nuestra tarjeta seleccionada del mes!</p>
        </div>
        <Image
          alt="UC Logo"
          src={paymentImg}
          width={1000}
          height={500}
          className="w-2/3"
        />
      </div>
    </main>
  )
}
