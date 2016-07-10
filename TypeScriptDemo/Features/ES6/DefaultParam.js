var TSDemo;
(function (TSDemo) {
    var CloudProvider = (function () {
        function CloudProvider() {
        }
        CloudProvider.prototype.requestService = function (service, platform) {
            if (platform === void 0) { platform = "Microsoft Azure"; }
            var header = {
                platform: platform,
                service: service
            };
            TSDemo.Printer.print(header.service + " is hosted on " + header.platform);
        };
        return CloudProvider;
    }());
    TSDemo.CloudProvider = CloudProvider;
})(TSDemo || (TSDemo = {}));
window.onload = function () {
    TSDemo.Printer.setTitle("Optional / Default Parameter Demo");
    var provider = new TSDemo.CloudProvider();
    //setHeader called without passing caller
    provider.requestService("Virtual Machine");
    //setHeader called by passing caller
    provider.requestService("Virtual Machine", "Amazon Web Services");
};
