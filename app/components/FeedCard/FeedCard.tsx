import Image from 'next/image'
import FeedUserHeader from '../FeedUserHeader/FeedUserHeader'
import FeedFooter from '../FeedFooter/FeedFooter'

const FeedCard = () => {
  return (
    <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <FeedUserHeader />
      <Image src='https://picsum.photos/200/300' height={99} width={999} alt='feed image' className='rounded-xl h-[350px] w-[600px] mx-auto mt-1' />
      <FeedFooter />
    </div>
  )
}

export default FeedCard
