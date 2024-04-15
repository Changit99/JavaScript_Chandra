//Using Objectliterls

const jsUser={
    name:"Chandra",
    Email:"chandrakantaghosh81@gmail.com",
    profile:"Test Analyst",
    location:["Kolkata","Bhubaneswar"]

}

console.log(jsUser.name);
console.log(jsUser["location"]);
console.log(jsUser["profile"]);

jsUser.greetings=function() {
    console.log(`Welcome ${this.name} your Email is ${this.Email}`);  
}
console.log(jsUser.greetings());
