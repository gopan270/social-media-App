import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({post}) => {
  return (
    <Link className='link' to={`/post/${post.id}`}> <div className='postList'>
        <h3>Post id:{post.id}</h3>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

    </div>
    </Link>
  )
}

export default PostList
