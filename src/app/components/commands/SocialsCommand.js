import React, { useEffect } from 'react';
import CommandLine from '../CommandLine.js';

const SocialsCommand = (props) => {
    const command = props.command;

    // useEffect om de link automatisch te openen nadat de component is gerenderd
    useEffect(() => {
        // Toon het bericht en open de link na een korte vertraging (bijvoorbeeld 2 seconden)
        const timer = setTimeout(() => {
            window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0', '_blank');
        }, 2000);

        // Opruimen van de timer wanneer de component wordt ontmanteld
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <CommandLine command={command}></CommandLine>
            <p>Hahaha, dacht je dat nou echt!</p>
        </div>
    );
};

export default SocialsCommand;