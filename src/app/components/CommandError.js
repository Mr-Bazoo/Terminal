import React from 'react';
import CommandLine from './CommandLine.js'

const CommandError = (props) => {
    const command = props.command;

    return (
        <p>
            <CommandLine command={command}></CommandLine>
            <p class="error">Comando: ({command}) niet gevonden, probeer iets anders. </p>
        </p>
    );
};

export default CommandError;