function BasicTypesTest() {
    return function () {
        var amount = 1500;
        var description = "";
        var isClosed = true;
        var types = ["Credit", "Checking"];
        var customer = { description: description, status: isClosed };
        console.log(1 + 3); //4
        console.log(1 + 3 + ": Total"); //4: Total
        console.log("Total " + 1 + 3); //Total 13
        customer.location = "Mumbai"; //dynamically adding property
        console.log(customer.location);
    }
}
window.onload = function () {
    TSDemo.Printer.setTitle("Type system - Basic types demo");

    var basicTypesTester = BasicTypesTest();
    basicTypesTester();
};
