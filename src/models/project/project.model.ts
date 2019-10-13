export class Project {
    
    private _projectId: string;
    private _title: string;
    private _description: string;
    private _authorId: string;
    private _createDate: Date;

    constructor(projectId: string, title: string, description: string, authorId: string, createDate: Date) {
        this._projectId = projectId;
        this._title = title;
        this._description = description;
        this._authorId = authorId;
        this._createDate = createDate;
    }

    get projectId() {
        return this._projectId;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get authorId() {
        return this._authorId;
    }

    get createDate() {
        return this._createDate;
    }
}