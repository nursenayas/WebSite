interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}
class Taxi implements Vehicle {
    color: string;
  constructor(location?: Point, color?: string) {
    this.currentLocation = location;
    this.color = color;
  }

  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`taksi X: ${point.x} Y : ${point.y} konumuna gidiyor.`);
  }
}

let taxi_1: Taxi = new Taxi({ x: 5, y: 8 });

taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);



let taxi_2: Taxi = new Taxi({ x: 5, y: 8 },'red');

console.log(taxi_2.currentLocation);



let taxi_3: Taxi = new Taxi();

console.log(taxi_3.currentLocation);