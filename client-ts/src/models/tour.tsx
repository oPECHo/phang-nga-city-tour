export default interface Tours{
    id: number;
    attributes: {
        Title: string;
        Longdescription: string;
        price: number;
        available_seat: number;
        vehicle: string | null;
        image: {
            data: {
                attributes: {
                    formats: {
                        thumbnail: {
                            url: string;
                        }
                    }
                }
            }
        }
        category: {
            data: {
                attributes: {
                    type: string;
                }
            }
        }
        tour_date : {
            data : {
                attributes: {
                    first_trip : string;
                    second_trip : string;
                    first_trip_end : string | null;
                    second_trip_end : string | null;
                }
            } | null
        }
}}