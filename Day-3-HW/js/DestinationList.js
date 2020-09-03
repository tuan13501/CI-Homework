import {Destination} from "./Destination.js";
import {Restaurant} from "./Restaurant.js";
class DestinationList {
    destinations;
    dateModified;

    constructor(){
        this.destinations = [];
        this.dateModified = new Date().toISOString();
    }
    addDestination(destination) {
        if(destination instanceof Destination){
            this.destinations.push(destination);
        }
        else {
            console.log('Không thêm được');
        }
    }
    findDestination(name) {
        let findDestinationName = this.destinations.filter(function(x) {
            return x.name == name;
        });
        return;
    }
    get totalPrice() {
        let totalPrice = 0;
            this.destinations.forEach(function(destination) {
                if(destination instanceof Restaurant){
                    
            })
    }
}