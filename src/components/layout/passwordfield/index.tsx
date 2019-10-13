import React, { Component } from 'react';
import { Wrapper, Label, Password, ShowHideButton } from './passwordfield.styles';

export interface PasswordFieldProps {
    readonly title: string;
    readonly placeholder?: string;
    readonly name: string;
    readonly value?: any;
    readonly handleChange?: any;
}

export interface PasswordFieldState {
    isShown: boolean;
}

export class PasswordField extends Component<PasswordFieldProps, PasswordFieldState> {
    constructor(props: PasswordFieldProps) {
        super(props);
        this.state = {isShown: false};
    }

    showHide = () => {
        this.setState(prevState => ({
            isShown: !prevState.isShown
        }));
    }

    render() {
        const {title, placeholder, name, value, handleChange} = this.props;
        const { isShown } = this.state;
        return(
            <Wrapper>
                <Label>{title}
                    <Password
                        type={isShown ? "text" : "password"}
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={handleChange}
                    />
                    <ShowHideButton onClick={this.showHide}>
                    | {isShown ? "Hide" : "Show"}
                    </ShowHideButton>
                </Label>
            </Wrapper>
        );
    }
}