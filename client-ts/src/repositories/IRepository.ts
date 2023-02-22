export interface IRepository<T> {
    getAll?(): Promise<T[] | null>;
    getTourById?(id: string|number) : Promise<T[] | null>;
    getTourByTitle?(title: string) : Promise<T[] | null>;
    getCategory?(type: string) : Promise<T[] | null>
    updateTour?(id: string|number, data : T) : Promise<T>;

    getPayment?(user: string | number) : Promise<T[] | null>;
    createPayment?(data: T): Promise<T>;
    deletePayment?(id: string|number): Promise<void>;
}