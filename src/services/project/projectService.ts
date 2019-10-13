import { Project } from "../../models";

// Project Services using the Fetch API

const sendHttpRequest = <T>(method: string, url: string, data?: JSON): Promise<T> => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json' } : {}
    }).then(response => {
        if (response.status >= 400) {
            return response.json().then(errResData => {
                const error = new Error('wrong!');
                error.message = errResData;
                throw error;
            })
        }
        return response.json() as Promise<T>;
        //polyfill
    }).then(json => {
        console.log('projectService called:', json)
        return json;
    })

    // const response = await fetch(url, {
    //     method: method,
    //     body: JSON.stringify(data),
    //     headers: data ? { 'Content-Type': 'application/json' } : {}
    // });
    // if(response.status >= 400){
    //     const errResData = await response.json();
    //     const error = new Error('wrong!');
    //             error.message = errResData;
    //             throw error;
    // }
    // return response.json();
};

export async function postProject(data: any) {
    const responseData = await sendHttpRequest('POST', 'https://reqres.in/api/register', data);
    console.log(responseData);
}

interface GetProjectsResponse {
    readonly data: Array<Project>;
    readonly total: number;
}

export async function getProject() {
    const responseData = await sendHttpRequest<GetProjectsResponse>('GET', 'https://reqres.in/api/users');
    console.log('getProject called:', responseData);
    return responseData;
};
    // async createProject(projectId: string, title: string, description: string, authorId: string): Promise<Project | null> {
    //     var project = new Project(projectId, title, description, authorId, new Date());
    //     this.repository.createProject(project).then(() => {
    //         return project;
    //     });
    //     return null;
    // }




