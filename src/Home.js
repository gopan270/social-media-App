import React from 'react'
import PostList from './PostList'

const Home = ({posts,handleNewPost,title,setTitle}) => {
  return (
    <main>
        {
            posts.map(post=>
                <PostList 
                  post={post} 
                  handleNewPost={handleNewPost} 
                  key={post.id}
                  title={title}
                  setTitle={setTitle} 
                />
            )
        }
    
    </main>
  )
}

export default Home
