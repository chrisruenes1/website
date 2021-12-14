import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';

export default function ScoringList() {
    const [selectedFile, setSelectedFile] = useState('');

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
        <div className="app-container">
            <h3>Selected Scoring Projects</h3>
           {renderPlayer()}
            <ul>
                <li>
                    <div>
                        <a href="https://vimeo.com/548408300" target="_blank">
                            <h4>Mirror</h4>
                        </a>
                        <span className="year">(2020)</span>
                        <span className="year">dir. Christina Yoon</span>
                        <div className="description">Score inspired by Ekkehard Ehlers’s production techniques. Official selection at Los Angeles Asian Pacific Film Festival</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="https://www.robertlongo.com/exhibitions/2017_DestroyerCycle/index.html" target="_blank">
                            <h4>Robert Longo's "The Destroy Cycle"</h4>
                        </a>
                        <span className="year">(2018)</span>
                        <span className="year">dir. Max Stenström</span>
                        <div className="description">Score for a gallery video on Robert Longo's website</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span className='pseudo-link' onClick={() => setSelectedFile('car-scene.wav')}>
                            <h4>Car Scene</h4>
                        </span>
                        <h4> and </h4>
                        <span className='pseudo-link' onClick={() => setSelectedFile('kiss-scene.wav')}>
                            <h4>Kiss Scene</h4>
                        </span>
                        <h4> from "Midnight Girl" </h4>
                        <span className="year">(2018)</span>
                        <span className="year">dir. Christina Yoon</span>
                        <div className="description">Two cues from short film</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="https://www.youtube.com/watch?v=ag_9MsoErQc" target="_blank">
                            <h4>"Get Some" by Ghosted</h4>
                        </a>
                        <span className="year">(2017)</span>
                        <span className="year">dir. Fidel Ruiz-Healy</span>
                        <div className="description">Wrote ambient cue for beginning and end of music video</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="https://vimeo.com/298061750" target="_blank">
                            <h4>What a Beautiful World (This Will Be)</h4>
                        </a>
                        <span className="year">(2016)</span>
                        <span className="year">dir. Tyler Walker</span>
                        <div className="description">Punk free jazz score for short film that was an official selection at Palm Springs, Raindance & Slamdance</div>
                    </div>
                </li>
                <li>
                    <div>
                        <a href="https://vimeo.com/201664316" target="_blank">
                            <h4>Film Scoring Reel</h4>
                        </a>
                        <span className="year">(2013-2017)</span>
                        <div className="description">A compilation of short, feature and documentary film scoring work</div>
                    </div>
                </li>
            </ul>
            <Link className="link-button-small" to="/">Back</Link>
        </div>
    );
}
