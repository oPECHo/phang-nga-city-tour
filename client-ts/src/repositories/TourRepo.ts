import axios from "axios";
//import payment from "../models/payment";
import Tours from "../models/tour";
import numberTour from "../models/numberTour";
import { IRepository } from "./IRepository";
import { userData } from "../helper";
import conf from "../conf";

const user = userData()

export class TourRepository implements IRepository<Tours | numberTour>{
    urlPrefix = `${conf.apiPrefix}/api/locations?populate=*`
    token = user.jwt

    async getAll(): Promise<Tours[] | null> {
        const resp = await fetch(`${this.urlPrefix}`);
        const data = await resp.json();
        return data.data;
    }

    async getTourById(id: string): Promise<Tours[] | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`);
        const data = await resp.json();
        return data.data;
    }

    async getTourByTitle(title: string): Promise<Tours[] | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[title][$eq]=${title}`)
        const data = await resp.json()
        return data.data
    }

    async getCategory(type: string): Promise<Tours[] | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[categories][type][$eq]=${type}`)
        const data = await resp.json()
        return data.data
    }


    async updateTour(id: string | number, data: numberTour): Promise<numberTour> {
        const resp = await fetch(`${conf.apiPrefix}/api/locations/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${this.token}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const data_res = await resp.json();
        return data_res
    }
}