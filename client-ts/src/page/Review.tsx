// import { Box } from '@mui/system';
// import Card from '@mui/joy/Card';
// import Typography from '@mui/material/Typography/Typography';
// import UserNavbar from '../components/UserNavbar';
// import CardReview from '../components/CardReview';
// import CardComment from '../components/CardComment';
// import AppBar from '@mui/material/AppBar';
// import Repo from '../repositories'
// import Review from '../models/review';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Grid } from '@mui/material';

// const ReviewPage = () => {
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const params = useParams();

//   const fetchData = async () => {
//     try {
//         const res = await Repo.Reviewdata.getReview(params.id as string);
//         if(res) {
//             setReviews(res)
//         }
//     } catch (error) {
//         console.log(error)
//     }
//   }

//   useEffect(() => {
//       fetchData();
//   },[params.id]);
//   return (
//       <div style={{ minHeight: "100vh" }}>
//       <UserNavbar/>
//       <Box sx={{display: 'flex' ,justifyContent: 'center'}}>
//         <Card variant="outlined" sx={{ width: 300 , marginLeft: 15, marginTop:4, backgroundColor:'white', border:3}}>
//           <Typography style={{ fontSize: 24, fontWeight: "bold", color: "black", textAlignLast: "center"}}>Review & Comment</Typography>
//         </Card>
//       </Box>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 10}}>
//         {reviews.map((item, index) => 
//             <Grid item xs={2} sm={4} md={4} lg={3} xl={2} key={index}>
//                 <CardReview reviewData={item}/>
//             </Grid>
//         )}
//       </Grid>
//       <AppBar position='sticky' color='transparent' sx={{ bottom: 0 }}>
        
//       </AppBar>              
//     </div>
//   )
// }

// export default ReviewPage

import UserNavbar from "../components/UserNavbar";
import "../design/Review.css"

const ReviewPage = () => {
    
    return (
        <div>
            <UserNavbar />
            <div className="container mt-5 mb-5">
            <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                <div className="card">
                <div className="p-3">
                    <h6>Comments</h6>
                </div>

                <div className="mt-3 d-flex flex-row align-items-center p-3 form-color gap-3">
                    <img src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_960_720.png" width="50" className="rounded-circle mr-2" />
                    <input type="text" className="form-control" placeholder="Enter your comment..." />
                </div>

                <div className="mt-2">
                    <div className="d-flex flex-row p-3 gap-3">
                    <img src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_960_720.png" width="40" height="40" className="rounded-circle mr-3" />
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center">
                            <span className="mr-2 fw-bold">Brian selter</span>
                            </div>
                            <small>12h ago</small>
                    </div>
                    <p className="text-justify comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className="d-flex flex-row user-feed">
                    </div>
                    </div>
                </div>


                <div className="d-flex flex-row p-3 gap-3">
                    <img src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_960_720.png" width="40" height="40" className="rounded-circle mr-3" />
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center">
                            <span className="mr-2 fw-bold">Seltos Majito</span>
                            </div>
                            <small>2h ago</small>
                    </div>
                    <p className="text-justify comment-text mb-0">Tellus in hac habitasse platea dictumst vestibulum. Lectus nulla at volutpat diam ut venenatis tellus. Aliquam etiam erat velit scelerisque in dictum non consectetur. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Aliquam faucibus purus in massa.</p>
                    <div className="d-flex flex-row user-feed">
                    </div>
                    </div>
                </div>

                <div className="d-flex flex-row p-3 gap-3">
                    <img src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_960_720.png" width="40" height="40" className="rounded-circle mr-3" />
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center">
                            <span className="mr-2 fw-bold">Maria Santola</span>
                            </div>
                            <small>12h ago</small>
                    </div>
                    <p className="text-justify comment-text mb-0"> Id eu nisl nunc mi ipsum faucibus. Massa massa ultricies mi quis hendrerit dolor. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Urna condimentum mattis pellentesque id.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className="d-flex flex-row user-feed">
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ReviewPage;