import { ReviewRepository } from "./ReviewRepository";
import { TourRepository } from "./TourRepo";
import { PaymentRepository } from "./PaymentRepository";

const repositories = {
    Tourdata: new TourRepository(),
    Reviewdata: new ReviewRepository(),
    Paymentdata: new PaymentRepository()
}

export default repositories