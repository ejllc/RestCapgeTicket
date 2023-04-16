export class User {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    date: Date;

    constructor() {
        this.id = "";
        this.name = "";
        this.surname = "";
        this.email = "";
        this.password = "";
        this.date = new Date();
    }
}


