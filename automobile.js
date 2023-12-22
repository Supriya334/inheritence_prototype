function Name(name,brand){
    this.name=name;
    this.brand=brand;


}
Object.setPrototypeOf(Vehical.prototype,Name.prototype)

function Vehical(year,name,brand){
Name.call(this,name,brand)
this.year=year;


}
let menufacture=new Vehical(2019,"toyota","Swift")
console.log(menufacture) 



// let object={
//     name:"Yash",
    

// }
// object.age=19

// console.log(object)


