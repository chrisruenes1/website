import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';

export default function ElectronicList() {
    const [selectedFile, setSelectedFile] = useState('');

    // TODO remember enough about react to figure out best way to abstract this repeated code
    function renderPlayer() {
        if (selectedFile) {
            return (
                <Player
                    filename={selectedFile}
                    onEnded={() => setSelectedFile('')}
                />
            )
        }
        return null;
    }

    return (
        <div className='app-container'>
            <h3>Selected Electronic Projects</h3>
            {renderPlayer()}
            <ul>
                <li>
                    <div>
                        <span className='pseudo-link' onClick={() => setSelectedFile('melt.mp3')}>
                            <h4>Melt</h4>
                        </span>
                        <span className="year">(2019)</span>
                        <div className="description">Solo piece for electronically prepared piano. The piano triggers live synthesized samples of its own sound being transformed along partials of samples that change throughout the piece</div>
                    </div>
                </li>
                <li>
                    <div>
                        <Link className="pseudo-h4" to="/async-one">Async I</Link>
                        <span className="year">(2018)</span>
                        <div className="description">Decomposition of a cue composed for film score; uses asynchronicity to create rhythmically aleatoric music</div>
                    </div>
                </li>
            </ul>
            <Link className="link-button-small" to="/">Back</Link>
        </div>
    )
}