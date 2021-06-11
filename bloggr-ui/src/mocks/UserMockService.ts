import User from "../models/User";

export default abstract class UserMockService {

    public static getLoggedUser(): Promise<User> {
        return new Promise<User>((resolve) =>
            setTimeout(() => resolve(this.users[0]), 500)
        );
    }

    public static getAllUsers(): Promise<User[]> {
        return new Promise<User[]>((resolve) =>
            setTimeout(() => resolve(this.users), 500)
        );
    }

    private static users: User[] = [
        {
            name: "Marian Salvan",
            id: "1539639d-411d-4af2-9bff-8968251a1a56",
        },
        {
            name: "Marian Salvan II",
            id: "96f5dcf1-06b1-4e99-9563-eb9cf8855592",
        },
        {
            name: "Marian Salvan III",
            id: "aad40753-abea-45a3-9545-b0a953f9f996",
        },
        {
            name: "Marian Salvan IV",
            id: "9c0a2c70-7121-493a-89d2-da51c043a05c",
        },
        {
            name: "Marian Salvan V",
            id: "33f9509a-163a-4294-ba61-c9189573c786",
        },
    ]
}

