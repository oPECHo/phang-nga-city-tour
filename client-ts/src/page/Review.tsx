import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserNavbar from "../components/UserNavbar";
import ReviewSection from "../components/ReviewSection";
import CommentSection from "../components/CommentSection";
import Tours from "../models/tour";
import Review from '../models/review';
import Repo from '../repositories'
import "../design/Review.css"

import { userData } from '../helper';

const ReviewPage = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [tourdata, setTourdata] = useState<Tours[]>([]);
    const user = userData();
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
                            
                            {user && (
                            <div>
                                <CommentSection tourdata={tourdata[0]} user={{
                                    username: ''
                                }} />
                            </div>
                            )}

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