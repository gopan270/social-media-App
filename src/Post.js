import React from 'react'
import { useParams } from 'react-router-dom'

const Post = ({posts}) => {
    const{id}=useParams()
    const post=posts.find(p=>p.id.toString()===id)
  return (
    <div className='postPage'>
    {post && <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>}
    </div>
  )
}

export default Post
