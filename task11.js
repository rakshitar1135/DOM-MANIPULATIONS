let myobj={
    name:"rakshita",
    age:23
}
//to get the obj in a string format
let myobj_serialised=JSON.stringify(myobj);
//console.log(myobj_serialised)
localStorage.setItem("myobj",myobj_serialised)
//to get the object in the object format
let myobj_deserialised=JSON.parse(localStorage.getItem("myobj"))
console.log(myobj_deserialised);
