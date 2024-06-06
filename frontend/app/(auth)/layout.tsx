import Image from "next/image";


export default function AuthLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
   }>) {
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <Image src={"/myjumia-top-logo.png"} width={100} height={100} className="my-10" alt="Jumia Logo" />
            {children}

            <div className="flex items-center justify-center flex-col gap-2 absolute bottom-10 min-w-64 md:w-96">
                <p className="text-center text-wrap text-sm my-2 px-6">
                    For further support, you may visit the Help Center or contact our customer services team.
                </p>
                <Image src={"/myjumia-bottom-logo.png"} width={100} height={100} alt="Jumia Logo" />
            </div>
        </main>
    )
}
