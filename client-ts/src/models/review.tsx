export default interface Review {
    id : number;
    attributes : {
        user: string;
        name_tour: string;
        author: string;
        score: number;
        avatar : string;
        comment : string;
        Date: string;
    } 
}
