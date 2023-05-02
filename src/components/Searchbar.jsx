import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Searchbar() {
    return (
        <div className='relative flex justify-between p-2 text-purple-500 rounded-md bg-purple-50'>
            <input className='bg-transparent outline-none' id='dashboardSearchBar' placeholder='Search' />
            <FaSearch size={20} />
        </div>
    )
}
