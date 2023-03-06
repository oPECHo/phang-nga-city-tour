import { IRepository } from "./IRepository"
import paymentStatus from "../models/paymentStatus";

export class PaymentRepository implements IRepository<paymentStatus>{
    urlPrefix = "http://localhost:1337/api/payment-statuses?populate=*"

    async getPayment(): Promise<paymentStatus[] | null> {
        const res = await fetch(`${this.urlPrefix}`);
        const data = await res.json()
        return data.data
    }

    async createPayment(data: paymentStatus): Promise<paymentStatus> {
        const resp = await fetch(`${this.urlPrefix}`, {
            method: "POST",
            headers: { 
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const data_res = await resp.json()
        return data_res;
    }

    async getByUserName(user: string): Promise<paymentStatus[] | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[user][$eq]=${user}`);
        const data = await resp.json();
        return data.data;
    }

}
