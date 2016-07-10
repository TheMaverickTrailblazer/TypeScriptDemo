
module TSDemo {
    export class ForOfController {
        private cars: Car[] = [
            { name: "Honda CRV", year: 2012, hasBluetooth: true },
            { name: "Audi A4", year: 2006, hasBluetooth: true },
            { name: "Nissan Altima", year: 2009, hasBluetooth: false },
            { name: "Ford Focus", year: 2012, hasBluetooth: true }
        ]

        printCars(): void {
            //ES5
            for (let i in this.cars) {
                TSDemo.Printer.print(this.cars[i].name);
            }

            // ES6
            for (let car of this.cars) {
                TSDemo.Printer.print(car.name);
            }

        }
    }
}

window.onload = function () {
    TSDemo.Printer.setTitle("For..Of Loop Demo");

    let carsController = new TSDemo.ForOfController();
    carsController.printCars();
};
