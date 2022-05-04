const car = {
make: "Maserati",
model: "Granturismo",
engineSize: 4.7,
hybrid: false,
year: 2013,
colour: ["black", "grey", "chrome",],
drive: function drive(){
    console.log("car is moving!");
},
stop(){
    console.log("car is stopping!");
},

}


console.log(car.make);

console.log(car.colour[0]);
car.drive()
car.stop()
