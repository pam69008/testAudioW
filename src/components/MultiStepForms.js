import React from 'react';
import {useForm, useStep } from 'react-hooks-helper';
import {Names} from './stepForms/Names'
import {Gender} from './stepForms/Gender'
import {Results} from './stepForms/Results'

const defaultData = {
    firstName: '',
    lastName: '',
    gender: ''
}
const steps = [
    {id: "names"},
    {id: "gender"},
    {id: "results"}
]
export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    });
const props = { formData, setForm, navigation}
    switch(step.id) {
        case "names":
            return <Names { ...props }/>;
        case "gender":
            return <Gender { ...props } />;
        case "results": 
            return <Results { ...props } />;
    }
}