import { Students } from "./Students.js"
import { Teachers } from "./Teachers.js"
class Classes {
    constructor(id, subjects, teachers, students) {
        this.id = id;
        this.subjects = subjects;
        this.teachers = teachers;
        this.students = [];
        console.log(this.teachers)
        console.log(this.students)
    }
    set newStudent(student) {
        if (student instanceof Students) this.students.push(student);
        else return;
    }
    findStudent(name){
        return this.students.filter(function(x) {
           return x.name == name;
       });
   }
    filterStudent(point){
        return this.students.filter(function(x) {
            return x.point > point;
        });
    }
} 
let teacherChemistry = new Teachers("Hà","female","Thạc Sĩ");
let classChemistry = new Classes(25,"Hóa Học",teacherChemistry);
let student1 = new Students ("Trung","male",1,"2016-2020",5);
let student2 = new Students ("Vy","female", 5,"2015-2019",8);
let student3 = new Students ("Tuấn","male",16,"2017-2021",7);
let student4 = new Students ("Thắng","male",98,"2017-2021",1);
classChemistry.newStudent = student1;
classChemistry.newStudent = student2;
classChemistry.newStudent = student3;
classChemistry.newStudent = student4;
console.log(classChemistry.findStudent("Thắng"));
console.log(classChemistry.filterStudent(6));

