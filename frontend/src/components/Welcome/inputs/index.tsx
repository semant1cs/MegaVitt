import React, {useEffect} from 'react';
import type {FieldsProps, TForm} from "../Welcome.types";
import styles from "../Welcome.module.scss"

const Fields: React.FC<FieldsProps> = props => {

    const [form, setForm] = React.useState(props.form)

    const setTextCallback = React.useCallback((index: number, value: string) => {

        setForm((prev: TForm) => {
            const newForm = structuredClone(prev);
            newForm.urlConditions[index].value = value
            return newForm
        })

    }, [props.index])

    useEffect(() => {
        props.setTextCallback(props.index, form.urlConditions[props.index].value)
    }, [form])

    return (
        <div>
            <input className={styles.container__input} value={form.urlConditions[props.index].value}
                   onChange={(e) => setTextCallback(props.index, e.target.value)}/>
        </div>
    );
};

export default Fields;
