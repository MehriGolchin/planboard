import React, { Component } from 'react';
import { Nav } from './navbar.styles';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export interface NavbarProps {
    readonly authenticated: boolean;
    readonly collapsed: boolean;
}

export class Navbar extends Component<NavbarProps> {
    constructor(props: any) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Nav collapsed={this.props.collapsed} authenticated={this.props.authenticated}>
                    {
                        this.props.authenticated ? 
                        (
                            <ul>
                                <li><Link to="/">Home</Link> </li>
                                <li><Link to="/new-project">New Project</Link></li>
                                <li><Link to="/signout">Sign Out</Link></li>
                            </ul>
                        ) :
                        (
                            <ul>
                                <li><Link to="/">Home</Link> </li>
                                <li><Link to="/about">Sign Up</Link></li>
                                <li><Link to="/contact">Sign In</Link></li>
                            </ul>
                        )
                    }
                </Nav>
            </BrowserRouter>
        );
    }
}

