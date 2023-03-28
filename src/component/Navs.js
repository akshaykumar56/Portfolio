import Nav from 'react-bootstrap/Nav';

function FillExample() {
  return (
    <Nav activeKey="/home"  variant="tabs" className='d-flex justify-content-center sticky-top ' style={{backgroundColor:'#212529'}}>
      <Nav.Item>
      <Nav.Link eventKey="link-1" href="/home/html" style={{color:'white'}}>HTML</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-2" href="/home/css" style={{color:'white'}}>CSS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-3" href="/home/javascript" style={{color:'white'}}>JavaScript</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-4" href="/home/react" style={{color:'white'}}>ReactJs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-5" href="/home/node" style={{color:'white'}}>NodeJs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-6" href="/home/express" style={{color:'white'}}>ExpressJs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-7" href="/home/mongo" style={{color:'white'}}>MongoDB</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-8" href="/home/python" style={{color:'white'}}>Python</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-9" href="/home/ai" style={{color:'white'}}>AI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-10" href="/home/c" style={{color:'white'}}>DataStructure</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-11" href="/home/cpp" style={{color:'white'}}>CPP</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-12" href="/home/sql" style={{color:'white'}}>SQL</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FillExample;