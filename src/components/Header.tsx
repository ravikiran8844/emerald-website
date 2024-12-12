import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='bg-gold py-2 lg:hidden'>
            <div className="container">
            <div className='text-sm text-center text-black'>Ghar Ghar Meh Emerald!</div>
            </div>
        </div>
        
        <nav className='container py-4'>
            <div className='flex justify-between gap-10 items-center'>
            <div>
                <Image
                className="h-16" 
                src="/logo.svg"    
                alt="section1"
                width={64}
                height={64}
                />
            </div>

            <div className='text-lg'>
            Ghar Ghar Meh Emerald!
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Header