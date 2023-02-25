export default interface Review {
    id : number;
    attributes : {
        user: string;
        tour_name: string;
        author: string;
        score: number;
        avatar : string;
        comment : string;
        Date: string;
    } 
}
