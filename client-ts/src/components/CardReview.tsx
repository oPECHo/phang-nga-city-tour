import Card from '@mui/joy/Card';
import Avatar from  '@mui/joy/Avatar';
import Typography from '@mui/material/Typography/Typography';
import {Row,Col} from 'react-bootstrap';
import Box from '@mui/system/Box/Box';
import Review from '../models/review';

interface Props {
    reviewData: Review
}

function CardReview(props: Props) {
    const reviewData = props.reviewData ? props.reviewData.attributes : null
    const avatar_img = reviewData?.avatar

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
                                <Typography>{reviewData?.date}</Typography>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:"15px"}}>
                            <Typography>{reviewData?.comment}</Typography>
                        </Row>

                    </Card>
                </Row>
            </Box>
        </div>
    )
}

export default CardReview;