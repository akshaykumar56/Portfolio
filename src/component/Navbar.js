import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Img from './logo.png' 
import './Navbar.css'
function BasicExample() {
  return (
    <Navbar className='d-flex justify-content-around  border-bottom' style={{backgroundColor:'#212529',color:'white'}}>
      <Container className='d-flex justify-content-between'>
        <div>
        <Navbar.Brand href="/home"><img src={Img} alt="LOGO" style={{width:"60px",height:"30px"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="/project" style={{color:'white'}}>Projects</Nav.Link>
            <Nav.Link href="/contact" style={{color:'white'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;