var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " Y : ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs X: ".concat(point.x, " Y : ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
var taxi_1 = new Taxi;
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 5, y: 2 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var taxi_2 = new Taxi;
taxi_2.travelTo({ x: 3, y: 7 });
taxi_2.currentLocation = { x: 10, y: 20 };
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.y);
var bus_1 = new Bus;
bus_1.travelTo({ x: 30, y: 70 });
bus_1.currentLocation = { x: 20, y: 50 };
console.log(bus_1.currentLocation.x);
console.log(bus_1.currentLocation.y);
