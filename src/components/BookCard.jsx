import axios from 'axios'
import React from 'react'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookCard = ({title,author,copies,id,getBooks}) => {

  const deleteBook = () =>{
    axios.post(`http://localhost:8080/books/delete/${id}`)
    .then((response)=>getBooks());
    getBooks();
  }
  const markBook = () =>{
    axios.post(`http://localhost:8080/books/borrow/${id}`)
    .then((response)=>getBooks())
    
  }

  return (
    <div className='p-2' >
    <Card style={{ width: '18rem',height:"400px" }}>
      <Card.Img variant="top" src="OG-Image.jpg" />
      <Card.Body style={{height:"100%"}} className='d-flex flex-column justify-content-between'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author.name + " " + author.surname}
        </Card.Text>
        <Card.Text>
          Available copies: {copies}
        </Card.Text>
        <div>
          <Link className='text-decoration-none text-white' to={`/bookedit/${id}`}>
            <Button variant="warning" className='me-2'>Edit</Button>
          </Link>
          <Button variant='primary' className='me-2' onClick={markBook} >Mark</Button>
          <Button variant='danger' onClick={deleteBook} >Delete</Button>
        </div>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default BookCard