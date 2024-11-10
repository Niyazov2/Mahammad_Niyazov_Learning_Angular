export interface Event {
    id: number;
    nameOfEvent: string;
    hostName: string;
    email: string;
    phoneNumber?: number;
    imageUrl: string;
    isAdmin: boolean;
}
