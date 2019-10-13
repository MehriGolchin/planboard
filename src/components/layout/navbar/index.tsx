import React, { Component } from 'react';
import { Nav } from './navbar.styles';
import { Link } from 'react-router-dom';

export interface NavbarProps {
    readonly authenticated: boolean;
    readonly collapsed: boolean;
    readonly handleClick: any;
}

export class Navbar extends Component<NavbarProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { collapsed, authenticated, handleClick } = this.props;
        return (
            <Nav collapsed={collapsed} authenticated={authenticated}>
                {
                    authenticated ?
                        (
                            <ul>
                                <li><Link to="/" onClick={handleClick}>Home</Link> </li>
                                <li><Link to="/createproject" onClick={handleClick}>New Project</Link></li>
                                <li><Link to="/signout" onClick={handleClick}>Sign Out</Link></li>
                            </ul>
                        ) :
                        (
                            <ul>
                                <li><Link to="/" onClick={handleClick}>Home</Link> </li>
                                <li><Link to="/signup" onClick={handleClick}>Sign Up</Link></li>
                                <li><Link to="/signin" onClick={handleClick}>Sign In</Link></li>
                            </ul>
                        )
                }
            </Nav>
        );
    }
}

