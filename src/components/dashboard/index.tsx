import React, { Component } from 'react';
import { Row, Column } from '../layout';

export class Dashboard extends Component {
    render() {
        return(
            <div style={{height: '500px'}}>
                <Row>
                    <Column>col 1</Column>
                    <Column>col 2</Column>
                </Row>
            </div>
        );
    }
}