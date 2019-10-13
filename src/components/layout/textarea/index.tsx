import React, { Component } from 'react';
import { Label, Input } from './textarea.styles';

interface TextAreaProps {
    readonly title: string;
    readonly placeholder?: string;
    readonly name: string;
    readonly value?: any;
    readonly onChange?: (event: any) => void;
}

export const TextArea = (props: TextAreaProps) => {
    const { title, placeholder, name, value, onChange } = props;
    return (
        <div>
            <Label>{title}
                <Input
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </Label>
        </div>
    );
}