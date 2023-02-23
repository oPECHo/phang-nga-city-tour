import Card from '@mui/joy/Card';
import Avatar from  '@mui/joy/Avatar';
import Typography from '@mui/material/Typography/Typography';
import {Row,Col} from 'react-bootstrap';
import Box from '@mui/system/Box/Box';

function CardReview() {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <Row>
                    <Card  variant="outlined" sx={{ width: 250 , marginLeft: 15, marginTop:5, backgroundColor:'#92FAFF', border:3 }} size='lg'>
                        <Row xs="2" style={{marginTop:"5px"}}>
                            <Col xs='3'>
                                <Avatar variant='outlined'>RE</Avatar>
                            </Col>  
                            <Col xs='6'>
                                <Typography style={{fontWeight: "bold", color: "black"}}>User</Typography>
                                <Typography>23/02/2023</Typography>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:"15px"}}>
                            <Typography><b>Comment</b></Typography>
                        </Row>
                    </Card>
                </Row>
            </Box>
        </div>
    )
}

export default CardReview;