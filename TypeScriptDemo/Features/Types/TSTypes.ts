module TSDemo {
    export interface User {
        name: string;
        id: number;
        isSubscribed?: boolean;
        entitlements?: string[];
    }
    export interface IUserController {
        getUsers(): User[];
        getUser(id): User;
    }
    export class UserController implements IUserController {
        public currentUser: User;
        private users: User[] = [
            { name: "Karthik Jambulingam", id: 1234, isSubscribed: true },
            { name: "Rahul Dravid", id: 1333, isSubscribed: true },
            { name: "Roger Federer", id: 1444, isSubscribed: false }
        ];

        getUsers(): User[] {
            return this.users;
        }
        getUser(id: number): User {
            this.currentUser = this.users.filter(user => user.id === id)[0];
            return this.currentUser;
        }
        update(user: User): void {
            this.currentUser = <User>{
                id: user.id, name: "KL Rahul", isSubscribed: false
            };
        }
    }
}
window.onload = function () {
    TSDemo.Printer.setTitle("TypeScript Types Demo");

    let userController = new TSDemo.UserController();
    let allUsers = userController.getUsers();

    allUsers.map(user => {
        TSDemo.Printer.print(user.name);
    });

    let user = userController.getUser(1333);
    TSDemo.Printer.printNext(user.name);

    userController.update(user);
    TSDemo.Printer.printNext(userController.currentUser.name);

};
