type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-3xl font-bold tracking-tighter leading-tight mt-4'>
          {title}
        </h1>
        <div className='mb-6 italic font-light'>{date}</div>
      </div>
    </>
  )
}

export default PostHeader
