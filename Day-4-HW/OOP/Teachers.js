import {Person} from "./Persons.js"
class Teachers extends Person {
    degree;
    constructor(name,gender, degree) {
        super(name, gender);
        this.degree = degree;
    }
}
export {Teachers};