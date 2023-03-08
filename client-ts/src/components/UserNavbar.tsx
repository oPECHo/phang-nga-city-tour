import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Col, Row } from 'react-bootstrap';

import { userData } from '../helper';
import { Avatar, Box, Dialog, DialogActions, DialogContent, IconButton } from '@mui/material';


function UserNavbar() {
  const user = userData();
  const [popup, setPopup] = useState(false);

  return (
    <Navbar bg="light" expand="lg" className="shadow navbar sticky-top navbar-light bg-light">
      <Container>
        <Navbar.Brand href="#home">
          <div className="container">
            <a className="navbar-brand" href="/home">
              <img src="../../public/Logo.png" alt="" width="175" height="49" />
            </a>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/search/All">ค้นหา</Nav.Link>
            <Nav.Link href="/Userstatus">ทัวร์ของคุณ</Nav.Link>
            <Nav.Link href="/history">ประวัติ</Nav.Link>
            <NavDropdown title="หมวดหมู่" id="basic-nav-dropdown">
              <NavDropdown.Item href="/search/All">ทั้งหมด</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/search/One-day-trip">ทริปวันเดียว</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/search/Package">แพ็คเกจ</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {!user && (
            <Nav className="grid-d">
              <Nav.Link href="/Login">
                <button type="button" className="btn btn-dark" style={{ width: "100px", whiteSpace: "nowrap" }}>
                  เข้าสู่ระบบ
                </button>
              </Nav.Link>
              <Nav.Link href="/Register">
                <button type="button" className="btn btn-dark" style={{ width: "100px", whiteSpace: "nowrap" }}>
                  ลงทะเบียน
                </button>
              </Nav.Link>
            </Nav>
          )}
          {user && (
            <div>
              <Button variant="contained" onClick={() => setPopup(true)}>
                {user.username}
              </Button>
              <IconButton sx={{ mr: 1 }} onClick={() => setPopup(true)}>
                <Avatar src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp' />
              </IconButton>

              <Dialog
                open={popup}
                onClose={() => setPopup(false)}
                maxWidth='sm'
              >
                <DialogContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Avatar sx={{ width: 128, height: 128 }} src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp' />
                  </Box>
                  <Row className="text-center">
                    <Col>
                      <div className="card" style={{ width: '18rem' }}>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item"></li>
                          <li className="list-group-item">Username : {user.username}</li>
                          <li className="list-group-item">Email : {user.email}</li>
                          <li className="list-group-item"></li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </DialogContent>

                <DialogActions>
                  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Button href='/Logout' size="sm" variant="btn btn-outline-danger">Logout</Button>
                  </Box>
                </DialogActions>

              </Dialog>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default UserNavbar;