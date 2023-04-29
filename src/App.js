import SidePanel from "./components/SidePanel";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="z-20 fixed">
        <SidePanel />
      </div>

      <div className=" h-screen bg-purple-200">

        <div className="bg-paper-pattern bg-blend-multiply w-screen h-[65%]">
          <div className="flex justify-center align-top w-screen h-full backdrop-filter backdrop-blur-md">
            <div className="relative flex border border-black items-center w-full justify-center">
              <div className="w-60 h-60 bg-blue-500 rounded-full animate-blob translate-x-5 animation-delay-4000 filter blur-md opacity-50 shadow-lg mix-blend-multiply shadow-white"></div>
              <div className="absolute w-60 h-60 bg-pink-500 rounded-full animate-blob filter blur-md opacity-50 shadow-lg mix-blend-multiply shadow-white"></div>
              <div className="w-60 h-60 bg-orange-500 rounded-full animate-blob animation-delay-2000 filter blur-md opacity-50 shadow-lg mix-blend-multiply shadow-white"></div>
              <h1 className="absolute text-8xl text-white font-light">SOCIAL FLOW</h1>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="m-3">
              {/* Cards go here */}
              <Card />
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default App;
