import React from 'react'

export default function MediaConnectCard(props) {
    return (
        <div className='bg-white max-w-[30vh] min-w-[30vh] min-h-[20vh] h-min rounded-xl flex flex-col items-center m-5 p-2'>
            <div>
                <h1 className='text-2xl'>{props.platform}</h1>
            </div>
            <div>
                <img src={props.image}/>
            </div>
            <div className='flex flex-col items-center justify-end w-full mt-3 text-red-400'>
                <button className='px-5 py-1 text-white bg-blue-500 rounded-full'>Connect</button>
                <h1>{props.status}</h1>
            </div>
        </div>
    )
}
