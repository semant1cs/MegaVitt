import React from 'react';
import type {FieldsProps} from "../Welcome.types";
import styles from "../Welcome.module.scss"

const Fields: React.FC<FieldsProps> = props => {

    return (
        <div>
            <input className={styles.container__input} value={props.condition.value}
                   onChange={(e) => props.setTextCallback(props.index, e.target.value)}/>
        </div>
    );
};

export default Fields;
