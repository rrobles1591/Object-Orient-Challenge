class Vehicle {
    constructor(make, model, year){
        this.make=make;
        this.model=model;
        this.year=year;
    };

    honk(){
        console.log("Beep!")
    };

    toString(){
        console.log(`This vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
} 
// let myCar= new Vehicle("Toyota", "Corolla", 2006);


class Car extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
      }
    }

// let myCar= new Car("Toyota", "Corolla", 2006);

class Motorcycle extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
      }
      revEngine(){
        console.log("VROOOM");
      }
    }

    class Garage{
        constructor(capacity){
            this.vehicles=[];
            this.capacity=capacity;
        };
        add(newVehicle){
            if( this.vehicles.lenght>this.capacity){
                console.log("Sorry, we're full");
            }
            if (!(newVehicle instanceof Vehicle)) {
                return "Only vehicles are allowed in here!";
              }
            this.vehicles.push(newVehicle);
            return "Vehicles added!"
        }}
    