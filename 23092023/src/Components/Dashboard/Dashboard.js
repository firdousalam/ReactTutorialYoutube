import axios from "axios";
import { useState,React,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import constant from "../../Utils/Constant"
const baseURL = constant.bsaeAPIUrl+"region/getTestData";

function Dashboard(){

    const [post, setPost] = useState(null);
    const navigate = useNavigate();
/*
    const navigateTo = (URLId)=>{
        navigate('userdetails/'+URLId);
    }
*/    
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
                    <Card > {/* onClick={ navigateTo(eachPost.id) } */}
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