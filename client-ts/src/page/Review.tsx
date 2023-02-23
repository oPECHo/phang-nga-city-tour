import UserNavbar from '../components/UserNavbar';
import CardReview from '../components/CardReview';
import CardComment from '../components/CardComment';

import AppBar from '@mui/material/AppBar';

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