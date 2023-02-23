import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';

import { userData } from '../helper';



function UserNavbar() {
  const user = userData();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
  const [showPopup, setShowPopup] = useState(false);


  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the image state with the selected file
    if (event.target.files && event.target.files.length > 0) {
      // Convert the selected file to a URL
      const url = URL.createObjectURL(event.target.files[0]);
  
      // Update the image state with the URL
      setImage(url);
    }
  };

  const handleSave = () => {
      // Do something with the name, email, and image values
      console.log( `Image: ${image}`);
      setOpen(false);
    };


  return (
    <Navbar bg="light" expand="lg" className="shadow navbar sticky-top navbar-light bg-light" >
      <Container>
        <Navbar.Brand href="#home">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="../../public/Logo.png" alt="" width="175" height="49" />
          </a>
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#userTour">ค้นหา</Nav.Link>
            <Nav.Link href="#userTour">ทัวร์ของคุณ</Nav.Link>
            <Nav.Link href="#history">ประวัติ</Nav.Link>
            <NavDropdown title="หมวดหมู่" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ทริปวันเดียว</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">แพ็คเกจ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="/login">
            <button type="button" className="btn btn-dark">
              เข้าสู่ระบบ
            </button>
          </Nav.Link>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNavbar;