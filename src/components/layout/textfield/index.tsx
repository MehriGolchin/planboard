import React, { Component } from 'react';
import { Label, Input } from './textfield.styles';

interface TextFieldProps {
    readonly title: string;
    readonly placeholder?: string;
    readonly type: string;
    readonly name: string;
    readonly value?: string;
    readonly onChange?: (event: any) => void;
}

export const TextField = (props: TextFieldProps) => {
    const { title, placeholder, type, name, value, onChange } = props;
    return (
        <div>
            <Label>{title}
                <Input
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </Label>
        </div>
    );
}