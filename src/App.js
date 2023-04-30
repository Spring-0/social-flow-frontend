import SidePanel from "./components/panels/SidePanel";
import Card from "./components/cards/Card";
import Panel from "./components/panels/Panel";
import ReviewCard from "./components/cards/ReviewCard";
import SlideshowPanel from "./components/panels/SlideshowPanel";

function App() {
  return (
    <div className="App">
      <div className="flex">

        {/* Side Panel */}
        <div>
          <SidePanel />
        </div>

        {/* Main */}
        <div className="h-screen w-screen">


          <div className="flex h-full w-full flex-col overflow-x-hidden">
            {/* Header */}
            <div className="flex min-h-[50vh] h-min bg-paper-pattern bg-blend-multiply">
              <div className="relative backdrop-filter backdrop-blur-lg h-full w-full flex justify-center items-center">

                {/* Background Circles */}
                <div className="w-60 h-60 bg-blue-500 rounded-full animate-blob translate-x-5 animation-delay-4000 filter blur-md opacity-50 shadow-lg mix-blend-multiply shadow-white"></div>
                <div className="absolute w-60 h-60 bg-pink-500 rounded-full animate-blob filter blur-md opacity-50 shadow-lg mix-blend-multiply shadow-white"></div>
                <div className="w-60 h-60 bg-orange-500 rounded-full animate-blob animation-delay-2000 filter blur-md opacity-50 shadow-lg mix-blend-multiply shadow-white"></div>

                {/* Header text */}
                <div className="absolute text-center text-white">
                  <h1 className="text-8xl font-light">SOCIAL FLOW</h1>
                  <h1 className="">I am a catchy slogan...</h1>
                </div>

                {/* Get started button(s) */}
                <div className="fixed top-0 right-0 flex p-4">
                  <button className='rounded-full bg-purple-700 text-white text-center p-2 px-4 hover:bg-purple-600'>Get Started</button>
                </div>

              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col bg-purple-300 flex-1">

              <div className="flex justify-center">
                <div className="my-20 pb-3 px-10 backdrop-filter bg-paper-pattern rounded-xl shadow-white shadow-2xl flex flex-col">
                  <Panel
                    title="Managing your social media accounts just got easier"
                    tagline="Elevate your social media game with Social-Flow"
                    cards={[
                      <Card
                        key="features"
                        title="Features"
                        content1={
                          <div className="text-start">
                            <ul>
                              <li><a className="">Social Media Account Integration</a></li>
                              <li><a className="">Data Analytics</a></li>
                              <li><a className="">Competitor Analysis</a></li>
                              <li><a className="">Customizable Reports</a></li>
                              <li><a className="">Team Collaboration</a></li>
                              <li><a className="">Social Listening</a></li>
                            </ul>
                          </div>
                        }
                        footer={
                          <a href="#">Learn more...</a>
                        }
                      />,
                      <Card
                        key="benefits"
                        title="Benefits"
                        content1={
                          <div className="text-start">
                            <ul>
                              <li><a className="">Social Media Account Integration</a></li>
                              <li><a className="">Data Analytics</a></li>
                              <li><a className="">Competitor Analysis</a></li>
                              <li><a className="">Customizable Reports</a></li>
                              <li><a className="">Team Collaboration</a></li>
                              <li><a className="">Social Listening</a></li>
                            </ul>
                          </div>
                        }
                        footer={
                          <a href="#">Learn more...</a>
                        }
                      />,
                      <Card
                        key="whyChooseUs"
                        title="Why Choose Us?"
                        content1={
                          <div className="text-start">
                            <ul>
                              <li><a className="">Social Media Account Integration</a></li>
                              <li><a className="">Data Analytics</a></li>
                              <li><a className="">Competitor Analysis</a></li>
                              <li><a className="">Customizable Reports</a></li>
                              <li><a className="">Team Collaboration</a></li>
                              <li><a className="">Social Listening</a></li>
                            </ul>
                          </div>
                        }
                        footer={
                          <a href="#">Learn more...</a>
                        }
                      />
                    ]}

                  />
                </div>
              </div>
            </div>



            <div className="w-full h-full">
              <SlideshowPanel
                title="Real stories from real customers"
                tagline="See what our clients have to say about us"
                cards={[
                  <ReviewCard
                    author="Taylor"
                    text="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ligula tortor, rhoncus interdum dui commodo at. Phasellus ut mattis lectus. Nunc eget nisl lacus. Vivamus ut ligula eleifend neque aliquet fringilla."
                    rating={5}
                  />,
                  <ReviewCard
                    author="John"
                    text="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ligula tortor, rhoncus interdum dui commodo at. Phasellus ut mattis lectus. Nunc eget nisl lacus. Vivamus ut ligula eleifend neque aliquet fringilla."
                    rating={5}
                  />,
                  <ReviewCard
                    author="Jay"
                    text="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ligula tortor, rhoncus interdum dui commodo at. Phasellus ut mattis lectus. Nunc eget nisl lacus. Vivamus ut ligula eleifend neque aliquet fringilla."
                    rating={5}
                  />,
                  <ReviewCard
                    author="Stephanie"
                    text="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ligula tortor, rhoncus interdum dui commodo at. Phasellus ut mattis lectus. Nunc eget nisl lacus. Vivamus ut ligula eleifend neque aliquet fringilla."
                    rating={5}
                  />,
                  <ReviewCard
                    author="Omar"
                    text="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ligula tortor, rhoncus interdum dui commodo at. Phasellus ut mattis lectus. Nunc eget nisl lacus. Vivamus ut ligula eleifend neque aliquet fringilla."
                    rating={5}
                  />,
                  <ReviewCard
                    author="Alex"
                    text="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius ligula tortor, rhoncus interdum dui commodo at. Phasellus ut mattis lectus. Nunc eget nisl lacus. Vivamus ut ligula eleifend neque aliquet fringilla."
                    rating={5}
                  />
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;