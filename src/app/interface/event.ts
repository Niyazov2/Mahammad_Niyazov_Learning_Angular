export interface Event {
    id: number;
    nameOfEvent: string;
    hostName: string;
    email: string;
    fees: number,
    imageUrl: string;
    isAdmin?: boolean;
    lastUpdated: Date;
}