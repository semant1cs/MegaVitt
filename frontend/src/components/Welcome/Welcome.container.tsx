import React from 'react';
import type {TForm, WelcomeContainerProps} from "./Welcome.types";
import WelcomeView from "./Welcome.view";

const Welcome: React.FC<WelcomeContainerProps> = props => {

    const [form, setForm] = React.useState({urlConditions: [{value: ""}]});

    const setFormCallback = React.useCallback((newForm: TForm) => {
        setForm(() => newForm)
    }, [])

    const setUrlConditionsCallback = React.useCallback((newCond: { value: string }[]) => {
        setForm((prev: TForm) => ({...prev, urlConditions: newCond}))
    }, [])

    const setTextCallback = React.useCallback((index: number, newValue: string) => {
        setForm((prev: TForm) => {
            const cond = structuredClone(prev.urlConditions)
            cond[index].value = newValue
            return {...prev, urlConditions: cond}
        })
    }, [])

    const addElement = React.useCallback(() => {
        setForm((prev: TForm) => ({
            ...prev,
            urlConditions: [...form.urlConditions, {value: "Новый"}]
        }))
    }, [])

    return (<WelcomeView setTextCallback={setTextCallback} urlConditions={form.urlConditions}
                         setFormCallback={setFormCallback}
                         form={form}
                         setUrlConditionsCallback={setUrlConditionsCallback}
                         addElement={addElement} {...props}/>);
};

export default Welcome;
