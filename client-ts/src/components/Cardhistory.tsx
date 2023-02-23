import { Box} from '@mui/system';
import Card from "@mui/joy/Card/Card";
import { Row, Col, Container} from "react-bootstrap";
import {Button, Link} from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';



function Cardhistory() {
    return(
        <div>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card variant="outlined" sx={{ height: 150, width: 1000,backgroundColor: 'white',marginTop:'50px',  }}>
                        <Container>
                            <Row>
                                <Col xs={0} md={0} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Box>
                                        <AspectRatio minHeight="10px" maxHeight="100px" sx={{ my: 1 }}>
                                            <img
                                                // src={tourimg}
                                                loading="lazy"
                                                alt=""
                                            />
                                        </AspectRatio>
                                        </Box>
                                </Col> 
                                <Col xs={0} md={0} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Box>
                                            <Row>
                                                <b><h3>ชื่อสถานที่</h3></b>
                                            </Row>
                                            <Row>
                                                <h6>แพ็คเกจ</h6>
                                            </Row>
                                            <Row>
                                                <h6>ที่อยู่</h6>
                                            </Row>
                                        </Box>
                                </Col>                              
                                <Col xs={0} md={0} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                                            <b>23/02/2566</b>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                                            <Link href="/detail/1/review">
                                                <Button variant="contained" color="primary" size="large" sx={{marginTop:"0px"}}>Comment</Button>
                                            </Link>
                                        </Box>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Box>
        </div>
        
        );
}

export default Cardhistory;