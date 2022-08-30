import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div className='flex justify-end p-8 pr-16'>
            <Link to='/register' className='inline-block px-8 py-2 rounded text-white bg-green-700'>Sign Up</Link>
            <Link to='/login' className='inline-block ml-6 px-8 py-2 rounded text-white bg-blue-700'>Sign In</Link>
        </div>
    </div>
  )
}
