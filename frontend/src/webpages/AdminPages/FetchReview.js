import React, { useEffect, useState } from 'react'
import Paginations from '../../pagination';
import AdminNav from '../Navbar/AdminNav';

function FetchReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Retrieve form submission data from JotForm API
    fetch('https://api.jotform.com/form/230750789829067/submissions?apiKey=93dddab11749405184f9d75e7f9e394d')
      .then(response => response.json())
      .then(data => setReviews(data.content))
      .catch(error => console.log(error));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [post] = useState(20);
  const indexOfLastPost = currentPage * post;
  const indexOfFirstPost = indexOfLastPost - post;
  const currentPost = reviews.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageN) => setCurrentPage(pageN);
  let review = currentPost.map((submission)=>{
    return(
      <>
            <tr key={submission.id}>
            <td>{submission.answers['3'].answer.first} {submission.answers['3'].answer.last}</td>
            <td>{submission.answers['4'].answer}</td>
            <td>{submission.answers['6'].answer}</td>
            <td>{submission.answers['5'].answer}</td>
            <td>{submission.answers['7'].answer}</td>
            </tr>
       
      </>
    )
  })
  return (
    <>
    <AdminNav />
    <div>
      <h1>Reviews</h1>
      <div className="homeH">
        <div className='table1'>
      <table className='table table-dark table-hover table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Ratings</th>
            <th>Is the App Helping You?</th>
            <th>Is the videos relevant to your problems?</th>
          </tr>
        </thead>
      <tbody className="table-group-divider">
      {review}
      </tbody>

      </table>
      </div>

    <h5 className='head5'>Showing {currentPost.length}/{reviews.length} reviews</h5>
    <Paginations post={post} totalPosts={reviews.length} paginate={paginate} />
    </div>
    </div>
    </>
  );
          }

export default FetchReview