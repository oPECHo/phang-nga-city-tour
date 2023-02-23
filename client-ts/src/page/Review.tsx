import { Box } from '@mui/system';
import Card from '@mui/joy/Card';
import Avatar from  '@mui/joy/Avatar';
import Typography from '@mui/material/Typography/Typography';
import {Row,Col,Container, } from 'react-bootstrap';
import FigureImage from 'react-bootstrap/FigureImage'
import Button from '@mui/material/Button';
import UserNavbar from '../components/UserNavbar';
import StarIcon from '@mui/icons-material/Star';
import CardReview from '../components/CardReview';
import CardComment from '../components/CardComment';

import AppBar from '@mui/material/AppBar';
import { colors } from '@mui/material';

const ReviewPage = () => {
    return (
        <div>
            <UserNavbar/>
            <CardReview/>
            <AppBar position='fixed' color='transparent' sx={{padding:"90px",marginTop:"80px"}}>
                    <CardComment/>
            </AppBar>              
        </div>
    )
}

export default ReviewPage