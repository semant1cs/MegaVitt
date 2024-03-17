import React, {RefObject, useEffect, useRef} from 'react';
import {FieldsProps, WelcomeViewProps} from "../Welcome.types";
import styles from "../Welcome.module.scss";

const SelectPage: React.FC<WelcomeViewProps> = props => {

    const input = useRef<HTMLInputElement>(null);

    return (
        <div>
            {
                props.urlConditions && props.urlConditions.map((cond, index) =>
                    <Fields index={index} condition={cond}
                            key={`${index}_${JSON.stringify(cond)}`}
                            setTextCallback={props.setTextCallback}
                            inputRef={input}
                            addElement={props.addElement}/>
                )
            }
        </div>
    );
};

const Fields: React.FC<FieldsProps & { inputRef: RefObject<HTMLInputElement> }> = props => {

    useEffect(() => {
        props.inputRef.current && props.inputRef.current?.focus()
    }, [props.inputRef]);

    return (
        <div className={styles.container__wrapper}>
            <input className={styles.container__input} ref={props.inputRef} value={props.condition.value}
                   // autoFocus={true}
                   onChange={(e) => props.setTextCallback(props.index, e.target.value)}/>
        </div>
    )
}

export default SelectPage;
