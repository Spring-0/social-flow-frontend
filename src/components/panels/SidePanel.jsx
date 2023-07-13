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
                                <div className='flex flex-col items-center text-white'>

                                    <div className='flex p-5 mt-5 mb-10 hover:bg-purple-500 rounded-xl'>
                                        <button onClick={() => {
                                            setShown(!isShown)
                                        }}>
                                            <AiOutlineMenu size={20} />
                                        </button>
                                    </div>

                                    <div>
                                        <ul className=''>
                                            <li className='p-5 mb-4 hover:bg-purple-500 rounded-xl'><a href="/dashboard"><FaTachometerAlt size={20} /></a></li>
                                            <li className='p-5 mb-4 hover:bg-purple-500 rounded-xl'><a href="/accounts"><FaUsers size={20} /></a></li>
                                            <li className='p-5 mb-4 hover:bg-purple-500 rounded-xl'><a href="/analytics"><FaChartBar size={20} /></a></li>
                                            <li className='p-5 mb-4 hover:bg-purple-500 rounded-xl'><a href="#"><FaBalanceScale size={20} /></a></li>
                                            <li className='p-5 mb-4 hover:bg-purple-500 rounded-xl'><a href="#"><FaCog size={20} /></a></li>
                                            <li className='p-5 mb-4 hover:bg-purple-500 rounded-xl'><a href="#"><FaQuestionCircle size={20} /></a></li>
                                            <li className='p-5 mb-4 hover:bg-purple-500 rounded-xl'><a href="#"><FaArrowCircleUp size={20} /></a></li>
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

                                        className='flex justify-between p-8 pl-5 pr-3 mb-8 border-b'>
                                        <button className='pb-2 text-white hover:underline underline-offset-8'><a href='/' className='text-2xl font-bold tracking-wide text-transparent bg-pink-purple-blue bg-clip-text'>Social-Flow</a></button>
                                        <button className="text-white" onClick={() => {
                                            setShown(!isShown)
                                        }}>
                                            <AiFillCloseCircle size={35} className='hover:text-red-500' />
                                        </button>
                                    </div>

                                    <div className='flex flex-col w-full text-white'>
                                        <a className='p-4 mx-2 mb-3 hover:bg-purple-500 rounded-xl pl-7' href="/dashboard">Dashboard</a>
                                        <a className='p-4 mx-2 mb-3 hover:bg-purple-500 rounded-xl pl-7' href="/accounts">Media Accounts</a>
                                        <a className='p-4 mx-2 mb-3 hover:bg-purple-500 rounded-xl pl-7' href="/analytics">Analytics</a>
                                        <a className='p-4 mx-2 mb-3 hover:bg-purple-500 rounded-xl pl-7' href="#">Competitor Analysis</a>
                                        <a className='p-4 mx-2 mb-3 hover:bg-purple-500 rounded-xl pl-7' href="#">Settings</a>
                                        <a className='p-4 mx-2 mb-3 hover:bg-purple-500 rounded-xl pl-7' href="#">Support</a>
                                        <a className='p-4 mx-2 mb-3 hover:bg-purple-500 rounded-xl pl-7' href="#">Upgrade</a>
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
