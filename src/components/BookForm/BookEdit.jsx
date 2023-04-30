import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const BookEdit = ({authors,getBooks}) => {

    const {id} = useParams("id");
    const navigate = useNavigate();

    const [book,setBook] = useState({
        name:"",
        authorId:0,
        availableCopies:0,
        category:"",
    });
    const getBook = () =>{
        axios.get(`http://localhost:8080/books/dto/${id}`)
        .then((response)=>setBook(response.data))
    }
    useEffect(()=>{
        getBook();
    },[])
    const handleChange = (e) =>{
        setBook({
            ...book,
            [e.target.name]: e.target.value.trim()
        })
    }

    const editBook = () =>{
        console.log(id);
        axios.put(`http://localhost:8080/books/edit/${id}`,book)
        .then((response)=>getBooks());
        navigate('/books',{replace:true});
    }
    


  return (
    <div className='container-sm'>
    <div className='my-3'>
        <h1>Add new Book</h1>
    </div>
    <div className='mb-3'>
        <label htmlFor="name" className="form-label">Book name</label>
        <input onChange={handleChange} value={book.name} type="text" name='name' className="form-control" id="name" />
    </div>
    <div className='mb-3'>
        <label htmlFor="authorId" className="form-label">Author</label>
        <select onChange={handleChange} className="form-select" name='authorId' value={book.authorId} >
            {authors.map((author)=>{
                return(
                    <option key={author.id} value={author.id}>{author.name+" "+author.surname}</option>
                )
            })}
            <option value='2'>Avtr</option>
        </select>
    </div>
    <div className='mb-3'>
        <label htmlFor="availableCopies" className="form-label">Available copies</label>
        <input onChange={handleChange} type="number" name='availableCopies' value={book.availableCopies} className="form-control" id="copies" />
    </div>
    <div className='mb-3'>
        <label htmlFor="category" className="form-label">Category</label>
        <select onChange={handleChange} className="form-select" name='category' value={book.category}>
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
        <Button variant='success' onClick={editBook}>Submit</Button>
    </div>
</div>
  )
}

export default BookEdit