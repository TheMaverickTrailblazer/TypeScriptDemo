module TSDemo {

    export class SpreadOperator {
        private SUVs: string[] = ["CRV", "RAV4", "X5", "Q5"];
        private Sedans: string[] = ["Accord", "Camry", "Fusion", "A6"];

        printCars(): void {
            let allCars: any[] = [this.SUVs, ...this.Sedans];
            TSDemo.Printer.print(allCars.join());            
        }

        printNumbers(a: number, ...otherNumbres: number[])
        {
            let allNumbers = [a, ...otherNumbres];
            TSDemo.Printer.print(allNumbers.join());   
        }
    }
}

window.onload = function () {
    TSDemo.Printer.setTitle("Rest Parameter / Spread Operator Demo");

    let spreadOpTester = new TSDemo.SpreadOperator();
    spreadOpTester.printCars();
    spreadOpTester.printNumbers(1, 2, 3, 4, 5, 6);
};
