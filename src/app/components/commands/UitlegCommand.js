import React from 'react';
import CommandLine from '../CommandLine.js'

const UitlegCommand = (props) => {
    const command = props.command;

    return (
        <div>
            <CommandLine command={command}></CommandLine>
            <p>Hallo 👋,</p>
            <p>Welkom op mijn website waarbij je het <strong>recht</strong> om mij postzegels te verkopen kan winnen!!</p>
            <p>Om uiteindelijk te winnen moet je opzoek gaan naar de verborgen hints.</p>
            <p>Als je uiteindelijk alles hebt gevonden, dan krijg je een <strong>codewoord</strong>.</p>
            <p>Als je dit codewoord tegen mij verteld en je mapje met kinderpostzegels bij je hebt.</p>
            <p>Dan mag jij mij kinderpostzegels verkopen!</p>
        </div>
    );
};

export default UitlegCommand;