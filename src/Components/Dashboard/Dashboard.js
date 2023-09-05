import { useState,React,useEffect } from "react"
import axios from "axios";
import Card from 'react-bootstrap/Card';
const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Dashboard() {
    /*
        To perform this request when the component mounts, you use the useEffect hook. This involves importing Axios, using the .get() method to make a GET request to your endpoint, and using a .then() callback to get back all of the response data.
        The response is returned as an object. The data (which is in this case a post with id, title, and body properties) is put in a piece of state called post which is displayed in the component.
    */
    const [post, setPost] = useState(null);

    useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) return null;

    const postList= post.map((eachPost)=>
        <Card>
            <Card.Body>
                <Card.Title>{eachPost.id} : {eachPost.title}</Card.Title>
                <Card.Text>
                    {eachPost.body}
                </Card.Text>
            </Card.Body>
        </Card>
    )

    return (
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
export default  Dashboard