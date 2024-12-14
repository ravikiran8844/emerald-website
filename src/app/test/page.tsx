import React from 'react'

const page = () => {
  return (
    <div>
        <div>
            <h1>Test</h1>

            <div className='flex items-center justify-center mt-20'>
                <div className='size-36 bg-orange-400 rounded-full flex items-center justify-center ring ring-white -mr-6'>1</div>
                <div className='size-36 bg-blue-400 rounded-full flex items-center justify-center ring ring-white -mr-6'>2</div>
                <div className='size-48 bg-green-400 rounded-full flex items-center justify-center ring ring-white -mr-6 relative z-2'>3</div>
                <div className='size-36 bg-blue-400 rounded-full flex items-center justify-center ring ring-white -mr-6'>4</div>
                <div className='size-36 bg-orange-400 rounded-full flex items-center justify-center ring ring-white -mr-6'>5</div>
            </div>
        </div>
    </div>
  )
}

export default page