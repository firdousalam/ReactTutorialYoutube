import axios from "axios";
import { useState,React,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Outlet } from "react-router-dom";
const baseURL = "https://jsonplaceholder.typicode.com/posts/2";

function UserDetails(){

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

      if (!post) return null;
     
               

    return(
        <>
            <div className="container-fluid">
                <h1> User Details </h1>
                <div>
                    <Card>
                        <Card.Body>
                            <Card.Title>User Id : {post.id} </Card.Title>
                            <Card.Title>{post.title} </Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default UserDetails;