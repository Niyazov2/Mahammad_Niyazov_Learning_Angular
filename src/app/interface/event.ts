export interface Event {
    id: number;
    nameOfEvent: string;
    hostName: string;
    email: string;
    imageUrl: string;
    isAdmin?: boolean;
}