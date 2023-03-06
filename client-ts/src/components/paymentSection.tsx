import Repo from '../repositories';
import PaymentStatus from '../models/paymentStatus';
import Tours from '../models/tour';
import { userData } from '../helper';

interface Props {
    tourdata : Tours
    user : {
        username : string
    }
    image: string
}

function PaymentSection(props: Props) {

    const username = userData();

    const Booked = async () => {
        await Repo.Paymentdata.createPayment(newPaymentStatus)
        console.log(props)
        console.log("Done!")
    }

    const tourName = props.tourdata?.attributes.title

    const newPaymentStatus: PaymentStatus = {
        data: {
            tour_name: tourName as string,
            status: 'จองแล้ว',
            user: username.username,
            image_url: props.image,
        }
    }

    return (
        <div className="btn btn-success btn-lg mx-3 my-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            style={{ width: "100px" , whiteSpace: "nowrap" }}
            onClick={Booked}>
            จองเลย!
        </div>
    );
}

export default PaymentSection;
