import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import NewPost from "./NewPost";
import { useState } from "react";
import Footer from "./Footer";
import Post from "./Post";
function App() {
  const navigator=useNavigate()
  const[posts,setPosts]=useState([
    {
      id:1,
      title:"Title 1",
      body:"body 1"
    },
    {
      id:2,
      title:"Title 2",
      body:"body 2"
    },
    {
      id:3,
      title:"Title 3",
      body:"body 3"
    },
    {
      id:4,
      title:"Title 4",
      body:"body 4"
    },
  ])
  //new post
  const[title,setTitle]=useState('')
  const[body,setBody]=useState('')
  const handleNewPost=(e)=>{
    e.preventDefault()
    const id=posts.length? posts[posts.length-1].id+1:1
    const newPost={id,title,body}
    const newPosts=[...posts,newPost]
    setPosts(newPosts)
    setTitle('')
    setBody('')
    navigator('/')
  }
  return (
    <div className="App">
      <Header/>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={
             <Home 
                posts={posts} 
             />
            }/>
          <Route path="/post" >
            <Route index element={
                <NewPost
                  handleNewPost={handleNewPost}
                  title={title}
                  setTitle={setTitle}
                  body={body}
                  setBody={setBody}
                />
              }/>
              <Route path=":id" element={
                <Post
                  posts={posts}
                />}/>
            </Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
