import React from 'react'
import FollowCard from '../FollowCard/FollowCard'
import Image from 'next/image'

const FeedCard = () => {
  return (
    <div>
      <FollowCard />
      <Image height={250} width={250} alt={'feed image'} src={'/'} />
    </div>
  )
}

export default FeedCard
