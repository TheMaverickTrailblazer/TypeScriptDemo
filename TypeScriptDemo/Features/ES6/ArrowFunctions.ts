namespace TSDemo {
    export interface Car {
        name: string;
        year: number;
        hasBluetooth: boolean;
    }
    export class CarController {
        private cars: Car[] = [
            { name: "Honda CRV", year: 2012, hasBluetooth: true },
            { name: "Audi A4", year: 2006, hasBluetooth: true },
            { name: "Nissan Altima", year: 2009, hasBluetooth: false },
            { name: "Ford Focus", year: 2012, hasBluetooth: true }
        ]

        getCarsWithBluetooth(): void {
            let bluetoothCars = this.cars.filter(car => car.hasBluetooth);
            bluetoothCars.map(car => {
                let carName = `${car.name} ${car.year}`;
                TSDemo.Printer.print(carName, true);
            });
        }

        //printCars() {
        //    setTimeout(() => {
        //        TSDemo.Printer.print("--Car List 1--");
        //        this.cars.map(car => {
        //            let carName = `${car.name} ${car.year}`;
        //            TSDemo.Printer.print(carName);
        //        });
        //    }, 2000);

        //    setTimeout(function () {
        //        TSDemo.Printer.print("--Car List 2--");
        //        this.cars.map(car => {
        //            let carName = `${car.name} ${car.year}`;
        //            TSDemo.Printer.print(carName);
        //        });
        //    }, 2000);
        //}
    }
}

window.onload = function () {
    TSDemo.Printer.printTitle("Arrow Functions Demo");

    let carController = new TSDemo.CarController();
    carController.getCarsWithBluetooth();
    //carController.printCars();
};
