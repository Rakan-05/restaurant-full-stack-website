import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='h-12 md:h-18 px-4 lg:px-20 text-red-500 flex items-center justify-between bg-fuchsia-100'>
            <Link href="/" className='font-bold text-xl'>MASSIMO</Link>
            <p className='uppercase'>&copy; all rights reserved</p>
        </div>
    )
}

export default Footer
