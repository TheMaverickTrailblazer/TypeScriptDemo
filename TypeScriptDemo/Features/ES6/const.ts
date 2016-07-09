function constTest() {
    const APP_NAME = "TypeScriptDemo";
    var userId = "NA";

    function setHeader(App: string, user: string) {
        //APP_NAME = App;
        userId = user;

        var header = {
            app: APP_NAME,
            user: userId
        }
    }
}