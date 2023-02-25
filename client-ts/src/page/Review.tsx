import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserNavbar from "../components/UserNavbar";
import ReviewSection from "../components/ReviewSection";
import CommentSection from "../components/CommentSection";
import Tours from "../models/tour";
import Review from '../models/review';
import Repo from '../repositories'
import "../design/Review.css"


const ReviewPage = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [tourdata, setTourdata] = useState<Tours[]>([]);
    const params = useParams();

    const fetchData = async () => {
        try {
            const res = await Repo.Reviewdata.getReview(params.id as string);
            if (res) {
                setReviews(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [params.id]);


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

                            {/* <div>
                                <CommentSection tourdata={tourdata[0]} />
                            </div> */}

                            <div>
                                {reviews.map((item) =>
                                    <ReviewSection reviewData={item} />
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPage;