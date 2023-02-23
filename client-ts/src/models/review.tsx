export default interface Review {
    id : number;
    attributes : {
        tour_name: string;
        author: string;
        score: number;
        avatar : string;
        comment : string;
        date: string;
    } 
}
