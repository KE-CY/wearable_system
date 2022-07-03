export interface IPlaceParams {
    id?: number;
    title?: string;
    describle?: string;
    time?: number;
}

export interface IPlaceCreateParams extends IPlaceParams {
    title: string;
    describle: string;
    time: number;
}