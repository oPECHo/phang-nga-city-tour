export default interface PaymentStatus {
    id: any,
    attributes: any,
    data: {
        tour_name: string,
        tour_type: string,
        tour_start: Date | null,
        tour_end: Date | null,
        tour_id: string | number,
        tour_left: string,
        status: string,
        user: string,
        image_url: string,
        total_price: number,
        quantity: number,
    }
}
