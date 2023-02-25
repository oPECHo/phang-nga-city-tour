import { ReactNode } from "react";

export default interface Tours{
    id: number;
    attributes: {
        available_seat: ReactNode;
        title: string;
        price: number;
        address: string;
        number: number;
        score: number;
        description: string;
        conditions: string ;
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
                    Type: string;
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