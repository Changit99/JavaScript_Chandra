

// function MyName() {
//     console.log("C");
//     console.log("k");
//     console.log("G");
// }

// MyName();

// function addTwoNumbers(num1,num2) {
//     console.log(num1+num2);
    
// }

// addTwoNumbers(6,4);

// function addTwoNumbers(num1,num2) {
//     // let Total=num1+num2;
//     // return Total;
//     return num1 +num2;
//     }

//    const result=addTwoNumbers(10,5);
//    console.log(`Result is : ${result}`); 

function user(userName="sam" /* sam is just a default value, if pass argument to userName parameter its overwritten */) {
    
    // if (userName===undefined) {      //equals to ===
        if (!userName) {                // no argument passed means its undefined, so userName is false.. Now !userName means its opposite of actual
    console.log("Please define userName");
        return
    }
    return(`${userName} is just logged in!!`);
}   

 console.log(user("Chandra"));
 console.log(user()); //it will give undefined if we not passing any argument