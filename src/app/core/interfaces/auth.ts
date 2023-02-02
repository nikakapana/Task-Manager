import { User } from "./user";

export interface SignUp {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface SignIn {
    email: string;
    password: string;
}

export interface Token {
    expiresIn: number;
    accessToken: string;
    refreshToken: string;
}

export interface AuthResponse {
    user: User;
    token: Token;
}





