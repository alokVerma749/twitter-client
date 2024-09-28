import { Ellipsis } from 'lucide-react'
import React from 'react'

interface ListItemType {
  topics?: string[], hashtag?: string, analytics?: string
}
const ListItem = ({ topics = ['Sports.Trending'], hashtag = 'Dhoom4', analytics = '103' }: ListItemType) => {
  return (
    <div className='flex items-start justify-between gap-1 hover:bg-gray-900 p-2'>
      <div>
        <div className='text-sm text-gray-500'>{topics.join(", ")}</div>
        <div className='text-sm font-bold'>#{hashtag}</div>
        <div className='text-sm text-gray-500'>{analytics}k posts</div>
      </div>
      <div className='self-start'>
        <Ellipsis color='rgb(107 114 128)' size={20} />
      </div>
    </div>
  )
}

export default ListItem
