module TSDemo {
    export interface Account {
        name: string;
        number: number;
        isJoint?: boolean;
        status?: string;
        type?: string;
        owner: string;
    }
    export class AccountController {
        private account: Account = {
            name: "John Smith",
            number: 101010101010,
            isJoint: false,
            status: "Active",
            type: "Investment",
            owner: "John"
        }

        printAccountSummary(): void {
            let {name, number} = this.account;
            TSDemo.Printer.print(`Report of ${name}, ${number}`);

            let {status: accountStatus, type, owner} = this.account;
            TSDemo.Printer.print(`Status of Account is ${accountStatus}`);
        }
    }
}

window.onload = function () {
    TSDemo.Printer.setTitle("Destructuring Demo");

    let accountController = new TSDemo.AccountController();
    accountController.printAccountSummary();
};
