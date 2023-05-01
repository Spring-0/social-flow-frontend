import React from 'react';
import { FaFacebookF, FaInstagram, FaReddit, FaTwitter, FaTiktok, FaPinterest, FaYoutube, FaLinkedin } from 'react-icons/fa';


const PlatformLogos = () => {

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-[570px] h-[570px] rotate-45">
                <div className="flex flex-wrap w-full h-full">
                    <div className="flex items-center justify-center w-1/3 -rotate-45 h-1/3">
                        <FaFacebookF className="text-4xl text-blue-500" />
                    </div>
                    <div className="flex items-center justify-center w-1/3 -rotate-45 h-1/3">
                        <FaTwitter className="text-4xl text-blue-400" />
                    </div>
                    <div className="flex items-center justify-center w-1/3 -rotate-45 h-1/3">
                        <FaInstagram className="text-4xl text-gray-500" />
                    </div>
                    <div className="flex items-center justify-center w-1/3 -rotate-45 h-1/3">
                        <FaLinkedin className="text-4xl text-blue-700" />
                    </div>
                    <div className="flex items-center justify-center w-1/3 -rotate-45">
                        <h1 className='text-4xl font-bold text-white'>Social Flow</h1>
                    </div>
                    <div className="flex items-center justify-center w-1/3 -rotate-45 h-1/3">
                        <FaReddit className="text-4xl text-blue-700" />
                    </div>
                    <div className="flex items-center justify-center w-1/3 -rotate-45 h-1/3">
                        <FaPinterest className="text-4xl text-red-500" />
                    </div>
                    <div className="flex items-center justify-center w-1/3 -rotate-45 h-1/3">
                        <FaTiktok className="text-4xl text-pink-500" />
                    </div>
                    <div className="flex items-center justify-center w-1/3 -rotate-45 h-1/3">
                        <FaYoutube className="text-4xl text-red-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformLogos;
