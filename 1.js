// Create a car object
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,

  displayProperties: function() {
    console.log('Make: ' + this.make);
    console.log('Model: ' + this.model);
    console.log('Year: ' + this.year);
  }
};

// Call the displayProperties function of the car object
car.displayProperties();