import React from 'react';
import {WelcomeViewProps} from "./Welcome.types";
import styles from "./Welcome.module.scss";

const WelcomeView: React.FC<WelcomeViewProps> = props => {
    return (
        <div className={styles.container}>
        </div>
    );
};

export default WelcomeView;
