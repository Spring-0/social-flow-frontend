import React, { useState } from 'react';
import { AiOutlineMenu, AiFillCloseCircle, AiOutlineHome } from "react-icons/ai";

export default function SidePanel() {

    const [isShown, setShown] = useState(false);

    return (

        <div>
            <>
                {!isShown ?
                    (
                        <div className='w-[10vh] min-w-[10vh] h-screen blackdrop-filter backdrop-blur-xl border-r bg-paper-pattern'>
                            <div className='text-white flex flex-col items-center'>

                                <div className='mb-12 mt-5'>
                                    <button onClick={() => {
                                        setShown(!isShown)
                                    }}>
                                        <AiOutlineMenu size={25} />
                                    </button>
                                </div>

                                <div>
                                    <ul>
                                        <li className='mb-4'><a href="#"><AiOutlineHome size={20} /></a></li>
                                        <li className='mb-4'><a href="#"></a></li>
                                        <li className='mb-4'><a href="#"></a></li>
                                        <li className='mb-4'><a href="#"></a></li>
                                        <li className='mb-4'><a href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div className='min-w-[35vh] max-w-[45vh] w-max h-screen border-r bg-paper-pattern flex flex-col'>
                            <div className='mb-10 border-b pl-5 pt-5 pb-10 flex justify-between pr-3'>
                                <h1 className='font-bold tracking-wide text-2xl bg-pink-purple-blue bg-clip-text text-transparent'>Social-Flow</h1>
                                <button className="text-white" onClick={() => {
                                    setShown(!isShown)
                                }}>
                                    <AiFillCloseCircle size={35} className='hover:text-red-500' />
                                </button>
                            </div>

                            <div className='ml-7 text-white'>
                                <ul className='flex flex-col justify-evenly'>
                                    <li className='mb-4'><a href="#">Link 1</a></li>
                                    <li className='mb-4'><a href="#">Link 2</a></li>
                                    <li className='mb-4'><a href="#">Link 3</a></li>
                                    <li className='mb-4'><a href="#">Link 4</a></li>
                                    <li className='mb-4'><a href="#">Link 5</a></li>
                                </ul>
                            </div>

                            <div className='flex flex-1 items-end justify-between p-4 pl-7 pr-7 text-center text-white'>
                                <div className='rounded-full p-3 w-[40%] hover:-translate-y-0.5 hover:bg-purple-300 bg-purple-400'>
                                    <button className=''>Login</button>
                                </div>

                                <div className='rounded-full p-3 w-[40%] hover:-translate-y-0.5 hover:bg-purple-300 bg-purple-400'>
                                    <button className=''>Help</button>
                                </div>
                            </div>

                        </div>
                    )
                }
            </>
        </div>
    )
}
