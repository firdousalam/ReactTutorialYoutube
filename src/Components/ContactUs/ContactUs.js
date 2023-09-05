import axios from "axios";
import {React,useState} from "react";
import { Form,Button,Card} from "react-bootstrap";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function ContactUs() {
 
  const [post, setPost] = useState({
    "email" : "",
    "question" : ""
  });
  const [isSaved, setIsSaved] = useState(0)

 

  const createPost = (event) => {
    //Prevent page reload
    event.preventDefault();
    axios.post(baseURL, {
        title: post.email,
        body: post.question
      })
      .then((response) => {
        setPost(response.data);
        setIsSaved(1);
      });
  }
  const changeHandler = (e) => {
    setPost(prev => {
        const cloneState = {...prev};
        cloneState[e.target.name] = e.target.value;
        return cloneState;
    });
}

  if (!post) return "No post!"
const SaveMessage  = (
    <Card >
    <Card.Body>
        <Card.Title>Your Post Saved Successfully , we will contact you soon</Card.Title>
        <Card.Text>
            {post.title}<br/>
        {post.body}
        </Card.Text>
        
    </Card.Body>
</Card>
)
  return (
    <div className="container">
        
       
        { isSaved ? SaveMessage : ""}
        
        <Form onSubmit={createPost}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="name@example.com" onChange={changeHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Questions</Form.Label>
                <Form.Control as="textarea" rows={4} name="question"  onChange={changeHandler}/>
            </Form.Group>
            <div className="d-grid gap-2">
            <Button variant="primary" size="lg" type="submit">
                Submit
            </Button>
            </div>
        </Form>
        
      
    </div>
  );
}