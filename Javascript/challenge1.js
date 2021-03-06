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
function vote(age, region) {
  if (age < 18) {
    console.log("Too young to vote!");
  } else if (region === "local") {
    console.log("You can vote!");
  } else {
    console.log("You cannot vote!");
  }
}

const person1 = {
  name: "John",
  age: 41,
  gender: "male",
  region: "local",
  vote() {
    vote(person1.age, person1.region);
  },
};

const person2 = {
  name: "Paul",
  age: 16,
  gender: "male",
  region: "local",
  vote() {
    vote(person2.age, person2.region);
  },
};

const person5 = {
  name: "Paul",
  age: 16,
  gender: "male",
  region: "local",
  vote() {
    vote(person5.age, person5.region);
  },
};

const person4 = {
  name: "Peter",
  age: 30,
  gender: "male",
  region: "foreign",
  vote() {
    vote(person4.age, person4.region);
  },
};

const person3 = {
  name: "Peter",
  age: 30,
  gender: "male",
  region: "foreign",
  vote() {
    vote(person3.age, person3.region);
  },
};

person1.vote();
person2.vote();
person3.vote();
person4.vote();
person5.vote();

