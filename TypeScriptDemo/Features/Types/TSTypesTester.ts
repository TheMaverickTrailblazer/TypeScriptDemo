window.onload = function () {
    TSDemo.Printer.printTitle("TypeScript Types Demo");

    let userController: TSTypeDemo.IUserController = new TSTypeDemo.UserController();

    let allUsers = userController.getUsers();
    allUsers.map(user => { TSDemo.Printer.print(user.name); });

    let user = userController.getUser(1333);
    TSDemo.Printer.printNext(user.name);

    //Union
    TSDemo.Printer.printSubTitle("Subscribed Users 1");
    let subscribedUsers = userController.seachSubscription(true);
    subscribedUsers.map(user => { TSDemo.Printer.print(user.name); });

    TSDemo.Printer.printSubTitle("Subscribed Users 2");
    subscribedUsers = userController.seachSubscription(1);
    subscribedUsers.map(user => { TSDemo.Printer.print(user.name); });

    TSDemo.Printer.printSubTitle("Users Status");
    let UsersVM = userController.getUsersViewModal();
    UsersVM.map(user => { TSDemo.Printer.print(`${user.name} - ${user.disabled}`); });

    TSDemo.Printer.printSubTitle("Users Status - Admin mode");
    let adminController = new TSTypeDemo.AdminController();
    UsersVM = adminController.getUsersViewModal();
    UsersVM.map(user => { TSDemo.Printer.print(`${user.name} - ${user.disabled}`); });

    //Type Alias
    type SystemUser = TSTypeDemo.User;
    let sysUser: SystemUser;

    let cardController = new TSTypeDemo.GoldMembership();
    let cardDetails = cardController.getBenefits();


    //Cast / Guard
    userController.update(user);
    TSDemo.Printer.printNext(userController.currentUser.name);




};
