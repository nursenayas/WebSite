interface Point {
  x: number;
  y: number;
}
interface Passenger {
    name: string;
    phone: number;
  }

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): number;
  getDistance(pointA: Point, pointB: Point): number;
  addPassenger(passenger:Passenger):void;
  removePassenger(passenger:Passenger):void;

}


