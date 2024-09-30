import React from 'react';
import CommandLine from '../CommandLine.js'

const HelpLine = (props) => {
    const command = props.command;
    const description = props.description;

    return (
        <tr>
            <td class="secondary" style={{ width: 150 }}>
                {command}
            </td>
            <span>-&nbsp;&nbsp;</span>
            <td>
                {description}
            </td>
        </tr>
    )
}

const HelpCommand = (props) => {
    const command = props.command;

    return (
        <p>
            <CommandLine command={command}></CommandLine>
            <table style={{ lineHeight: 1 }}>
                <HelpLine command={"about"} description={"Informatie over Meneer Bas"}></HelpLine>
                <HelpLine command={"clear"} description={"Maak alles leeg en start opnieuw"}></HelpLine>
                <HelpLine command={"Uitleg"} description={"Wil je wat uitleg hebben?"}></HelpLine>
                <HelpLine command={"echo"} description={"Herhaal wat jij typt"}></HelpLine>
                <HelpLine command={"help"} description={"Welke commando's doen wel iets op deze website?"}></HelpLine>
                <HelpLine command={"history"} description={"Krijg een lijst over wat je al getypt hebt."}></HelpLine>
                <HelpLine command={"projects"} description={"Waar staat Meneer Bas bekend om?"}></HelpLine>
                <HelpLine command={"socials"} description={"get all my socials"}></HelpLine>
                <HelpLine command={"welcome"} description={"Print het begin nog een keer."}></HelpLine>
                <HelpLine command={"whoami"} description={"Verteld je wie je bent"}></HelpLine>
            </table>
        </p>
    );
};

export default HelpCommand;