import { Project } from '../../models/project';
//import { connect } from '../../config/mongo';

const dbName = 'planboard';

export interface IProjectRepository {
    createProject(project: Project): Promise<Project | null>;
}

export class ProjectRepository implements IProjectRepository {

    async createProject(project: Project): Promise<Project | null> {
        //const db = await connect();
        var projectDoc: any;

        projectDoc = {
            projectId: project.projectId,
            title: project.title,
            description: project.description,
            authorId: project.authorId,
            createDate: project.createDate
        }

        //await db.collection('projects').insertOne(projectDoc);
        var project = new Project(project.projectId, project.title, project.description, project.authorId, project.createDate);
        return project;
    }

}