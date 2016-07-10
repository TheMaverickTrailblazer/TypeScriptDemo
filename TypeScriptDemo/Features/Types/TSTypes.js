var TSDemo;
(function (TSDemo) {
    var UserController = (function () {
        function UserController() {
            this.users = [
                { name: "Karthik Jambulingam", id: 1234, isSubscribed: true },
                { name: "Rahul Dravid", id: 1333, isSubscribed: true },
                { name: "Roger Federer", id: 1444, isSubscribed: false }
            ];
        }
        UserController.prototype.getUsers = function () {
            return this.users;
        };
        UserController.prototype.getUser = function (id) {
            this.currentUser = this.users.filter(function (user) { return user.id === id; })[0];
            return this.currentUser;
        };
        UserController.prototype.update = function (user) {
            this.currentUser = {
                id: user.id, name: "KL Rahul", isSubscribed: false
            };
        };
        return UserController;
    }());
    TSDemo.UserController = UserController;
})(TSDemo || (TSDemo = {}));
window.onload = function () {
    TSDemo.Printer.setTitle("TypeScript Types Demo");
    var userController = new TSDemo.UserController();
    var allUsers = userController.getUsers();
    allUsers.map(function (user) {
        TSDemo.Printer.print(user.name);
    });
    var user = userController.getUser(1333);
    TSDemo.Printer.printNext(user.name);
    userController.update(user);
    TSDemo.Printer.printNext(userController.currentUser.name);
};
