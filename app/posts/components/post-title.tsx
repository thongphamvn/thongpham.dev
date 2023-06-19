import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className='text-2xl font-bold tracking-tighter leading-tight text-center'>
      {children}
    </h1>
  )
}

export default PostTitle
