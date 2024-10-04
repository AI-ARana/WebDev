class Student{
    constructor(name,bYear){
        this.name = name;
        this.bYear = bYear;
    }
    age(){
        const date=new Date();
        return date.getFullYear()-this.bYear;
    }
}
const sObj=new Student("Anurag",2000);
console.log(sObj.name);
console.log(sObj.age());
console.log(sObj.age(2000));

function bYear() {

}
console.log(sObj.age(bYear));