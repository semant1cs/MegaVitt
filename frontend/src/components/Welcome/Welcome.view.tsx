import React from 'react';
import {WelcomeViewProps} from "./Welcome.types";
import styles from "./Welcome.module.scss";
import SelectPage from "./SelectPage";

const WelcomeView: React.FC<WelcomeViewProps> = props => {
    return (
        <div className={styles.container}>
            <SelectPage {...props}/>
            <button onClick={props.addElement}>
                Добавить
            </button>
        </div>
    );
};

export default WelcomeView;
