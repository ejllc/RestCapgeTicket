export class Event {
    id: string;
    name: string;
    shortDescription: string;
    extendedDescription: string;
    dateEvent: Date;
    timeEvent: Date;
    priceRange: number;
    rules: string;
    nameRoom: string;
    cityRoom: string;
    addressRoom: string;
    roomType: string;
    capacityRoom: number;

    constructor() {
        this.id = "";
        this.name = "";
        this.shortDescription = "";
        this.extendedDescription = "";
        this.dateEvent = new Date();
        this.timeEvent = new Date();
        this.priceRange = 0;
        this.rules = "";
        this.nameRoom = "";
        this.cityRoom = "";
        this.addressRoom = "";
        this.roomType = "";
        this.capacityRoom = 0;
    }
}
