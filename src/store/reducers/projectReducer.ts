import { ProjectState, ProjectActions } from "../types/projectTypes";
import { Reducer } from "redux";

const initState: ProjectState = {
    projects: [
        { id: 1, email: 'michael.lawson@reqres.in', first_name: 'Michael', last_name: 'Lawson' },
        { id: 2, email: 'lindsay.ferguson@reqres.in', first_name: 'Lindsay', last_name: 'Ferguson' },
        { id: 3, email: 'tobias.funke@reqres.in', first_name: 'Tobias', last_name: 'Funke' }
    ],
    loading: false,

};

export const projectReducer = (state = initState, action: ProjectActions) => {
    console.log('projectReducer called:', action);
    switch (action.type) {
        case 'FieldChanged':
            return {
                ...state,
                [action.name]: action.newValue
            }
        case 'CreateProject':
            return {
                //console.log('created project in reducer:', action.project);
                ...state
            }
        case 'CreateProjectError':
            return {
                ...state,
                error: action.err
            }
        case 'FetchProjectBegin':
            return {
                ...state,
                loading: true
            }
        case 'FetchProjectSuccess':
            return {
                ...state,
                projects: action.projects,
                loading: false
            }
        case 'FetchProjectError':
            return {
                ...state,
                loading: false,
                error: action.err
            }
        default:
            return state
    }

}