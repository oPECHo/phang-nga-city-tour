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
                    src="https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_960_720.png"
                    width="40"
                    height="40"
                    className="rounded-circle mr-3"
                />
                <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center">
                        <span className="mr-2 fw-bold">{reviewData?.user}</span>
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