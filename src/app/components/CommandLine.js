import React from 'react';

const CommandLine = (props) => {
    const command = props.command;

    return (
        <div style={{ paddingTop: 10 }}>
            <p>
                <span class="prefix">Hacker</span>@<span class="secondary">Bazootainment</span>:~$ {command}
            </p>
        </div>
    );
};

export default CommandLine;