export default interface PaymentStatus {
    attributes: {
        tour_name: string,
        tour_type: string,
        status: string,
        user: string,
        image_url: string,
        total_price: number,
        quantity: number
    }
}
