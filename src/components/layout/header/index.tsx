import React, { Component } from 'react';
import { Head, Toggle, LineTop, LineMiddle, LineBottom } from './header.styles';
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

        this.hideShow = this.hideShow.bind(this);
    }

    hideShow() {
        this.setState(prevState => ({
            isShown: !prevState.isShown
        }));
    }

    render() {
        const { isShown, isAuthenticated } = this.state;
        return (
            <div>
                <Head collapsed={isShown}>
                    <Logo />
                    <Navbar authenticated={isAuthenticated} collapsed={isShown} />
                    <Toggle onClick={this.hideShow}>
                        <LineTop collapsed={isShown} />
                        <LineMiddle collapsed={isShown} />
                        <LineBottom collapsed={isShown} />
                    </Toggle>
                </Head>
            </div>
        )
    }
}

