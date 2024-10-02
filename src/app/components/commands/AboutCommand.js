import React from 'react';
import CommandLine from '../CommandLine.js'
import LinkEntry from '../LinkEntry.js';

const AboutCommand = (props) => {
    const command = props.command;

    return (
        <div>
            <CommandLine command={command}></CommandLine>
            <p>Wat je echt over mij wil weten, en wat je nog niet wist.
                Ik ben dol op boter, kaas en eieren!
            </p>
        </div>
    );
};

export default AboutCommand;