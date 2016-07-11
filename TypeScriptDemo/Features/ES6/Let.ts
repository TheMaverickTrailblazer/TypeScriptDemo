function varTest() {
    var name = "name is defined outside";
    if (true) {
        var name = "name is defined inside";
    }
    return function () {
        TSDemo.Printer.print("varTest : " + name);
    }
}

function letTest() {
    var name = "name is defined outside";
    if (true) {
        let name = "name is defined inside";
    }
    return function () {
        TSDemo.Printer.print("letTest : " + name);
    }
}

window.onload = function () {
    TSDemo.Printer.printTitle("Let Demo");
    var runVarTest = varTest();
    runVarTest();

    var runLetTest = letTest();
    runLetTest();
};
