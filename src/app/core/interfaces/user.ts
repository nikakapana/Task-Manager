export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    userPermissions: any[];
    roles: any[];
    projects: any[];


    identityNumber: string;
    mobileNumber: string;
    isActive: boolean
}