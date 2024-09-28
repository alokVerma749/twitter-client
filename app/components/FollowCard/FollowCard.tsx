import React from 'react'

import Button from '../Button/Button'
import Image from 'next/image'

interface FollowCardType {
  img?: string, title?: string, username?: string
}
const FollowCard = ({
  img = 'https://alokverma.vercel.app/_next/image?url=https%3A%2F%2Fgithub.com%2FalokVerma749%2FImages%2Fassets%2F87599400%2F0af8056f-f5c2-4767-b180-28763b3aaf87&w=1920&q=75',
  username = 'alok_std',
  title = 'Alok Verma'
}: FollowCardType) => {
  return (
    <div className='grid grid-cols-12 hover:bg-gray-950 p-2 mt-2'>
      <div className='col-span-2 w-fit flex items-center'>
        <Image
          src={img}
          alt="Avatar"
          width={999}
          height={999}
          className='max-w-10 h-10 rounded-full'
        />
      </div>
      <div className='col-span-7 ml-2'>
        <div className='text-sm font-bold'>{title}</div>
        <div className='text-sm text-gray-500'>@{username}</div>
      </div>
      <div className='col-span-3 self-start'>
        <Button style='bg-white text-black' text='Follow' />
      </div>
    </div>
  )
}

export default FollowCard
