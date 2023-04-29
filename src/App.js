import SidePanel from "./components/SidePanel";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="flex">

        {/* Side Panel */}
        <div className="h-screen w-auto bg-yellow-500">
          <SidePanel />
        </div>

        {/* Main */}
        <div className="flex h-screen w-full flex-col">

          {/* Header */}
          <div className="flex min-h-[50vh] h-min bg-paper-pattern bg-blend-multiply">
            <div className="backdrop-filter backdrop-blur-lg h-full w-full flex justify-center items-center">
              <div className="w-60 h-60 bg-blue-500 rounded-full animate-blob translate-x-5 animation-delay-4000 filter blur-md opacity-50 shadow-lg mix-blend-multiply shadow-white"></div>
              <div className="absolute w-60 h-60 bg-pink-500 rounded-full animate-blob filter blur-md opacity-50 shadow-lg mix-blend-multiply shadow-white"></div>
              <div className="w-60 h-60 bg-orange-500 rounded-full animate-blob animation-delay-2000 filter blur-md opacity-50 shadow-lg mix-blend-multiply shadow-white"></div>
              <div className="absolute text-center text-white">
                <h1 className="text-8xl font-light">SOCIAL FLOW</h1>
                <h3 className="">I am a catchy slogan...</h3>
              </div>

            </div>
          </div>

          {/* Body */}
          <div className="h-full bg-purple-300">

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;