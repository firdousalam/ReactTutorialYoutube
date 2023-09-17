import axios from "axios";
import { useState,React,useEffect } from "react";
import Table from 'react-bootstrap/Table';
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function UserList(){

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

      if (!post) return null;
      
      const postList= post.map((eachPost)=>
                    <>
                        <tr>
                            <td>{eachPost.id}</td>
                            <td>{eachPost.userId}</td>
                            <td>{eachPost.title}</td>
                            <td> {eachPost.body}</td>
                        </tr>
                    </>
                )

    return(
        <>
            <div className="container-fluid">
                <h1> UserList </h1>

                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th># ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Description </th>
                       
                    </tr>
                    </thead>
                    <tbody>
                        {postList}
                    </tbody>
                </Table>
               
            </div>
        </>
    )
}
export default UserList;

