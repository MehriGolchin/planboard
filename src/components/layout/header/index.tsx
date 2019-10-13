import React, { Component } from 'react';
import { HeadContainer, Head, Toggle, LineTop, LineMiddle, LineBottom } from './header.styles';
import { Navbar } from '../navbar';
import { Logo } from '../logo';

export interface HeaderState {
    isShown: boolean;
    isAuthenticated: boolean;
}

export class Header extends Component<{}, HeaderState> {
    constructor(props: any) {
        super(props);
        this.state = { isShown: false, isAuthenticated: true };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prevState) => ({
            isShown: !prevState.isShown
        }));
    }

    onNavbarClick = () => {
        if (this.state.isShown) {
            this.setState((prevState) => ({
                isShown: false
            }));
        }
    }

    render() {
        const { isShown, isAuthenticated } = this.state;
        return (
            <HeadContainer collapsed={isShown}>
                <Head collapsed={isShown}>
                    <Logo />
                    <Navbar authenticated={isAuthenticated} collapsed={isShown} handleClick={this.onNavbarClick} />
                    <Toggle onClick={this.toggle}>
                        <LineTop collapsed={isShown} />
                        <LineMiddle collapsed={isShown} />
                        <LineBottom collapsed={isShown} />
                    </Toggle>
                </Head>
            </HeadContainer>
        )
    }
}

