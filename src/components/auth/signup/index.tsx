import React, { Component } from 'react';
import { Row, Container, TextField, PasswordField } from '../../layout';

interface SignInState {
    email: string;
    password: any;
    firstName: string;
    lastName: string;
}

export class SignUp extends Component<{}, SignInState> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        };
    }

    handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        } as any);
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        const { email, password, firstName, lastName } = this.state;
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <TextField name="email" type="email" title="Email" value={email} handleChange={this.handleChange} />
                    </Row>
                    <Row>
                        <PasswordField name="password" title="Password" value={password} handleChange={this.handleChange} />
                    </Row>
                    <Row>
                        <TextField name="firstName" type="text" title="First Name" value={firstName} handleChange={this.handleChange} />
                    </Row>
                    <Row>
                        <TextField name="lastName" type="text" title="Last Name" value={lastName} handleChange={this.handleChange} />
                    </Row>               
                    <Row><button>Sign Up</button></Row>
                </form>
            </Container>
        );
    }
}