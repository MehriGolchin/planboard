// Action Creators

import { ProjectActions, FETCH_PROJECT_SUCCESS, FETCH_PROJECT_BEGIN, FETCH_PROJECT_ERROR } from "../types/projectTypes";
import { getProject, postProject } from '../../services';

export const createProject = (project: any) => {
    return (dispatch: any, getState: any) => {
        //async calls 
        // here the fetch API service should be called to send project params to save in mongodb on server
        // reqres.in for testing

        postProject({ email: 'eve.holt@reqres.in', password: 'pistol' })
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT', project })
            })
            .catch((err) => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err });
            })

        //console.log('action creator called:', project);
    }
};

export const fetchProject = () => {
    return (dispatch: any, getState: any) => {
        dispatch({ type: FETCH_PROJECT_BEGIN })
        getProject()
            .then(respnse => {
                dispatch({ type: FETCH_PROJECT_SUCCESS, projects: respnse.data })
            })
            .catch((err) => {
                dispatch({ type: FETCH_PROJECT_ERROR, err })
            })
    }
};

export const fieldChanged = (name: string, newValue: string): ProjectActions => ({
    type: "FieldChanged",
    name,
    newValue
});