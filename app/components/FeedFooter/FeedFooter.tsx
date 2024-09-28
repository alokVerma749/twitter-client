import { Bookmark, ChartNoAxesColumn, Heart, MessageCircle, Repeat2 } from 'lucide-react'

const FeedFooter = () => {
  return (
    <div className='mx-auto p-3 flex flex-row gap-6 justify-between max-w-[615px]'>
      <div className='flex flex-row'>
        <MessageCircle color='rgb(107 114 128)' size={20} />
        <p className='text-gray-500 ml-1'>13k</p>
      </div>
      <div className='flex flex-row'>
        <Repeat2 color='rgb(107 114 128)' size={20} />
        <p className='text-gray-500 ml-1'>1.5k</p>
      </div>
      <div className='flex flex-row'>
        <Heart color='rgb(107 114 128)' size={20} />
        <p className='text-gray-500 ml-1'>5.4k</p>
      </div>
      <div className='flex flex-row'>
        <Bookmark color='rgb(107 114 128)' size={20} />
        <p className='text-gray-500 ml-1'>10</p>
      </div>
      <div className='flex flex-row'>
        <ChartNoAxesColumn color='rgb(107 114 128)' size={20} />
        <p className='text-gray-500 ml-1'>180k</p>
      </div>
    </div>
  )
}

export default FeedFooter;
