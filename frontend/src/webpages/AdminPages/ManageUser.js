import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Paginations from "../../pagination";
import AdminNav from "../Navbar/AdminNav";
import "./adminPage.css";

function ManageUser() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = () => {
    fetch("http://localhost:8000/getAUser", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.data);
      });
  };
  const handleBanClick = async (userId, userName) => {
    if (
      window.confirm(`Do you want to ban the user with user name: ${userName}`)
    ) {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/banUser/${userId}`
        );
        if (response.status === 200) {
          toast.success("User banned succesfully!");
          // window.location.reload();
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleunBanClick = async (userId, userName) => {
    if (
      window.confirm(`Do you want to Un-Ban the user with user name: ${userName}`)
    ) {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/unbanUser/${userId}`
        );
        if (response.status === 200) {
          toast.success("User Un-banned succesfully!");
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const removeUser = (id, userName) => {
    if (
      window.confirm(
        `Do you want to delete the user with user name: ${userName}`
      )
    ) {
      fetch("http://localhost:8000/removeUser", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userId: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload();
          toast.success(data.data);
        });
    }
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [post, setPost] = useState(5);
  const indexOfLastPost = currentPage * post;
  const indexOfFirstPost = indexOfLastPost - post;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageN) => setCurrentPage(pageN);
  let tableContent = currentPost.map((i) => {
    return (
      <tbody>
        <tr>
          <td>{i._id}</td>
          <td>{i.userName}</td>
          <td>{i.email}</td>
          <td>{i.isBan? "Banned" : "Active"}</td> {/* React doesnt render boolean value so using ternary operator to show the results.*/}
          {console.log(i.createdAt)}
          <td>
            <div className="actio">
              <button
                className="buttonRemove"
                onClick={() => handleBanClick(i._id, i.userName)}
              >
                Ban User
              </button>
              <button
                className="buttonRemove"
                onClick={() => handleunBanClick(i._id, i.userName)}
              >
                Un-Ban User
              </button>
              <button
                className="buttonRemove"
                onClick={() => removeUser(i._id, i.userName)}
              >
                Remove User
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <>
      <AdminNav />
      <h2>Manage User</h2>
      <div className="homep">
        <div className="table1"></div>
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Ban Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          {tableContent}
        </table>
      </div>
      <Paginations post={post} totalPosts={data.length} paginate={paginate} />
      <ToastContainer />
    </>
  );
}

export default ManageUser;
