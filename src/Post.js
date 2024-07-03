import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({posts}) => {
    const{id}=useParams()
    const post=posts.find(p=>p.id.toString()===id)
  return (
    post &&
    <div className='postPage'>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/post/edit/${post.id}`}><button className='editBt'>Edit</button></Link>
      <button className='deleteBt'>Delete</button>
    </div>
  )
}

export default Post
