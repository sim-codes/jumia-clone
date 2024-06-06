export default function CreateAccount(){
    return(
        <div className="div">
            <div className="flex items-center justify-center flex-col gap-2 text-center">
                <h1 className="font-bold">Create Account</h1>
                <p className="text-sm px-6">Sign up to Jumia</p>
            </div>
            <div className="flex items-center justify-center flex-col gap-2">
                <div className="relative">
                    <input type="email" className="border-2 min-w-64 md:w-96 p-3" name="" id="" placeholder="Email*" />
                    <a href="#" className="absolute text-primary font-bold right-2 top-3.5">Edit</a>
                </div>
                <input type="password" className="border-2 min-w-64 md:w-96 p-3" name="" id="" placeholder="Password*" />
                <input type="password" className="border-2 min-w-64 md:w-96 p-3" name="" id="" placeholder="Confirm Password*" />
                <a href="/identification" className="bg-primary text-white text-center font-bold p-3 rounded shadow-md md:w-96 min-w-64 mt-10">Sign Up</a>
                <a href="#" className="text-primary font-bold">Forgot your password?</a>
            </div>
        </div>
    )
}