import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import AddBook from './AddBook'
import FilterBooks from './FilterBooks'

const Books = () => {
    const books= useSelector((state)=>state.books)
    const {genre,author,title}=useSelector(state=>state.filtered)
    const dispatch=useDispatch()
    console.log(books)
    if(!books) return <h3>No Books Found</h3> 
    const filteredBooks=books.filter(book=>{
      const matchGenre=genre?book.genre.includes(genre):true;
      const matchAuthor=author?book.author.includes(author):true;
      const matchTitle=title?book.title.includes(title):true
      return matchGenre && matchAuthor && matchTitle;
    })

     return (
    <div>
        <h1>Book Store</h1>
        <AddBook/>
        <FilterBooks/>
        {filteredBooks.map(book=>(
          <div key={book.id} style={{border:"2px solid blue"}}>
            <p>{book.title}</p>
            <p>{book.genre}</p>
            <p>{book.author}</p>
          </div>
        ))}
      
    </div>
  )
}

export default Books
