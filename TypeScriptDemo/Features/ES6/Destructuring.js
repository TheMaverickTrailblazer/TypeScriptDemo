var TSDemo;
(function (TSDemo) {
    var AccountController = (function () {
        function AccountController() {
            this.account = {
                name: "John Smith",
                number: 101010101010,
                isJoint: false,
                status: "Active",
                type: "Investment",
                owner: "John"
            };
        }
        AccountController.prototype.printAccountSummary = function () {
            var _a = this.account, name = _a.name, number = _a.number;
            TSDemo.Printer.print("Report of " + name + ", " + number);
            var _b = this.account, accountStatus = _b.status, type = _b.type, owner = _b.owner;
            TSDemo.Printer.print("Status of Account is " + accountStatus);
        };
        return AccountController;
    }());
    TSDemo.AccountController = AccountController;
})(TSDemo || (TSDemo = {}));
window.onload = function () {
    TSDemo.Printer.setTitle("Destructuring Demo");
    var accountController = new TSDemo.AccountController();
    accountController.printAccountSummary();
};
