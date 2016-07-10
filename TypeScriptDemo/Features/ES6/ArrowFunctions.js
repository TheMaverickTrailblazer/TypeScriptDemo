var TSDemo;
(function (TSDemo) {
    var CarController = (function () {
        function CarController() {
            this.cars = [
                { name: "Honda CRV", year: 2012, hasBluetooth: true },
                { name: "Audi A4", year: 2006, hasBluetooth: true },
                { name: "Nissan Altima", year: 2009, hasBluetooth: false },
                { name: "Ford Focus", year: 2012, hasBluetooth: true }
            ];
        }
        CarController.prototype.getCarsWithBluetooth = function () {
            var bluetoothCars = this.cars.filter(function (car) { return car.hasBluetooth; });
            bluetoothCars.map(function (car) {
                var carName = car.name + " " + car.year;
                TSDemo.Printer.print(carName, true);
            });
        };
        return CarController;
    }());
    TSDemo.CarController = CarController;
})(TSDemo || (TSDemo = {}));
window.onload = function () {
    TSDemo.Printer.setTitle("Arrow Functions Demo");
    var carController = new TSDemo.CarController();
    carController.getCarsWithBluetooth();
    //carController.printCars();
};
