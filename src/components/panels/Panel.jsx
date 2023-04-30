import React from 'react'

export default function Panel(props) {

    return (

        <>
            {/* top text */}
            < div className="flex flex-col justify-center items-center text-white p-3 font-thin" >
                <h1 className="text-2xl tracking-wide mb-2">{props.title}</h1>
                <h2 className="tracking-wide">{props.tagline}</h2>
            </div >

            {/* cards */}
            < div className="flex py-5 justify-center flex-wrap" >
                {props.cards}
                {props.reviewCards}
            </div >

        </>
    )
}
