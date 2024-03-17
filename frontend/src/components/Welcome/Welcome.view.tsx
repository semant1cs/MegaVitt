import React from 'react';
import {WelcomeViewProps} from "./Welcome.types";
import styles from "./Welcome.module.scss";
import Fields from "./inputs";

const WelcomeView: React.FC<WelcomeViewProps> = props => {
    return (
        <div className={styles.container}>
            {
                props.urlConditions.map((cond, index) =>
                    <Fields key={`${index}_${JSON.stringify(cond)}`} condition={cond} index={index}
                            setTextCallback={props.setTextCallback}
                            setFormCallback={props.setFormCallback}
                            form={props.form}
                            urlConditions={props.urlConditions}
                            setUrlConditionsCallback={props.setUrlConditionsCallback}
                            addElement={props.addElement}/>
                )
            }
            <button onClick={props.addElement}>
                Добавить
            </button>
        </div>
    );
};

export default WelcomeView;
