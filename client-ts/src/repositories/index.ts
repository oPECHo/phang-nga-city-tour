import { TourRepository } from "./TourRepository";
import { PaymentRepository } from "./PaymentRepository";

const repositories = {
    Tourdata :new TourRepository(),
    Paymentdata :new PaymentRepository()
}

export default repositories