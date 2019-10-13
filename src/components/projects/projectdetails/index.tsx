import React from 'react';
import { ProjectTitle } from './projectdetails.styles';
import { Container } from '../../layout';

export const ProjectDetails = (props: any) => {
    const id = props.match.params.id;
    return (
        <Container>
            <div>Project Title</div>
            <p>Posted by me with {id}</p>
            <p>22 august</p>
        </Container>
    );
}