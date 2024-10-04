class Emp{
    constructor(name){
        this.name = name;
    }
    static fun(){
        return "Anurag";
    }
}
const e1 = new Emp("Pankaj");
console.log(Emp.fun());
//console.log(e1.fun()); //Error
console.log(Emp.fun(e1));
console.log(e1.name);