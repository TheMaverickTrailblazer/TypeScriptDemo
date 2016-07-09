function varTest() {
    var name = "name is defined outside";
    if (true) {
        var name = "name is defined inside";
    }
    return function () {
        TSDemo.Logger.WriteInDocument("varTest : " + name);
    }
}

//function letTest() {
//    var name = "name is defined outside";
//    if (true) {
//        let name1 = "name is defined inside";
//    }
//    return function () {
//        TSDemo.Logger.WriteInDocument("letTest : " + name);
//    }
//}

window.onload = function () {
    TSDemo.Logger.setTitle("Let Demo");
    var runVarTest = varTest();
    runVarTest();

    //var runLetTest = letTest();
    //runLetTest();
};
