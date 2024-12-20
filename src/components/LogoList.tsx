import Image from 'next/image'
import React from 'react'

const LogoList = () => {
  return (
    <div className='page_wrapper grid grid-cols-2 lg:grid-cols-4 py-10 logo-list'>
       <div
        className='p-4 flex flex-col gap-4 text-center items-center justify-start group transition-transform duration-300 ease-in-out transform'
      >
        <Image
          className='h-auto w-auto m-auto'
          src='/pages/home/logos/logo-section-img1.png'
          alt='logo'
          width={310}
          height={74}
        />
        <div className='hidden group-hover:block'>
          Collaborating on a strategic development initiative to enhance Nokia’s technology solutions.
        </div>
      </div>
      <div
        className=' p-4 flex flex-col gap-4 text-center items-center justify-start group transition-transform duration-300 ease-in-out transform'
      >
        <Image
          className='h-auto w-auto m-auto'
          src='/pages/home/logos/logo-section-img2.png'
          alt='logo'
          width={310}
          height={74}
        />
        <div className='hidden group-hover:block'>
          Collaborating on a strategic development initiative to enhance Nokia’s technology solutions.
        </div>
      </div>
      <div
        className='p-4 flex flex-col gap-4 text-center items-center justify-start group transition-transform duration-300 ease-in-out transform'
      >
        <Image
          className='h-auto w-auto m-auto'
          src='/pages/home/logos/logo-section-img3.png'
          alt='logo'
          width={310}
          height={74}
        />
        <div className='hidden group-hover:block'>
          Collaborating on a strategic development initiative to enhance Nokia’s technology solutions.
        </div>
      </div>
      <div
        className='p-4 flex flex-col gap-4 text-center items-center justify-start group transition-transform duration-300 ease-in-out transform'
      >
        <Image
          className='h-auto w-auto m-auto'
          src='/pages/home/logos/logo-section-img4.png'
          alt='logo'
          width={310}
          height={74}
        />
        <div className='hidden group-hover:block'>
          Collaborating on a strategic development initiative to enhance Nokia’s technology solutions.
        </div>
      </div>

  </div>
  
  )
}

export default LogoList