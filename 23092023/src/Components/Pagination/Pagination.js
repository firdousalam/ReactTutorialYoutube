import axios from "axios";
import { useState,useEffect,React } from "react";
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Pagination() {
    const [post, setPost] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);


        });
      }, []);
     
      if (!post) return [];
    const recordPerPage = 10;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    let records = post.slice(firstIndex,lastIndex);
    const nPage = Math.ceil(post.length/recordPerPage);
    //alert(nPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);
    console.log(numbers);

      
      const postList= records.map((eachPost,i)=>
            <>
                <tr key={eachPost.id}>
                    <td>{eachPost.id}</td>
                    <td>{eachPost.userId}</td>
                    <td>{eachPost.title}</td>
                    <td> {eachPost.body}</td>
                </tr>
            </>
        )
      const prevPage = (e) =>{
        if(currentPage !== firstIndex){
            setCurrentPage(prev=>{return prev - 1});
        }
      }
      const nextPage = (e) =>{
        if(currentPage !== lastIndex){
            setCurrentPage(prev=>{return prev + 1});
        }
      }
      const paginationNumList =  numbers.map((pagNum,i)=>{
        return <> 
                 <li className={`page-item ${currentPage === pagNum ? 'active' : ''}`} key={i}>
                     <Alert.Link  className="page-link"  href="#" onClick={() => setCurrentPage(pagNum)}>
                        {pagNum}
                    </Alert.Link>

                 </li>
             </>
     })
  return (
    <div className="table-responsive">
      <Table responsive="lg">
            <thead className="active">
            <tr>
                <th style={{minWidth: "50px"}} ># ID</th>
                <th style={{minWidth: "100px"}} >User ID</th>
                <th>Title</th>
                <th>Description </th>
                
            </tr>
            </thead>
            <tbody>
                {postList}
            </tbody>
        </Table>
        <nav>
            <ul className="pagination">
                <li className="page-item">
                   
                    <Alert.Link  className="page-link"  href="#" onClick={prevPage}>Prev</Alert.Link>
                </li>
                {
                   paginationNumList
                }
                <li className="page-item">
                  
                    <Alert.Link  className="page-link"  href="#" onClick={nextPage}>Next</Alert.Link>

                </li>

            </ul>
        </nav>
    </div>
  )
}

