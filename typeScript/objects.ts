interface Point {
    x: number;
    y: number;
  }
  
  interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
  }
  class Taxi implements Vehicle{
      //..
      currentLocation: Point;
      travelTo(point: Point): void{
          console.log(`taksi X: ${point.x} Y : ${point.y} konumuna gidiyor.`);
  
      }
  
  }
  
  class Bus implements Vehicle{
      //..
      currentLocation: Point;
      travelTo(point: Point): void{
          console.log(`otobüs X: ${point.x} Y : ${point.y} konumuna gidiyor.`);
  
  
      }
  }
  
let taxi_1 : Taxi= new Taxi;

taxi_1.travelTo({x: 1,y:2});
taxi_1.currentLocation={x: 5, y:2};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);


let taxi_2 : Taxi= new Taxi;

taxi_2.travelTo({x: 3,y:7});
taxi_2.currentLocation={x: 10, y:20};
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);

let bus_1 = new Bus;

bus_1.travelTo({x: 30,y:70});
bus_1.currentLocation={x: 20, y:50};
console.log(bus_1.currentLocation.x);
console.log(bus_1.currentLocation.y);