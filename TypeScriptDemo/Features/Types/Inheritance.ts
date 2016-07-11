namespace TSTypeDemo {
    import Printer = TSDemo.Printer;

    export class AdminController extends UserController {
        constructor() {
            var adminUser: User = { id: 5555, name: "The Admin User", isSubscribed: true, status: Status.Active }
            super(adminUser);
        }
        getUsersViewModal(): any[] {
            Printer.printNext("*Running in admin mode*");
            var users = super.getUsersViewModal();
            return users;
        }
    }

    //String literal type
    export type Card = "Standard" | "Gold" | "Platinum";

    export abstract class Membership {
        public static provider: string = "Bank ABCD";
        private currentBalance: number;
        protected type: string;

        abstract getSpecialOffers(): string;

        constructor() {
            this.type = "Standard";
            this.currentBalance = 0;
        }
        //getter
        get getMembership(): string {
            return this.type;
        }
        //setter
        set selectMembership(selected: string) {
            this.type = selected;
        }

        getBenefits(card: Card) {
            return `Benefits of ${card}`;
        }
    }
    export class GoldMembership extends Membership {
        constructor() {
            super();
            this.type = "Gold";
            //this.currentBalance = 100; //Error for attempting to read private member
        }
        getSpecialOffers(): string { //no having this implementation will throw error
            return "5% cash back";
        }

        //String literal type
        /**
         * Gets benefits of the card
         */
        getBenefits() {
            return super.getBenefits("Gold");
            //return super.getBenefits("Silver"); //Error
        }
    }
}
