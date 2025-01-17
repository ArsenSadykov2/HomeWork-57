export interface User {
    name: string;
    email: string;
    role: 'user' | 'editor' | 'admin';
    isClicked: boolean;
}

export interface UserFormProps {
    addUser: (user: User) => void;
}

export interface UserItemProps {
    user: User;
}