import React, { Component } from 'react';
import { Row, Container, TextField, PasswordField } from '../../layout';

interface SignInState {
    email: string;
    password: any;
}

export class SignIn extends Component<{}, SignInState> {
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        const { email, password } = this.state;
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Row>
                        <TextField name="email" type="email" title="Email" value={email} onChange={this.handleChange} />
                    </Row>
                    <Row>
                        <PasswordField name="password" title="Password" value={password} handleChange={this.handleChange} />
                    </Row>                    
                    <Row><button>Login</button></Row>
                </form>                
            </Container>
        );
    }
}