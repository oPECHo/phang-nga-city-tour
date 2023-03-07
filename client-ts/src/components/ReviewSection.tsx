import { Rating } from '@mui/material';
import Review from '../models/review';

interface Props {
    reviewData: Review
}

function ReviewSection(props: Props) {
    const reviewData = props.reviewData ? props.reviewData.attributes : null

    return (
        <div>
            <div className="mt-1">
                <div className="d-flex flex-row p-3 gap-3">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                        width="40"
                        height="40"
                        className="rounded-circle mr-3"
                    />
                    <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center gap-1" >
                                <span className="mr-2 fw-bold">{reviewData?.user}</span>
                                <Rating name="read-only mx-auto" value={reviewData?.score} size="small" readOnly />
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