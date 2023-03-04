import { useEffect, useState } from "react";
import PaymentStatus from "../models/paymentStatus";
import Repo from '../repositories';

function CardUserStatus() {
    const [paymentStatus,setPaymentStatus] = useState<PaymentStatus[]>([]);

    const fetchData = async () => {
        try {
            const res = await Repo.Paymentdata.getPayment();
            if(res) {
                setPaymentStatus(res)
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])


    const data = paymentStatus.length > 0 ? paymentStatus[0].attributes : null;

    return (
        <div>
            <section id="gallery">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src="https://www.touronthai.com/gallery/photo/3799/24881.jpg" alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{data?.tour_name}</h5>
                                    <p className="card-text" style={{ fontSize: "1rem", color: "#555", fontWeight: "bold" }}>สถานะการจอง: <span style={{ color: "#28a745", fontWeight: "bold" }}>
                                        {data?.status}
                                    </span></p>
                                    <a href="/TripDetailPage/${props.Tours.id}/review" className="btn btn-outline-success btn-sm" style={{ marginLeft: "0.1rem" }}>comment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CardUserStatus;


