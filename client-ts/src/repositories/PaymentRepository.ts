import { IRepository } from "./IRepository"
import paymentStatus from "../models/paymentStatus";

export class PaymentRepository implements IRepository<paymentStatus>{
    urlPrefix = "http://localhost:1337/api/payment-statuses"

    async getPayment(): Promise<paymentStatus[] | null> {
        const res = await fetch(`${this.urlPrefix}`);
        const data = await res.json()
        return data.data
    }
}
