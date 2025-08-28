export interface User {
    id: string;
    name: string;
    langage: string;
    bio: string;
    version: number;
    [key: string]: any;
}