import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ApplyPages = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const pagesPerPage=10

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos");
      let result = await response.json();
      setData(result);
      console.log(result)
      setLoading(false);
    } catch (error) {
      setError("404 Data Not Found");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  let lastPage=page*pagesPerPage;
  const firstPage=lastPage-pagesPerPage
  const currentPage=data.slice(firstPage,lastPage)
  return (
    <>
      <h1>Applying Pagination for Todos, Page: (<span style={{color:"green"}}>{page}</span>)</h1>

      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {currentPage && currentPage.map((todo)=>(
        <div>
            <h3>Title: {todo.title}</h3>
            <p> ID:{todo.id}</p>
            <p>Completd: {todo.completd?"YES":"NO"}</p>

        </div>
      ))}
      <button disabled={page==1} onClick={()=>setPage(prev=>prev-1)}>Prev</button>
      <button onClick={()=>setPage(prev=>prev+1)}>Next</button>
      
    </>
  );
};

export default ApplyPages;
