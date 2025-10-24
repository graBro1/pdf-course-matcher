import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex mx-auto bg-gray-950 border-b border-b-gray-900 h-18 items-center justify-center'>
        <Link href="/" className='mx-6 p-2 absolute left-0 text-gray-400'>Home</Link>
        <h1 className='text-xl font-bold'>PDF Searcher</h1>
        <Link href="/about" className='mx-6 p-2 absolute right-0 text-gray-400'>About</Link>
    </div>
  )
}

export default Header