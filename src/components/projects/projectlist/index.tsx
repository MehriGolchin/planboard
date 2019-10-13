import React from 'react';
import { Row } from '../../layout';
import { List, Header, Desc, Container } from './projectlist.styles';
import { Link } from 'react-router-dom';

export const ProjectList = (props: any) => {
    console.log('ProjectList props:', props);
    const projects = props.projects;
    const projectItems = projects.map((project: any) =>
        <Container key={project.id}>
            <Row>
                <Header>{project.email}</Header>
            </Row>
            <Row>
                <Desc>{project.first_name}, {project.last_name}</Desc>
                <Link to={`/project/${project.id}`}>learn more...</Link>
            </Row>
        </Container>
    );
    return (
        <List>
            {projectItems}
        </List>
    );
}