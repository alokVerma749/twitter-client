import { Ellipsis } from 'lucide-react'
import Image from 'next/image'

interface FeedUserHeaderType {
  img?: string, title?: string, username?: string, postDate?: string, postTitle?: string
}
const FeedUserHeader = ({
  img = 'https://alokverma.vercel.app/_next/image?url=https%3A%2F%2Fgithub.com%2FalokVerma749%2FImages%2Fassets%2F87599400%2F0af8056f-f5c2-4767-b180-28763b3aaf87&w=1920&q=75',
  username = 'alok_std',
  title = 'Alok Verma',
  postDate = '13',
  postTitle = '5 Workouts for bigger biceps 💪'
}: FeedUserHeaderType) => {
  return (
    <div className='grid grid-cols-12 hover:bg-gray-950 p-2 mt-2'>
      <div className='col-span-1 w-fit flex items-center'>
        <Image
          src={img}
          alt="Avatar"
          width={99}
          height={99}
          className='max-w-10 h-10 rounded-full'
        />
      </div>

      <div className='col-span-10 flex gap-1 flex-col'>
        <div className='col-span-10 flex gap-1'>
          <div className='text-sm font-bold'>{title}</div>
          <div className='text-sm text-gray-500'>@{username}</div>
          <div className='text-sm text-gray-500'>.{postDate}</div>
        </div>
        <p>{postTitle}</p>
      </div>

      <div className='self-start'>
        <Ellipsis color='rgb(107 114 128)' size={20} />
      </div>
    </div>
  )
}

export default FeedUserHeader;
