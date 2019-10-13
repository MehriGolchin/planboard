import React, { Component } from 'react';
import { Row, Container, TextField, TextArea } from '../../layout';
import { connect } from 'react-redux';
import { createProject, fieldChanged } from '../../../store/actions';
import { ProjectState } from '../../../store/types/projectTypes';

interface CreateProjectState {
    title: string;
    description: any;
}

interface CreateProjectStateProps {
    readonly title: string;
    readonly description: string;
}

interface CreateProjectDispatchProps {
    readonly createProject: any;
    readonly fieldChange: (name: string, newValue: string) => void;
}

type CreateProjectProps = CreateProjectDispatchProps & CreateProjectStateProps;

class CreateProject extends Component<CreateProjectProps, CreateProjectState> {
    constructor(props: CreateProjectProps) {
        super(props);

        // this.state = {
        //     title: '',
        //     description: ''
        // };
    }

    private handleChange = (event: any) => {
        this.props.fieldChange(event.target.name, event.target.value);
        console.log(event.target.name, event.target.value);
    }

    private handleSubmit = (event: any) => {
        event.preventDefault();
        this.props.createProject(this.props);        
    }

    render() {
        const { title, description } = this.props;
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <TextField name="title" type="text" title="Title" value={title || ''} onChange={(this.handleChange)}></TextField>
                    </Row>                    
                    <Row>
                        <TextArea name="description" title="Description" value={description || ''} onChange={this.handleChange}></TextArea>
                    </Row>                    
                    <Row><button>Create</button></Row>
                </form>
            </Container>
        );
    }
}

// functions that automatically dispatch actions with the correct payload
const mapDispatchToProps = (dispatch: any): CreateProjectDispatchProps => {
    return {
        createProject: (project: any) => dispatch(createProject(project)),
        fieldChange: (name: string, newValue: string) => dispatch(fieldChanged(name, newValue))
    }
};

const mapStateToProps = (state: ProjectState): CreateProjectStateProps => ({
    title: state.project ? state.project.first_name: '',//.title : '',
    description: state.project ? state.project.last_name : ''//.description : ''
});
         
export const CreateProjectContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProject);