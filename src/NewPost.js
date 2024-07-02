import React from 'react'

const NewPost = ({title,setTitle,body,setBody,handleNewPost}) => {
  return (
    <form className='newpostForm' onSubmit={handleNewPost}>
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
            <button className='submitButton'>Submit</button>
        </div>
    </form>
    

  )
}

export default NewPost
