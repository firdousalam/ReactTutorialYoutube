import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { NameConext } from '../../App';

const Menu = ()=>{
    const [auth, setAuth]  = useContext(NameConext);
 
    return(
        <>
           <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        
                        {auth ? 
                        <>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="userlist">UserList</Nav.Link>
                        <Nav.Link as={Link} to="userdetails">Details</Nav.Link>
                        </>
                        :
                        <> 
                            <Nav.Link as={Link} to="login">Login</Nav.Link>
                            <Nav.Link as={Link} to="registration">Registration</Nav.Link>
                        </>
                        }
                        
                        <Nav.Link as={Link} to="pagination">Pagination</Nav.Link>
                        <Nav.Link as={Link} to="parentchild">parentChild</Nav.Link>
                        
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}
export default Menu