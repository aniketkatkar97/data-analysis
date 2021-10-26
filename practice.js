let obj2 = {
  name: "Mangesh",
  age: 25,
  printDetails: function (city) {
    console.log(`name is ${this.name} and age is ${this.age} in ${city}`);
  },
};

let obj1 = {
  name: "Aniket",
  age: 24,
};

let printDetailsobj1 = obj2.printDetails.bind(obj1, "Ratnagiri");
printDetailsobj1();
