var TSDemo;
(function (TSDemo) {
    var Printer = (function () {
        function Printer() {
        }
        Printer.WriteInConole = function (text) {
            console.log("*** " + text + " ***");
        };
        Printer.print = function (text, includeTimestamp) {
            if (includeTimestamp === void 0) { includeTimestamp = false; }
            var ts = "", today = new Date();
            if (includeTimestamp)
                ts = "[" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds() + "]:";
            var formattedText = "<br />\n                    " + ts + "\n                    " + text;
            this.updateDocument(formattedText);
            this.WriteInConole(text);
        };
        Printer.setTitle = function (text) {
            this.updateDocument("<H2> " + text + " </H2>");
        };
        Printer.updateDocument = function (text) {
            var el = document.getElementById('content');
            el.innerHTML += text;
        };
        Printer.printNext = function (text, includeTimestamp) {
            if (includeTimestamp === void 0) { includeTimestamp = false; }
            text = "--------------<br>" + text;
            this.print(text, includeTimestamp);
        };
        return Printer;
    }());
    TSDemo.Printer = Printer;
})(TSDemo || (TSDemo = {}));
