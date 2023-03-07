import { useNavigate, useParams } from 'react-router-dom';
import PaymentStatus from "../models/paymentStatus";

interface Props {
    statusData: PaymentStatus
}

function Cardhistory(props: Props) {
    const reviewData = props.statusData ? props.statusData.attributes : null;
    const tourId = reviewData?.tour_id;
    const start = reviewData?.tour_start as string;
    const end = reviewData?.tour_end as string;
    const image = reviewData?.image_url;
    const tourType = reviewData?.tour_type;
    const tour = reviewData?.tour_name;
    const status = reviewData?.status;
    const quantity = reviewData?.quantity;
    const total_price = reviewData?.total_price;
    const navigate = useNavigate();

    const LinkToComment = () => {
        navigate(`/TripDetailPage/${tourId}/review?tour_id=${tourId}&tour_name=${tour}`);
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{tour} ({tourType})</h5>
                    {tourType === 'Package' ? (
                        <p className="card-text" style={{ fontSize: "1rem", color: "#555", fontWeight: "bold" }}>
                            เริ่มเดินทางวันที่: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{start}</span>
                            <br />
                            สิ้นสุดวันที่: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{end}</span>
                            <br />
                            ราคา: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{total_price.toLocaleString('en-US')}</span><span> บาท</span>
                            <br />
                            จำนวน: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{quantity}</span><span> ท่าน</span>
                            <br />
                            สถานะการจอง: <span style={{ color: "#FF5C5C", fontWeight: "bold" }}>{status}</span>
                        </p>
                    ) : (
                        <p className="card-text" style={{ fontSize: "1rem", color: "#555", fontWeight: "bold" }}>
                            เริ่มเดินทางวันที่: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{start}</span>
                            <br />
                            ราคา: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{total_price.toLocaleString('en-US')}</span><span> บาท</span>
                            <br />
                            จำนวน: <span style={{ color: "#2971e6", fontWeight: "bold" }}>{quantity}</span><span> ท่าน</span>
                            <br />
                            สถานะการจอง: <span style={{ color: "#FF5C5C", fontWeight: "bold" }}>{status}</span>
                        </p>
                    )}
                    <a onClick={LinkToComment} className="btn btn-outline-success btn-sm float-end" style={{ marginLeft: "0.1rem" }}>แสดงความคิดเห็น</a>
                </div>
            </div>
        </div>
    );
}

export default Cardhistory;
