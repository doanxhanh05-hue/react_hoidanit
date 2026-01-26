import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleSignup = ()=>{
        navigate('/register');
    }
    const handleLogin = ()=>{
        navigate('/login');
    }
    return (
        <Navbar expand="lg" bg='light'>
            <Container>
                <Navbar.Brand href="#home">Hanh dep trai</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/Users' className='nav-link'>User</NavLink>
                        <NavLink to='/Admins' className='nav-link'>Admin</NavLink>
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Users">User</Nav.Link>
                        <Nav.Link href="/Admins">Admin</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <button className='btn-login' onClick={()=> handleLogin()}>Log In</button>
                        <button className='btn-signup' onClick={()=>handleSignup()}> Sign up</button>
                        <NavDropdown title="sesting" id="basic-nav-dropdown">
                            <NavDropdown.Item>Log in</NavDropdown.Item>
                            <NavDropdown.Item>log out</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;