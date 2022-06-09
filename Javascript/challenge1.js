/*
build a:
- black page
-create a form with:
 white boxes with red border
- name, age, gender, region
- submit button



Object of 3x people with
- name, age, gender, region

function to apply to vote
- check if possible

*/
function vote(age, region){
    if (age < 18 || region === "local"){
    console.log("Too young to vote!");
    }
    else if (region !== "local"){
      console.log("You are not resident!");
    }
else{
  console.log("You can vote!");
}
}


let person1 = {
    name: "John",
    age: 41,
    gender: "male",
    region: "local",
    vote: function vote(age, region){       
    }
}

let person2 = {
    name: "Paul",
    age: 16,
    gender: "male",
    region: "local",
    vote: function vote(age, region){       
    } 
}

let person3 = {
    name: "Peter",
    age: 30,
    gender: "male",
    region: "foreign",
    vote: function vote(age, region){       
    } 
}


person1.vote()
person2.vote()
person3.vote()