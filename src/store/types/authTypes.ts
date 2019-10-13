import { Action } from "redux";

export const CREATE_USER = 'CreateUser';
export const FIELD_CHANGED = 'FieldChanged';

interface CreateUser extends Action {
    readonly type: typeof CREATE_USER;
}

interface FieldChanged extends Action {
    readonly type: typeof FIELD_CHANGED,
    readonly name: string;
    readonly newValue: string;
}

export type AuthActions = CreateUser | FieldChanged;

interface User {
    readonly id: number;
    readonly email: string;
    readonly password: string;
}

export interface UserState {
    readonly project?: User;
}