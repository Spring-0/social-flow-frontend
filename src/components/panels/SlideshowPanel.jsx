import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'

export default function SlideshowPanel(props) {
    const [position, setPosition] = useState(0);

    const onRight = () => {
        if (position < props.cards.length - 1) {
            setPosition(position + 1);
        }
    }

    const onLeft = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
    }

    const calculateCardPosition = (index) => {
        const offset = index - position;
        if (offset === 0) {
            return 0;
        } else if (offset === 1) {
            return 300;
        } else if (offset === -1) {
            return -350;
        } else if (offset > 1) {
            return 400;
        } else if (offset < -1) {
            return -350;
        }
    };

    return (
        <div className='relative h-[50vh] flex bg-paper-pattern'>
            <div className='text-white absolute flex flex-col items-center w-full my-5'>
                <h1 className='text-2xl tracking-wide mb-2'>{props.title}</h1>
                <h1 className='tracking-wide'>{props.tagline}</h1>
            </div>
            <div className="w-full flex justify-center items-center">

                {props.cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{
                            scale: position === index ? 1 : 0.75,
                            x: calculateCardPosition(index),
                            zIndex: position === index ? 1 : 0,
                        }}
                        transition={{
                            type: "tween",
                            duration: 0.5
                        }}
                        className={`absolute ${position === index ? "blur-none" : "blur-[1.5px]"
                            }`}
                    >
                        {card}
                    </motion.div>

                ))}

            </div>

            <div className='flex justify-center z-50 h-full items-center absolute w-full text-black space-x-[48vh]'>
                <button onClick={onLeft}><AiFillLeftCircle size={35} /></button>
                <button onClick={onRight}><AiFillRightCircle size={35} /></button>
            </div>

        </div>
    )
}
