import React from 'react';
import CommandLine from '../CommandLine.js'

const WhoAmICommand = (props) => {
    const command = props.command;

    return (
        <div>
            <CommandLine command={command}></CommandLine>
            <p>sudo</p>
        </div>
    );
};

export default WhoAmICommand;