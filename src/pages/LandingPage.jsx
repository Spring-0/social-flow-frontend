import React from 'react'
import SidePanel from "../components/panels/SidePanel";
import Card from "../components/cards/Card";
import Panel from "../components/panels/Panel";
import ReviewCard from "../components/cards/ReviewCard";
import SlideshowPanel from "../components/panels/SlideshowPanel";

export default function LandingPage() {
    return (
        <>
            <div className="flex">

                {/* Side Panel */}
                <div>
                    <SidePanel />
                </div>

                {/* Main */}
                <div className="w-screen h-screen">


                    <div className="flex flex-col w-full h-full overflow-x-hidden">
                        {/* Header */}
                        <div className="flex min-h-[50vh] h-min bg-paper-pattern bg-blend-multiply">
                            <div className="relative flex items-center justify-center w-full h-full backdrop-filter backdrop-blur-lg">

                                {/* Background Circles */}
                                <div className="translate-x-5 bg-blue-500 rounded-full shadow-lg opacity-50 w-60 h-60 animate-blob animation-delay-4000 filter blur-md mix-blend-multiply shadow-white"></div>
                                <div className="absolute bg-pink-500 rounded-full shadow-lg opacity-50 w-60 h-60 animate-blob filter blur-md mix-blend-multiply shadow-white"></div>
                                <div className="bg-orange-500 rounded-full shadow-lg opacity-50 w-60 h-60 animate-blob animation-delay-2000 filter blur-md mix-blend-multiply shadow-white"></div>

                                {/* Header text */}
                                <div className="absolute text-center text-white">
                                    <h1 className="font-light text-8xl">SOCIAL FLOW</h1>
                                    <h1 className="">I am a catchy slogan...</h1>
                                </div>

                                {/* Get started button(s) */}
                                <div className="fixed top-0 right-0 flex p-4">
                                    <a href="/login" className='p-2 px-4 text-center text-white bg-purple-700 rounded-full hover:bg-purple-600'>Get Started</a>
                                </div>

                            </div>
                        </div>

                        {/* Body */}
                        <div className="flex flex-col flex-1 bg-purple-300">

                            <div className="flex justify-center">
                                <div className="flex flex-col px-10 pb-3 my-20 shadow-2xl backdrop-filter bg-paper-pattern rounded-xl shadow-white">
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
                                        rating={4}
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
                                        rating={4}
                                    />
                                ]}
                            />
                            <div className="flex flex-col w-full pt-16 bg-purple-200">

                                {/* About Us */}
                                <div className="px-32 mb-20 text-center">
                                    <h1 className="mb-5 text-3xl">About Us</h1>
                                    <p className="mb-5 text-lg">
                                        Welcome to SocialFlow - the all-in-one social media management tool designed to simplify your social media presence. Our SaaS service allows users to easily connect all their social media profiles and manage them effortlessly.
                                    </p>
                                    <p className="mb-5 text-lg">
                                        Our platform offers a range of features that make social media management easier and more efficient. With our Social Media Account Integration, you can easily connect all your social media profiles to one central dashboard, making it easier to manage your content and engage with your audience. Our Data Analytics tools allow you to track the performance of your social media campaigns, so you can make data-driven decisions and optimize your strategy for better results.
                                    </p>
                                    <p className="mb-5 text-lg">
                                        In addition to these core features, we also offer Competitor Analysis tools that allow you to monitor your competitors' social media activity and stay ahead of the curve. Our Customizable Reports make it easy to share your social media performance with your team or clients, and our Team Collaboration tools allow you to work together with your team on social media campaigns and content.
                                    </p>
                                    <p className="mb-5 text-lg">
                                        Finally, our Social Listening feature allows you to monitor and respond to conversations about your brand on social media, so you can stay on top of your reputation and engage with your audience in real-time.
                                    </p>
                                    <p className="mb-5 text-lg">
                                        At SocialFlow, our mission is to make social media management simple, efficient, and effective. We're constantly improving and updating our platform to ensure that we're providing our users with the best possible tools and features. So why not sign up today and see how SocialFlow can help you take your social media presence to the next level?
                                    </p>
                                </div>

                                <div className="h-full bg-paper-pattern">
                                    <footer className="flex flex-col items-center pt-4 pb-8 m-4 text-white">
                                        <div className="mb-4 text-center">
                                            <a className="text-xl font-bold text-sky-500" href="#">SocialFlex</a>
                                            <p className="text-sm">The all-in-one social media management tool</p>
                                            <span>&copy; 2023 Spring-Development. All rights reserved.</span>
                                        </div>
                                        <div>
                                            <span className="mr-2">Powered by</span>
                                            <a className="font-bold text-sky-500" href="https://github.com/Spring-0">Spring-0</a>
                                        </div>
                                    </footer>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
