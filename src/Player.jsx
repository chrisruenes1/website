import React from 'react';

export default function Player({ filename, onEnded }) {
    const file = require(`./assets/${filename}`)
    return (
        <audio
            src={file}
            controls
            autoPlay
            onEnded={onEnded}
        ></audio>
    )
}