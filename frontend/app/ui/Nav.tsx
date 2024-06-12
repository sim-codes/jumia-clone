import Image from "next/image"


export default function Nav() {
    return (
        <div className="">
            <div className="flex flex-row items-center gap-36 bg-[#f1f1f2] h-7 py-4 md:px-72">
                <a href="" className="flex gap-1 text-primary text-xs font-bold hover:underline">
                    <Image src="/myjumia-top-logo.png" width={15} height={20} alt="Jumia Logo" />
                    Sell on Jumia
                </a>

                <Image src="/jumia-logo.png" width={70} height={20} alt="Jumia Logo" />
            </div>
            <div className="flex items-center justify-between bg-white h-20 md:px-72 w-full">
                <div className="w-1/6 ">
                    <Image src="/jumia-logo.png" width={150} height={100} alt="Jumia Logo" />
                </div>

                <div className="flex flex-row items-center gap-5 w-4/6">
                    <input type="text" placeholder="Search products, brands and categories" className="rounded border-2 py-2 w-3/4 text-sm pl-8"/>
                    <button className="bg-primary shadow-lg px-5 py-2 rounded text-white text-sm">SEARCH</button>
                </div>

                <div className="flex gap-5 font-bold">
                    <button>Account</button>
                    <button>Help</button>
                    <a href="#">Cart</a>
                </div>
            </div>
        </div>
    )
}