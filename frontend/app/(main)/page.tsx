import HomeMenu from "../ui/HomeMenu";

export default function Home() {
  return (
    <div className="z-10 max-w-full my-4 md:mx-72 items-center justify-between font-mono text-sm md:flex md:flex-col md:gap-6">
        <div className="flex justify-between w-full gap-3">
          <div className="bg-white rounded p-3 w-1/6">
            <HomeMenu />
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-400 w-4/6 h-auto">
            <h1 className="font-bold text-2xl">Welcome to Jumia</h1>
            <p className="text-gray-600">Buy anything you want from our store</p>
          </div>

          <div className="grid grid-flow-row gap-5 grid-rows-2 w-1/6">
            <div className="bg-white rounded p-3">
            </div>
            <div className="bg-black rounded"></div>
          </div>
        </div>
        

        <div className="bg-white rounded p-3 grid grid-flow-col grid-cols-6 gap-3 w-full">
          <div className="flex flex-col items-center">
            <div className="bg-green-500 h-44 w-44"></div>
            <h3>Clearance Sale</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 h-44 w-44"></div>
            <h3>Clearance Sale</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 h-44 w-44"></div>
            <h3>Clearance Sale</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 h-44 w-44"></div>
            <h3>Clearance Sale</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 h-44 w-44"></div>
            <h3>Clearance Sale</h3>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 h-44 w-44"></div>
            <h3>Clearance Sale</h3>
          </div>
        </div>
    </div>
  );
}
