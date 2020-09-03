import {Person} from "./Persons.js"
class Students extends Person {
    studId;
    year;
    grade;
    constructor(name,gender,stuId, year, grade) {
        super(name,gender,);
        this.stuId = stuId;
        this.year = year;
        this.grade = grade;
    }
}
export {Students};