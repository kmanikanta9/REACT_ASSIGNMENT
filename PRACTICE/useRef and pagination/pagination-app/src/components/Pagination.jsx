import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [page,setPage]=useState(1)
    const [posts,setPosts]=useState([])
    const PostsPerPage=5
    async function fetchPosts(){
        let response=await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let result=await response.json()
        setPosts(result)
        console.log(result)
    }
    useEffect(()=>{
        fetchPosts()
    },[])

    
    const lastPage=page*PostsPerPage;
    const firstPage=lastPage-PostsPerPage
    const currentPage=posts.slice(firstPage,lastPage)
  return (
    <div>
        <h2>Posts (Page {page})</h2>
        {currentPage.map((post)=>(
            <p>{post.id}:{post.title}</p>
        ))}
        <button onClick={()=>setPage(prev=>prev-1)}>Prev</button>
        <button onClick={()=>setPage(prev=>prev+1)}>Next</button>
      
    </div>
  )
}

export default Pagination
