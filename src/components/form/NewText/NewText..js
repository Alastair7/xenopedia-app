import React from 'react';
import { Form, Field } from 'react-final-form';

export default function NewTextForm() {
    return (
        <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit }) => (
            <h2>Test</h2>
        )}
         />
    );
}