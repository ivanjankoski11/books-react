import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const Books = ({books,getBooks}) => {


  useEffect(()=>{
    getBooks();
  },[])
  
  return (
    <div className='container'>
      <div className='d-flex justify-content-between pt-2'>
        <h1>Books</h1>
        <Link to={'/addbook'} className='text-decoration-none text-white'>
        <Button variant="success" >
          Add new Book
        </Button>
        </Link>
        
      </div>
        <div className='d-flex my-3 flex-wrap  '>
        {
            books.map((book)=>{
                return(
                    <BookCard id={book.id} title={book.name} author={book.author}
                    copies={book.availableCopies} getBooks={getBooks} />
                )
            })
        }
        </div>
    </div>
  )
}

export default Books