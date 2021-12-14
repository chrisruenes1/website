import React, { useState } from 'react';

export default function Text({ filename }) {

    const [text, setText] = useState('');

    fetch(`text/${filename}`)
        .then((r) => r.text())
        .then(fileText => {
            setText(fileText)
        })

    function renderLines() {
        const lines = text.split('\n');
        return lines.map((line, index) => (
            <React.Fragment>
                <span className='text' key={index}>{line}</span><br />
            </React.Fragment>
        ))
    }
    
    return (
        <div className='text-lines-container'>
            {renderLines()}
        </div>
    )
}