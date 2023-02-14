import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";


@Injectable ({
    providedIn: 'root'
})

export class UserService {
    users: {[identityNmber:string]: User} ={}

    getUser (identityNumber: string){
        return this.users[identityNumber];
    }

    updateUser (user: User) {
        this.users[user.identityNumber] = user;
    }

    deleteUser (identityNmber: string) {
        delete this.users [identityNmber];
    }
}