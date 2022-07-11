import React from 'react'
import loading from '../public/loading.gif'
import Image from 'next/image'

const Loading = () => {
  return (
    <div>
        <Image className='w-[200px] m-auto block' src={loading} alt="Loading..." />
    </div>
  )
}

export default Loading