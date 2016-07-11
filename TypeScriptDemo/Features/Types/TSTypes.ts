namespace TSTypeDemo {
    export interface User {
        name: string;
        id: number;
        isSubscribed?: boolean;
        entitlements?: string[];
        status: Status;
    }
    export interface IUserController {
        currentUser: User;
        getUsers(): User[];
        getUser(id): User;
        update(user: User): void;
        seachSubscription(flag: number | boolean): User[];
        getUsersViewModal(): any[];
    }
    export enum Status {
        Active = 1,
        PendingApproval = 2,
        Suspended = 3,
        Deleted = 4
    }
    export class UserController implements IUserController {
        public currentUser: User;
        private users: User[];

        constructor(adminUser?: User) {
            this.users = [
                { name: "Karthik Jambulingam", id: 1234, isSubscribed: true, status: Status.Active },
                { name: "Rahul Dravid", id: 1333, isSubscribed: true, status: Status.Deleted },
                { name: "Roger Federer", id: 1444, isSubscribed: false, status: Status.PendingApproval }];
            if (adminUser) {
                this.users.push(adminUser);
            }
        }

        getUsers(): User[] {
            return this.users;
        }
        getUser(id: number): User {
            this.currentUser = this.users.filter(user => user.id === id)[0];
            return this.currentUser;
        }
        update(user: User): void {
            this.currentUser = <User>{
                id: user.id, name: "KL Rahul", isSubscribed: false, status: Status.Active
            };
        }
        seachSubscription(flag: number | boolean): User[] {
            return this.users.filter(user => user.isSubscribed == flag);
        }

        getUsersViewModal(): any[] {
            let disabledUsers = this.users.map(user => {
                return {
                    name: user.name,
                    disabled: (user.status === Status.Active || user.status === Status.PendingApproval) ? true : false
                }
            });
            return disabledUsers;
        }
    }
}
