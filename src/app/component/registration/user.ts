export class User {
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public address: string,
        public city: string,
        public state: string,
        public email: string,
        public password: string,
        public mobileNumber: number,
        public telephone?: number,
    ) {}
}

