import React from 'react'
import Link from 'next/link'

const menu = () => {
  return (
    <div className='w-screen h-screen grid grid-cols-3'>
        
        <div className='border-2 border rounded-xl'>
            <span className='w-px h-2/3 bg-white'></span>
            <div>
                <span>McFilu</span>
                <span>GitHub</span>
            </div>
        </div>
        
    </div>
  )
}

export default menu