import React, { Component } from 'react';
import { Container, Row, Column } from '../layout';
import { ProjectList } from '../projects';
import { connect} from 'react-redux';
import { fetchProject } from '../../store/actions';
import { ProjectState } from '../../store/types/projectTypes';
import { AppState } from '../../store/reducers';

interface ProjectStateProps {
    readonly projects: any;
}

interface FetchProjectDispatchProps {
    readonly fetchProject: any;
}

type ProjectProps = FetchProjectDispatchProps & ProjectStateProps;

class Project extends Component<ProjectProps> {
constructor(props: ProjectProps) {
    super(props);
}

    componentDidMount() {
        this.props.fetchProject();
      }

    render() {
        console.log('dashboard props:', this.props);
        const { projects } = this.props;
        return (
            <Container>
                <Row>
                    <Column grow={2}>
                        <ProjectList projects={projects} />
                    </Column>
                    <Column>notif</Column>
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = (dispatch: any): FetchProjectDispatchProps => {
    return {
        fetchProject: () => dispatch(fetchProject())
    }
};

const mapStateToProps = (state: AppState): ProjectStateProps  => {
    console.log('dashboard state is:', state);
    return {
        projects: state.project.projects
    }
};

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(Project);