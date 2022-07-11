import React from 'react'
import loading from '../public/loading.gif'
import Image from 'next/image'

const Loading = () => {
  return (
    <div>
        <Image className='w-[200px] m-auto block' src={loading} alt="Loading..." />
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1508012340316-cdf9d309cea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          layout="fill"
          alt="Background image"
        />
    </div>
  )
}

export default Loading