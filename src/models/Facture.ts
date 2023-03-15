import User from "@/models/User";

export default class Facture {
    private id: number;
    user: User;
    private total: number;
    private date: Date;


    constructor(id: number, user: User, total: number, date: Date) {
        this.id = id;
        this.user = user;
        this.total = total;
        this.date = date;
    }


    getId(): number {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }
    getUser(): User {
        return this.user;
    }

    setUser(value: User) {
        this.user = value;
    }
    getTotal(): number {
        return this.total;
    }

    setTotal(value: number) {
        this.total = value;
    }

    getDate(): Date {
        return this.date;
    }

    setDate(value: Date) {
        this.date = value;
    }

}
