import React from 'react';
import { name, version } from '../../../package.json';

const InfoSection = () => {
    return (
        <span>
            <p>Welkom bij {name}. (Version {version})</p>
            <p>----</p>
            <p>Kan jij het raadsel oplossen en het geheime codewoord vinden?</p>
            <p>----</p>
            <p>Voor een lijst met commando{"'"}s die je kan gebruiken type `<span class="secondary">help</span>`.</p>
        </span>
    );
};

export default InfoSection;