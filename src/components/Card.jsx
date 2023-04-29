import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'

export default function Card(props) {
  return (
    <div>
      <div className='flex flex-col text-center bg-white h-auto w-auto rounded-xl border-black border items-center m-3'>
        <header className='w-full border-b border-black py-3'>
          <h1 className=' text-2xl font-normal'>Card Title</h1>
        </header>
        <body className='p-3 w-full border-b border-black'>
          <h1>Lorem Ipsum lorem ipsum</h1>
          <h1>Lorem Ipsum lorem ipsum</h1>
        </body>
        <footer className='p-3'>
          This is the footer for the card
        </footer>

      </div>

    </div>
  )
}
