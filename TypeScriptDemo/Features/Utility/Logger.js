var TSDemo;
(function (TSDemo) {
    var Logger = (function () {
        function Logger() {
        }
        Logger.WriteInConole = function (text) {
            console.log("*** " + text + " ***");
        };
        Logger.WriteInDocument = function (text, includeTimestamp) {
            if (includeTimestamp === void 0) { includeTimestamp = false; }
            var ts = "", today = new Date();
            if (includeTimestamp)
                ts = "[" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds() + "]:";
            var formattedText = "<br />\n                    " + ts + "\n                    " + text;
            this.updateDocument(formattedText);
            this.WriteInConole(text);
        };
        Logger.setTitle = function (text) {
            this.updateDocument("<H2> " + text + " </H2>");
        };
        Logger.updateDocument = function (text) {
            var el = document.getElementById('content');
            el.innerHTML += text;
        };
        return Logger;
    }());
    TSDemo.Logger = Logger;
})(TSDemo || (TSDemo = {}));
