export default interface PaymentStatus {
    id : number;
    attributes: {
        tour_name: string,
        status: string,
        image_url : string,
        createdAt:string
    }
}
