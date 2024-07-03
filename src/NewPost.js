import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const NewPost = ({heading,title,setTitle,body,setBody,handleNewPost,handleEditPost,posts}) => {
  const{id}=useParams()
  let post
  useEffect(()=>{
      post=posts.find(post=>post.id.toString()===id)
      if(post){
        setTitle(post.title)
        setBody(post.body)
      }
  },[])
  return (
    <form className='newpostForm' onSubmit={(e)=>heading==="New Post"? handleNewPost(e):handleEditPost(e,id)}>
        <h2>{heading}</h2>
        <label htmlFor='title'>Title</label>
        <input 
            type='text'
            placeholder='Post Title'
            id='title'
            value={title}
            onChange={e=>setTitle(e.target.value)}
        />
        <label htmlFor='body'>Content</label>
        <textarea rows='3'
            id='body'
            placeholder='post content'
            value={body}
            onChange={e=>setBody(e.target.value)}
        />
        <div className='button'>
            <button className='submitButton' type='submit'>Submit</button>
        </div>
    </form>
    

  )
}

export default NewPost
