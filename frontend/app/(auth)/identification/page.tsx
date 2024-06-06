import Image from "next/image";


export default function Identification() {
    return (
    <div className="flex items-center flex-col gap-10 h-auto max-w-md">
        <div className="flex items-center justify-center flex-col gap-2 text-center">
            <h1 className="font-bold">Welcome to Jumia</h1>
            <p className="text-sm px-6">Type your e-mail or phone number to log in or create a Jumia account</p>
        </div>

        <div className="flex items-center justify-center flex-col gap-2">
            <input type="email" className="border-2 min-w-64 md:w-96 p-3" name="" id="" placeholder="Email or Mobile Number*" />
            <a href="/sign-in" className="bg-primary text-white text-center font-bold p-3 rounded shadow-md md:w-96 min-w-64 mt-10">Continue</a>

            <p className="text-center text-sm my-2">By continuing you agree to Jumia's<br /> <a href="#" className="text-primary">Terms and Conditions</a></p>

            <button className="bg-blue-700 text-white font-bold p-3 rounded shadow-md min-w-64 md:w-96 mt-10">
                Log in with Facebook
            </button>
        </div>
    </div>
    );
  }
  