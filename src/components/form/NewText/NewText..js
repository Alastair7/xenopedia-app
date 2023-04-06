import React, { useRef } from 'react';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea} from 'primereact/inputtextarea';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import './NewText.scss';
export default function NewTextForm() {

    const toast = useRef(null);
    const show = () => {
        toast.current.show({severity: 'success', summary: 'Form submited', detail: formik.values.title})
    }
    const formik = useFormik({
        initialValues: {
            title: '',
            text: ''
        },
        validate: (data) => {
            let errors = {};

            if (!data.title) {
                errors.title = 'Title is required.';
            }

            if (!data.text) {
                errors.text = "Text can't be empty.";
            }

            return errors;
        },
        onSubmit: (data) => {
            console.log(data);
            show(data);
            formik.resetForm();
        }
    });

    const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small>
        : <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className='card flex justify-content-center'>
            <h1>ADD TEXT</h1>
            <form onSubmit={formik.handleSubmit} className='flex flex-column gap-2'>
                <Toast ref={toast} />
                <span className='p-float-label'>
                    <InputText
                    id='title'
                    name='title'
                    value={formik.values.title}
                    onChange={(e) => {
                        formik.setFieldValue('title', e.target.value);
                    }}
                    className={classNames({'p-invalid': isFormFieldInvalid('title')})} 
                    />
                    <label htmlFor='input-value'>Title</label>
                </span>
                <span className='p-float-label'>
                    <InputTextarea
                    id='text'
                    name='text'
                    value={formik.values.text}
                    onChange={(e) => {
                        formik.setFieldValue('text', e.target.value);
                    }}
                    className={classNames({'p-invalid':isFormFieldInvalid('text')})} 
                    />
                    <label htmlFor='input-value'>Enter your text here</label>
                </span>
                {getFormErrorMessage('title')}
                {getFormErrorMessage('text')}
                <Button type='submit' label='Add' />
            </form>
        </div>
    );
}