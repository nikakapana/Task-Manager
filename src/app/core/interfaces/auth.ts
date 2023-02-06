import { User } from "./user";
import {Token} from "./token";

export interface SignUp {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}


export interface AuthResponse {
    user: User;
    token: Token;
}





