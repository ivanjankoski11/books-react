import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { getAuthors } from '../../apis/books'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const BookForm = ({authors,getBooks}) => {

    const navigate = useNavigate();

    const [book,setBook] = useState({
        name:"",
        authorId:1,
        availableCopies:"",
        category:"",
    })
    const handleChange = (e) =>{
        setBook({
            ...book,
            [e.target.name]: e.target.value.trim()
        })
    }

    const addBook = () =>{
        axios.post('http://localhost:8080/books/add',book)
        .then((response)=>console.log(response.data));
        navigate('/books',{replace:true});
        getBooks();
    }
    


  return (
    <div className='container-sm'>
        <div className='my-3'>
            <h1>Add new Book</h1>
        </div>
        <div className='mb-3'>
            <label htmlFor="name" className="form-label">Book name</label>
            <input onChange={handleChange} type="text" name='name' className="form-control" id="name" />
        </div>
        <div className='mb-3'>
            <label htmlFor="authorId" className="form-label">Author</label>
            <select onChange={handleChange} className="form-select" name='authorId'>
                {authors.map((author)=>{
                    return(
                        <option key={author.id} value={author.id}>{author.name+" "+author.surname}</option>
                    )
                })}
            </select>
        </div>
        <div className='mb-3'>
            <label htmlFor="availableCopies" className="form-label">Available copies</label>
            <input onChange={handleChange} type="number" name='availableCopies' className="form-control" id="copies" />
        </div>
        <div className='mb-3'>
            <label htmlFor="category" className="form-label">Category</label>
            <select onChange={handleChange} className="form-select" name='category'>
                <option value="NOVEL">NOVEL</option>
                <option value="THRILER">THRILER</option>
                <option value="HISTORY">HISTORY</option>
                <option value="FANTASY">FANTASY</option>
                <option value="BIOGRAPHY">BIOGRAPHY</option>
                <option value="CLASSICS">CLASSICS</option>
                <option value="DRAMA">DRAMA</option>
            </select>
        </div>
        <div>
            <Button variant='success' onClick={addBook}>Submit</Button>
        </div>
    </div>
  )
}

export default BookForm