import { useEffect, useState } from "react";
import PaymentStatus from "../models/paymentStatus";
import Repo from '../repositories';
import { userData } from '../helper';

interface Props {
    status : PaymentStatus
    user : {
        username : string
    }
}

function CardUserStatus(props: Props) {
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus[]>([]);
    const statusData = props.status.data;
    const username = userData();

    const fetchData = async () => {
        try {
            const res = await Repo.Paymentdata.getByUserName(username.username as string);
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

    return (
        <div>
            <section id="gallery">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <img src={statusData?.image_url}alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{statusData?.tour_name}</h5>
                                    <p className="card-text" style={{ fontSize: "1rem", color: "#555", fontWeight: "bold" }}>สถานะการจอง: <span style={{ color: "#28a745", fontWeight: "bold" }}>
                                        {statusData?.status}
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
