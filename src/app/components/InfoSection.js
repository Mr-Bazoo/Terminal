import React from 'react';
import { name, version } from '../../../package.json';

const InfoSection = () => {
    return (
        <span>
            <p>Welkom bij {name}. (Version {version})</p>
            <p>----</p>
            <p>Kan jij de geheime code vinden en het raadsel oplossen?</p>
            <p>----</p>
            <p>Voor een lijst met commando{"'"}s die je kan gebruiken type `<span class="secondary">help</span>`.</p>
        </span>
    );
};

export default InfoSection;