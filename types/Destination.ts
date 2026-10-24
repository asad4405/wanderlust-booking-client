export interface DestinationType {
    _id: string;
    destinationName: string;
    country: string;
    price: string | number;
    duration: string;
    imageUrl: string;
    rating?: number;
}