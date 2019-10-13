import { projectReducer } from './projectReducer';
import { combineReducers, Reducer } from 'redux';
import { ProjectState, ProjectActions } from '../types/projectTypes';

export interface AppState {
    readonly project: ProjectState;
}

export const rootReducer = combineReducers<AppState>({
    project: projectReducer
});