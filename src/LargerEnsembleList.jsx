import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';
import Text from './Text';

export default function LargerEnsembleList() {
    const [selectedFile, setSelectedFile] = useState('');
    const [selectedText, setSelectedText] = useState('');

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

    function updateSelection(audioFileName, textFileName = '') {
        setSelectedFile(audioFileName);
        setSelectedText(textFileName);
    }

    function renderText() {
        if (selectedText) {
            return <Text filename={selectedText} />
        }
        return null;
    }

    return (
        <div className='app-container'>
            <div className='header'>
                <h3>Selected Projects for Larger Ensemble
                    <div className='subtitle'>
                        <h5 className='subtitle'>(5+ musicians)</h5>
                    </div>
                </h3>
            </div>
            <div className='main-content-container'>
                <div className='content-left'>
                    {renderPlayer()}
                    <ul>
                        <li>
                            <div>
                                <span className='pseudo-link' onClick={() => updateSelection('calamus-v.mp3', 'calamus-v.txt')}>
                                    <h4>Calamus V (Throwing Flowers at Ghosts)</h4>
                                </span>
                                <span className="year">(2019)</span>
                                <div className="description">Setting of “Calamus V” by Walt Whitman that focusing on articulating the camp and exuberance of the text</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className='pseudo-link' onClick={() => updateSelection('41-42.mp3', 'whiteness-of-the-whale.txt')}>
                                    <h4>41-42</h4>
                                </span>
                                <span className="year">(2014)</span>
                                <div className="description">Setting of passage from Moby Dick for tenor, pierrot ensemble, and electronics </div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4>RUPT URES</h4>
                                <span className="year">(2013)</span>
                                <ul className='movement-list'>
                                    <li>
                                        <span className='pseudo-link' onClick={() => updateSelection('ruptures-1.mp3')}>
                                            <h4>I. Beethoven's 5th</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='pseudo-link' onClick={() => updateSelection('ruptures-2.mp3')}>
                                            <h4>II. Modernism (La Deshumanización del Arte)</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='pseudo-link' onClick={() => updateSelection('ruptures-3.mp3')}>
                                            <h4>III. Arvo Pärt</h4>
                                        </span>
                                    </li>
                                </ul>
                                <div className="description">Three movement work of texts about music for folk ensemble, soprano, and electronics</div>
                            </div>
                        </li>
                    </ul>
                    <Link className="link-button-small" to="/">Back</Link>
                </div>
                <div className='content-right'>
                    {renderText()}
                </div>
            </div>
        </div>
    )
}