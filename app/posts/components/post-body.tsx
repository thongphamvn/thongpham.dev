import classNames from 'classnames'
import './markdown-styles.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className='max-w-2xl mx-auto'>
      <div
        className={classNames('markdown-body', 'leading-7 text-md')}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
