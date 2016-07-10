var TSDemo;
(function (TSDemo) {
    var ForOfController = (function () {
        function ForOfController() {
            this.cars = [
                { name: "Honda CRV", year: 2012, hasBluetooth: true },
                { name: "Audi A4", year: 2006, hasBluetooth: true },
                { name: "Nissan Altima", year: 2009, hasBluetooth: false },
                { name: "Ford Focus", year: 2012, hasBluetooth: true }
            ];
        }
        ForOfController.prototype.printCars = function () {
            //ES5
            for (var i in this.cars) {
                TSDemo.Printer.print(this.cars[i].name);
            }
            // ES6
            for (var _i = 0, _a = this.cars; _i < _a.length; _i++) {
                var car = _a[_i];
                TSDemo.Printer.print(car.name);
            }
        };
        return ForOfController;
    }());
    TSDemo.ForOfController = ForOfController;
})(TSDemo || (TSDemo = {}));
window.onload = function () {
    TSDemo.Printer.setTitle("For..Of Loop Demo");
    var carsController = new TSDemo.ForOfController();
    carsController.printCars();
};
