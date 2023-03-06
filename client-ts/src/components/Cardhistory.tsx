import { useNavigate, useParams } from 'react-router-dom';
import PaymentStatus from "../models/paymentStatus";

interface Props {
    statusData: PaymentStatus
}

function Cardhistory(props: Props) {
    const reviewData = props.statusData ? props.statusData.attributes : null;
    const image = reviewData?.image_url;
    const tour = reviewData?.tour_name;
    const status = reviewData?.status;
    const tourId = reviewData?.tour_id;
    const Datetour = reviewData?.tour_start;
    const navigate = useNavigate();

    const LinkToComment = () => {
        navigate(`/TripDetailPage/${tourId}/review?tour_id=${tourId}&tour_name=${tour}`);
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{tour}</h5>
                    <p className="card-text" style={{ fontSize: "1rem", color: "#555", fontWeight: "bold" }}>
                        สถานะการจอง: <span style={{ color: "#FF5C5C", fontWeight: "bold" }}>{status}</span>
                        <br></br>
                        เริ่มเดินทางวันที่: <span style={{ fontWeight: "bold" }}>{Datetour}</span>
                    </p>
                    <a onClick={LinkToComment} className="btn btn-outline-success btn-sm float-end" style={{ marginLeft: "0.1rem" }}>แสดงความคิดเห็น</a>
                </div>
            </div>
        </div>
    );
}

export default Cardhistory;
