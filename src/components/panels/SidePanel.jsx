import React, { useState } from 'react';
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { FaHome, FaTachometerAlt, FaUsers, FaChartBar, FaBalanceScale, FaCog, FaQuestionCircle, FaArrowCircleUp } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function SidePanel() {

    const [isShown, setShown] = useState(false);

    const slideInVariants = {
        hidden: {
            opacity: 0,
            x: "-100%",
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 15
            }
        }
    };

    const slideOutVariants = {
        hidden: {
            opacity: 0,
            x: "15vw"
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                damping: 15
            }
        }
    }


    return (

        <div className='bg-paper-pattern'>
            <>
                {!isShown ?
                    (
                        <motion.div
                            className='w-[10vh] min-w-[10vh] h-screen blackdrop-filter backdrop-blur-xl border-r bg-paper-pattern'
                            key="slide-out"
                            variants={slideOutVariants}
                            initial="hidden"
                            animate="visible">
                            <div

                            >
                                <div className='text-white flex flex-col items-center'>

                                    <div className='p-5 mb-10 mt-5 hover:bg-purple-500 rounded-xl flex'>
                                        <button onClick={() => {
                                            setShown(!isShown)
                                        }}>
                                            <AiOutlineMenu size={20} />
                                        </button>
                                    </div>

                                    <div>
                                        <ul className=''>
                                            <li className='hover:bg-purple-500 rounded-xl p-5 mb-4'><a href="#"><FaHome size={20} /></a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-5 mb-4'><a href="#"><FaTachometerAlt size={20} /></a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-5 mb-4'><a href="#"><FaUsers size={20} /></a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-5 mb-4'><a href="#"><FaChartBar size={20} /></a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-5 mb-4'><a href="#"><FaBalanceScale size={20} /></a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-5 mb-4'><a href="#"><FaCog size={20} /></a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-5 mb-4'><a href="#"><FaQuestionCircle size={20} /></a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-5 mb-4'><a href="#"><FaArrowCircleUp size={20} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    ) :
                    (
                        <div className='border-r'>
                            <motion.div className='min-w-[35vh] max-w-[45vh] w-max h-screen  bg-paper-pattern flex flex-col'
                                key="slide-in"
                                variants={slideInVariants}
                                initial="hidden"
                                animate="visible">
                                <div>
                                    <div

                                        className='mb-8 border-b pl-5 p-8 flex justify-between pr-3'>
                                        <h1 className='font-bold tracking-wide text-2xl bg-pink-purple-blue bg-clip-text text-transparent'>Social-Flow</h1>
                                        <button className="text-white" onClick={() => {
                                            setShown(!isShown)
                                        }}>
                                            <AiFillCloseCircle size={35} className='hover:text-red-500' />
                                        </button>
                                    </div>

                                    <div className='flex flex-col text-white'>
                                        <ul className='w-full'>
                                            <li className='hover:bg-purple-500 rounded-xl p-4 mb-3 pl-7 mx-2'><a href="#">Home</a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-4 mb-3 pl-7 mx-2'><a href="#">Dashboard</a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-4 mb-3 pl-7 mx-2'><a href="#">Media Accounts</a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-4 mb-3 pl-7 mx-2'><a href="#">Analytics</a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-4 mb-3 pl-7 mx-2'><a href="#">Competitor Analysis</a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-4 mb-3 pl-7 mx-2'><a href="#">Settings</a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-4 mb-3 pl-7 mx-2'><a href="#">Support</a></li>
                                            <li className='hover:bg-purple-500 rounded-xl p-4 mb-3 pl-7 mx-2'><a href="#">Upgrade</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )
                }
            </>
        </div>
    )
}
