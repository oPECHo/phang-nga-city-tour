export default interface Review {
    comments: any;
    id : number;
    attributes : {
        id_tour: string | undefined;
        user: string;
        name_tour: string;
        author: string;
        score: number;
        avatar : string;
        comment : string;
        Date: string;
    } 
}
