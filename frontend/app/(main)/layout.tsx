import Image from "next/image";
import Nav from "@/app/ui/Nav";


export default function AuthLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
   }>) {
    return (
        <main className="min-h-screen bg-[#20AC76]">
            <div className="flex justify-center">
                <Image src={"/TW-brands-top-strip_BINATONE.gif"} width={1170} height={100} className="" alt="Jumia Logo" />
            </div>

            <Nav />
            
            {children}
        </main>
    )
}
