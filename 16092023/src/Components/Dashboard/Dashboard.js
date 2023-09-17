import axios from "axios";
import { useState,React,useEffect } from "react";
import Card from 'react-bootstrap/Card';
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Dashboard(){

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        }).catch( (error) => {
            console.log(error);
        })
    },[]);
      if (!post) return null;
      const postList = post.map((eachPost)=>{
       return <>
                    <Card>
                        <Card.Header> Id : {eachPost.id}  User Id : {eachPost. userId}</Card.Header>
                        <Card.Body>
                            <Card.Title>{eachPost.title}</Card.Title>
                            <Card.Text>
                                {eachPost.body}
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
            </>

      })
    return(
        <>
            <div className="container-fluid">
                <h1> Dashboard </h1>
                <div>
                   {postList}
                </div>
            </div>
        </>
    )
}
export default Dashboard;