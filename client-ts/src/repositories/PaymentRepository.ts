import { IRepository } from "./IRepository"
import paymentStatus from "../models/paymentStatus";
import { userData } from "../helper";
import conf from "../conf";

const user = userData()

export class PaymentRepository implements IRepository<paymentStatus>{
    urlPrefix = `${conf.apiPrefix}/api/payment-statuses?populate=*`
    deletePrefix = `${conf.apiPrefix}/api/payment-statuses`
    token = user.jwt

    async getPayment(): Promise<paymentStatus[] | null> {
        const res = await fetch(`${this.urlPrefix}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        });
        const data = await res.json()
        return data.data
    }

    async createPayment(data: paymentStatus): Promise<paymentStatus> {
        const resp = await fetch(`${this.urlPrefix}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${this.token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const data_res = await resp.json()
        return data_res;
    }

    async deletePayment(id: string | number): Promise<void> {
        const resp = await fetch(`${this.deletePrefix}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`,
            }
        })
        const data_res = await resp.json()
        return data_res
    }


    async getByUserName(user: string): Promise<paymentStatus[] | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[user][$eq]=${user}`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`,
            }
        });
        const data = await resp.json();
        return data.data;
    }

}
