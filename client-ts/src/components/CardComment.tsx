import { Box} from '@mui/system';
import Card from "@mui/joy/Card/Card";
import { Row, Col, Container} from "react-bootstrap";
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';



function CardComment() {
    return(
        <div>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card variant="outlined" sx={{ height: 100, width: 1500,backgroundColor: 'white',marginTop:'450px',  }}>
                        <Container>
                            <Row>
                                <Col xs={5} md={6}>
                                <TextField
                                    id="filled-multiline-static"
                                    sx={{ width: 1200 }}
                                    multiline
                                    rows={1}
                                    label="เพิ่มความคิดเห็นของคุณ"
                                    variant="filled"/>
                                </Col>
                                <Col xs={0} md={0} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                                            <Button variant="contained" color="primary" size="large" sx={{marginTop:"10px"}}>โพสต์</Button>
                                        </Box>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Box>
        </div>
        
        );
}

export default CardComment;