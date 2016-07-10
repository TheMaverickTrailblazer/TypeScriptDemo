var TSDemo;
(function (TSDemo) {
    var SpreadOperator = (function () {
        function SpreadOperator() {
            this.SUVs = ["CRV", "RAV4", "X5", "Q5"];
            this.Sedans = ["Accord", "Camry", "Fusion", "A6"];
        }
        SpreadOperator.prototype.printCars = function () {
            var allCars = [this.SUVs].concat(this.Sedans);
            TSDemo.Printer.print(allCars.join());
        };
        SpreadOperator.prototype.printNumbers = function (a) {
            var otherNumbres = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                otherNumbres[_i - 1] = arguments[_i];
            }
            var allNumbers = [a].concat(otherNumbres);
            TSDemo.Printer.print(allNumbers.join());
        };
        return SpreadOperator;
    }());
    TSDemo.SpreadOperator = SpreadOperator;
})(TSDemo || (TSDemo = {}));
window.onload = function () {
    TSDemo.Printer.setTitle("Rest Parameter / Spread Operator Demo");
    var spreadOpTester = new TSDemo.SpreadOperator();
    spreadOpTester.printCars();
    spreadOpTester.printNumbers(1, 2, 3, 4, 5, 6);
};
