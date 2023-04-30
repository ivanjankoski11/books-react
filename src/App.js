import { Button, Navbar } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Routes,Route } from 'react-router-dom';
import Books from './components/Books';
import Header from './components/Header/Header';
import BookForm from './components/BookForm/BookForm';
import BookEdit from './components/BookForm/BookEdit';
import Authors from './components/Authors';



function App() {

  const [books,setBooks] = useState([]);
  const [authors,setAuthors] = useState([]);
  const [categories,setCategories] = useState([]);

  const getBooks = () =>{
    axios.get('http://localhost:8080/books')
    .then((response)=>setBooks(response.data));
  }
  const getAuthors = () =>{
    axios.get('http://localhost:8080/author')
    .then((response)=> setAuthors(response.data))
  }


  useEffect(()=>{
    getAuthors();
    getBooks();
  },[]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact element={<Books books={books} getBooks={getBooks} />} path={'/'}></Route>
        <Route exact element={<Books books={books} getBooks={getBooks} />} path={'/books'}></Route>
        <Route exact element={<BookForm authors={authors} getBooks={getBooks} />} path='/addbook'></Route>
        <Route exact element={<BookEdit authors={authors} getBooks={getBooks} />} path='/bookedit/:id'></Route>
        <Route exact element={<Authors authors={authors} />} path='/authors' ></Route>
      </Routes>
    </div>
  );
}

export default App;
