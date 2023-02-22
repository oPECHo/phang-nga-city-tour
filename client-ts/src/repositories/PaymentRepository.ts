import payment from "../models/payment"
import { IRepository } from "./IRepository"
import axios from "axios"
import { userData } from "../helper";
import paymentStatus from "../models/paymentStatus";

const user = userData()

export class PaymentRepository implements IRepository<payment | paymentStatus>{
    urlPrefix = "http://localhost:1337/api/payment-statuses"
    token = user.jwt

    async getPayment(user: string | number): Promise<paymentStatus[] | null> {
        const res = await fetch(`${this.urlPrefix}?populate=*&filters[user][$eq]=${user}`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        const data = await res.json()
        return data.data
    }

    async createPayment(data: payment): Promise<payment> {
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
        const resp = await fetch(`${this.urlPrefix}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${this.token}`,
            }
        })
        const data_res = await resp.json()
        return data_res
    }
}