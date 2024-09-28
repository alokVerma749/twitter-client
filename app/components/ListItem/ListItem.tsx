import { Ellipsis } from 'lucide-react'
import React from 'react'

interface ListItemType {
  topics: [], hashtag: string, analytics: string
}
const ListItem = ({ topics, hashtag, analytics }: ListItemType) => {
  return (
    <div className='flex items-start justify-between gap-1 hover:bg-gray-900 p-2'>
      <div>
        <div className='text-sm text-gray-500'>Sports.Trending</div>
        <div className='text-sm font-bold'>#Dhoom4</div>
        <div className='text-sm text-gray-500'>103K posts</div>
      </div>
      <div className='self-start'>
        <Ellipsis color='rgb(107 114 128)' size={20} />
      </div>
    </div>
  )
}

export default ListItem
