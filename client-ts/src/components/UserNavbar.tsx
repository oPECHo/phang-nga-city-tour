import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { userData } from '../helper';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Col, Row } from 'react-bootstrap';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import '../index.css'

function UserNavbar() {
  const user = userData();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
 


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
    <>
      <AppBar position='sticky' color='transparent'>
      <Navbar  bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">
            <img
              src="/phang-nga city tour-1500h.png"
              width="250"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="transparent-nav-bar1-navbar-interactive">
            <Nav.Link style={{marginRight: "10px"}} href="/home"><h5>หน้าหลัก</h5></Nav.Link>
            <Nav.Link style={{marginRight: "10px"}} href="/home"><h5>หมวดหมู่</h5></Nav.Link>
            <Nav.Link style={{marginRight: "10px"}} href="/home"><h5>ทัวร์ของฉัน</h5></Nav.Link>
            <Nav.Link style={{marginRight: "10px"}} href="/home"><h5>ประวัติ</h5></Nav.Link>
            <Nav.Link style={{marginRight: "200px"}} href="/home"><h5>ค้นหา</h5></Nav.Link>
            {!user && (
              <>
                <Button href='/login' style={{marginRight: "10px"}} size="lg" variant="dark">เข้าสู่ระบบ</Button>
                <Button href='/register' size="lg" variant="white" style={{border: '1px solid black'}}>สมัครสมาชิก</Button>
              </>
            )}
            {user && (
              <div>
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClick}
                sx={{ mr: 2 }}
              >
                  <AccountCircle fontSize='large'/>
                </IconButton>
                <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{textAlign:"center", color:"black"}}>Profile Sitting</DialogTitle>
                <DialogContent>

                          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                              <Avatar sx={{ width: 128, height: 128 }} src={image} />
                          </Box>
                            <input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                      />
                      <DialogTitle sx={{textAlign:"center", color:"black"}}>เปลี่ยนรูปโปรไฟล์</DialogTitle>
                      <label htmlFor="contained-button-file">
                        <Row>
                            <Col>
                            <UploadFileIcon style={{marginRight:"10"}}/>
                            <Button variant="secondary" onClick={handleClick} style={{ marginTop:'2' }}>
                              อัพโหลดรูปภาพ
                            </Button>
                          </Col>
                        </Row>
                      </label>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleSave}>Save</Button>
                    </DialogActions>
  
                </Dialog>
                <Button href='/logout' size="lg" variant="danger">Logout</Button>
              </div>
              
            )}
          </Nav>
        </Container>
      </Navbar>
      </AppBar>
    </>
  );
}

export default UserNavbar;