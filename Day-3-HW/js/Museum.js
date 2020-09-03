import {Destination} from "./Destination.js";

class Museum extends Destination {
    ticketPrice;

    constructor(name, ticketPrice) {
        super(name);
        this.ticketPrice = ticketPrice;
    }
}

export {Museum}