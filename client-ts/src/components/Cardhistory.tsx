import PaymentStatus from "../models/paymentStatus";

interface Props {
    statusData: PaymentStatus
}

function Cardhistory(props: Props) {
    const reviewData = props.statusData ? props.statusData.attributes : null;
    const image = reviewData?.image_url;
    const tour = reviewData?.tour_name;
    const status = reviewData?.status;

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{tour}</h5>
                    <p className="card-text" style={{ fontSize: "1rem", color: "#555", fontWeight: "bold" }}>
                        สถานะการจอง: <span style={{ color: "#FF5C5C", fontWeight: "bold" }}>{status}</span></p>
                    <a href="/TripDetailPage/${props.Tours.id}/review" className="btn btn-outline-success btn-sm" style={{ marginLeft: "0.1rem" }}>comment</a>
                </div>
            </div>
        </div>
    );
}

export default Cardhistory;
