export interface User {
    name: string;
    email: string;
    role: 'user' | 'editor' | 'admin';
    isActive: boolean;
}