class Pereson{
    constructor(fName,lName){
        this._fName = fName;
        this._lName = lName;
    }
    // Getters for fName
    get fName()
    {
        return this._fName;
    }
    // Setters for fName
    set fName(value){
        if(value.length>0)
        {
            this._fName = value;
        }
        else
        {
            console.log('Fisrt Name can not be empty');
        }
    }
    get fullName(){
        return `${this._fName} ${this._lName}`;
    }
}
//Person Class
const pObj1 = new Pereson('Anurag', 'Rana');
console.log(pObj1.fullName);
pObj1.fName="Pankaj"; // change using setters
console.log(pObj1.fullName);