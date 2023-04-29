import React, { useState } from 'react';
import { AiOutlineMenu, AiFillCloseCircle, AiOutlineHome } from "react-icons/ai";

export default function SidePanel() {

    const [isShown, setShown] = useState(true);

    return (

        <div>
            <>
                {!isShown ?
                    (
                        <div className='fixed h-screen blackdrop-filter backdrop-blur-xl border-r w-[5%] bg-paper-pattern'>
                            <div className='text-white flex flex-col items-center m-5'>

                                <div className='mb-12 mt-5'>
                                    <button onClick={() => {
                                        setShown(!isShown)
                                    }}>
                                        <AiOutlineMenu size={25}/>
                                    </button>
                                </div>

                                <div>
                                    <ul>
                                        <li className='mb-4'><a href="#"><AiOutlineHome size={20}/></a></li>
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
                        <div className='fixed h-screen w-[20%] min-w-[200px] border-r bg-paper-pattern'>
                            <div className='text-white m-4'>
                                <div className='mb-10 border-b pl-5 pt-5 pb-10 flex justify-between'>
                                    <h1 className='font-bold tracking-wide text-2xl bg-pink-purple-blue bg-clip-text text-transparent'>Social-Flow</h1>
                                    <button onClick={() => {
                                        setShown(!isShown)
                                    }}>
                                        <AiFillCloseCircle size={35} className='hover:text-red-200' />
                                    </button>
                                </div>

                                <div className='ml-7'>
                                    <ul className='flex flex-col justify-evenly'>
                                        <li className='mb-4'><a href="#">Link 1</a></li>
                                        <li className='mb-4'><a href="#">Link 2</a></li>
                                        <li className='mb-4'><a href="#">Link 3</a></li>
                                        <li className='mb-4'><a href="#">Link 4</a></li>
                                        <li className='mb-4'><a href="#">Link 5</a></li>
                                    </ul>
                                </div>
                                <div className='absolute bottom-0 left-0 w-full mb-9'>
                                    <div className='flex justify-evenly text-center text-lg font-semibold'>

                                        <div className='rounded-full p-3 w-[35%] hover:-translate-y-0.5 hover:bg-purple-300 bg-purple-400'>
                                            <button className=''>Login</button>
                                        </div>

                                        <div className='rounded-full p-3 w-[35%] hover:-translate-y-0.5 hover:bg-purple-300 bg-purple-400'>
                                            <button className=''>Help</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
        </div>
    )
}
