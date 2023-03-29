import React from 'react'
import "./pagination.css";
import Pagination from "react-bootstrap/Pagination"

const Paginations = ({ post, totalPosts, paginate, pagFirst, pagLast }) => {
  const pageN = [];
  for(let i=1; i<=Math.ceil(totalPosts/post); i++){
    pageN.push(i);
  }

  return(
    <>
      
        <ul className='pagination pagination-lg justify-content-start'>
          {pageN.map(number =>(
            <li  className="page-item" key = {number}>
              <a onClick={() => paginate(number)}>
                <Pagination.Item>{number}</Pagination.Item>
                
              </a>
            </li>
          ))
        }
        </ul>
    </>
  )
}

export default Paginations