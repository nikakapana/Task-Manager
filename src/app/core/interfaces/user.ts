import { Role } from "./role";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    userPermissions: any[];
    roles: Role[];
    projects: any[];
}

