module TSDemo {
    export class CloudProvider {
        requestService(service: string, platform: string = "Microsoft Azure") {
            let header = {
                platform: platform,
                service: service
            }
            TSDemo.Printer.print(`${header.service} is hosted on ${header.platform}`);
        }
    }
}

window.onload = function () {
    TSDemo.Printer.setTitle("Optional / Default Parameter Demo");

    let provider = new TSDemo.CloudProvider();
    //setHeader called without passing caller
    provider.requestService("Virtual Machine");
    //setHeader called by passing caller
    provider.requestService("Virtual Machine", "Amazon Web Services");
};
