"use client"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const MainMenuLinks = () => {

  return (
    <div className="menu menu-horizontal gap-8 bg-[#1D1D1D] rounded-box py-3 px-8">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="flex items-center gap-1 group">About Us <ChevronDown className='size-5 group-focus:rotate-180'/></div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-[#1D1D1D] rounded-box z-[1] mt-4 w-40 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>

      <div>
        <Link href="/">
        Our Brands</Link>
      </div>

      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="flex items-center gap-1 group">Media <ChevronDown className='size-5 group-focus:rotate-180'/></div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-[#1D1D1D] rounded-box z-[1] mt-4 w-40 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>

      <div>
        <Link href="/">
        Sustainability</Link>
      </div>
      <div>
        <Link href="/">
        Careers</Link>
      </div>
      <div>
        <Link href="/">
        Contact Us</Link>
      </div>
  </div>
  )
}

export default MainMenuLinks