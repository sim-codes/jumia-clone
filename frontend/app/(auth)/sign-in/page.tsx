import Image from "next/image";


export default function SignIn() {
    return (
        <div className="flex items-center flex-col gap-10 h-auto max-w-md">
            <div className="flex items-center justify-center flex-col gap-2 text-center">
                <h1 className="font-bold">Welcome back!</h1>
                <p className="text-sm px-6">Log back into your Jumia account</p>
            </div>

            <div className="flex items-center justify-center flex-col gap-2">
                <div className="relative">
                    <input type="email" className="border-2 min-w-64 md:w-96 p-3" name="" id="" placeholder="simcodes@email.com" disabled />
                    <a href="/identification" className="absolute text-primary font-bold right-2 top-3.5">Edit</a>
                </div>
                <input type="password" className="border-2 min-w-64 md:w-96 p-3" name="" id="" placeholder="Password" />
                <a href="/identification" className="bg-primary text-white text-center font-bold p-3 rounded shadow-md md:w-96 min-w-64 mt-10">Login</a>

                <a href="#" className="text-primary font-bold">Forgot your password?</a>
            </div>
        </div>
    );
  }
  