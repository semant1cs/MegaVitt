import React from 'react';
import type {WelcomeContainerProps} from "./Welcome.types";
import WelcomeView from "./Welcome.view";

const Welcome: React.FC<WelcomeContainerProps> = props => {
    return (<WelcomeView {...props}/>);
};

export default Welcome;
