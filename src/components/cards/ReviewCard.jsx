import React from 'react'
import { AiFillStar } from 'react-icons/ai';

export default function ReviewCard(props) {
  const rating = props.rating || 0;
  const stars = Array.from({ length: 5 }, (_, index) => (
    <AiFillStar key={index} size={20} color={index < rating ? '#7E22CE' : '#CBD5E0'} />
  ));

  return (
    <div className='bg-purple-100 min-w-[55vh] min-h-[25vh] max-w-min max-h-min group-hover:blur-sm'>
      <div className='flex flex-col text-center pt-5 mx-10'>
        <h1 className='text-purple-700 font-bold text-xl pb-3'>{props.author}</h1>
        <p className='text-gray-600 font-semibold'>{props.text}</p>
      </div>
      <div className='flex justify-center text-purple-700 mt-5'>{stars}</div>
    </div>
  );
}
