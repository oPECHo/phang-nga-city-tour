import { Rating } from '@mui/material';
import Review from '../models/review';

interface Props {
    reviewData: Review
}


function ReviewSection(props: Props) {
    const reviewData = props.reviewData ? props.reviewData.attributes : null

    return (
        <div>
            <div className="mt-2">
                <div className="d-flex flex-row p-3 gap-3">
                <img
                    src="../../public/IdleProfile.png"
                    width="40"
                    height="40"
                    className="rounded-circle mr-3"
                />
                <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center gap-1" >
                        <span className="mr-2 fw-bold">{reviewData?.user}</span>
                        <Rating name="read-only mx-auto" value={reviewData?.score} size="small" readOnly />
                        <span className="ms-1 fw-light">({reviewData?.name_tour})</span>
                    </div>
                    <small>{reviewData?.Date}</small>
                    </div>
                    <p className="text-justify comment-text mb-0">{reviewData?.comment}</p>
                    <div className="d-flex flex-row user-feed"></div>
                </div>
                </div>
            </div>
        </div>
        );
    };

export default ReviewSection;