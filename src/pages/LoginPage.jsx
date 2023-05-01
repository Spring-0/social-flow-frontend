import React from 'react'
import Login from '../components/auth/Login'
import PlatformLogos from '../components/logos/PlatformLogos'

export default function LoginPage() {
    return (
        <div className='flex items-center w-screen h-screen p-5 overflow-hidden bg-purple-500'>

            {/* Information Login Side */}
            <div className='hidden md:block max-w-[0px] bg-paper-pattern h-full min-w-[50%] mr-5 rounded-xl'>
                <PlatformLogos />
            </div>
            <Login />

        </div>
    )
}
