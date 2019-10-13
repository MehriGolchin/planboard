import { Action } from "redux";

export const CREATE_PROJECT = 'CreateProject';
export const FIELD_CHANGED = 'FieldChanged';
export const CREATE_PROJECT_ERROR = 'CreateProjectError';
export const FETCH_PROJECT_BEGIN = 'FetchProjectBegin';
export const FETCH_PROJECT_SUCCESS = 'FetchProjectSuccess';
export const FETCH_PROJECT_ERROR = 'FetchProjectError'

interface CreateProject extends Action {
    readonly type: typeof CREATE_PROJECT;
    readonly project: Project;
}

interface FieldChanged extends Action {
    readonly type: typeof FIELD_CHANGED,
    readonly name: string;
    readonly newValue: string;
}

interface CreateProjectError extends Action {
    readonly type: typeof CREATE_PROJECT_ERROR;
    readonly err : Error;
}

interface FetchProjectBegin extends Action {
    readonly type: typeof FETCH_PROJECT_BEGIN;
}

interface FetchProjectSuccess extends Action {
    readonly type: typeof FETCH_PROJECT_SUCCESS;
    readonly projects: Array<Project>;
}

interface FetchProjectError extends Action {
    readonly type: typeof FETCH_PROJECT_ERROR;
    readonly err: Error;
}


export type ProjectActions = CreateProject | FieldChanged | 
                             CreateProjectError | FetchProjectBegin |
                             FetchProjectSuccess | FetchProjectError;

interface Project {
    readonly id: number;
    //readonly title: string;
    //readonly description: string;
    readonly email: string;
    readonly first_name: string;
    readonly last_name: string;
}

export interface ProjectState {
    readonly project?: Project;
    readonly projects: Project[];
    readonly loading: boolean;
    readonly error?: Error;
}