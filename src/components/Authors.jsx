import React from 'react'
import { Table } from 'react-bootstrap'

const Authors = ({authors}) => {
    console.log(authors)
  return (
    <div className='container mt-5'>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            {authors.map((author)=>{
                return(
                <tr>
                    <td>{author.id}</td>
                    <td>{author.name}</td>
                    <td>{author.surname}</td>
                </tr>)
            })}
        </tbody>
        </Table>
    </div>
    
  )
}

export default Authors