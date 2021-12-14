import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Player from './Player';
import Text from './Text';

export default function SmallerEnsembleList() {
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
                <h3>Selected Projects for Smaller Ensemble
                    <div className='subtitle'>
                        <h5 className='subtitle'>(1-5 musicians)</h5>
                    </div>
                </h3>
            </div>
            <div className='main-content-container'>
                <div className='content-left'>
                    {renderPlayer()}
                    <ul>
                        <li>
                            <div>
                                <a href="https://www.youtube.com/watch?v=7tMWD_tI3d8&t=277s" target="_blank">
                                    <h4>Rococo I</h4>
                                </a>
                                <span className="year">(2020)</span>
                                <span className="year">Atalier Piano Quartet</span>
                                <div className="description">Small piece that weaves together highly decorated lines, each of which develops according to its own logic. Performed by Atalier Piano Quartet</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="https://youtu.be/kHqLrMVurlA?t=8675" target="_blank">
                                    <h4>320 Hanes Mill Rd, Winston Salem, NC 27105</h4>
                                </a>
                                <span className="year">(2020)</span>
                                <span className="year">Laura Bohn</span>
                                <div className="description">Setting of an early version of a poem by Yasmina Martin, interspersed marketing copy from Hanes, Krispy Kreme, and Sara Lee</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className='pseudo-link' onClick={() => updateSelection('kyrie.wav')}>
                                    <h4>Kyrie</h4>
                                </span>
                                <span className="year">(2019)</span>
                                <span className="year">Rebecca Telford-Marx and Rachel Bronstein</span>
                                <div className="description">Movement from a requiem for my grandmother, which supplements traditional texts with passages from Dorothy Day, Walt Whitman, Richard Siken, and others</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h4>Tumbling</h4>
                                <span className="year">(2019)</span>
                                <span className="year">Sara Kang, Lara Mitofsky Neuss and Aleia Gonzalez</span>
                                <ul className='movement-list'>
                                    <li>
                                        <span className='pseudo-link' onClick={() => updateSelection('tumbling-1.mp3')}>
                                            <h4>I. They Grappled</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='pseudo-link' onClick={() => updateSelection('tumbling-2.mp3')}>
                                            <h4>II. Unless the Falling Away Comes</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='pseudo-link' onClick={() => updateSelection('tumbling-3.mp3')}>
                                            <h4>III. While We Lie Tumbling in the Hay</h4>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='pseudo-link' onClick={() => updateSelection('tumbling-4.mp3')}>
                                            <h4>IV. Nobody Could See Them Falling</h4>
                                        </span>
                                    </li>
                                </ul>
                                <div className="description">Piece for guitar and woodwind trio. Each movement inspired by different text about falling with others</div>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className='pseudo-link' onClick={() => updateSelection('salt.mp3')}>
                                    <h4>Salt</h4>
                                </span>
                                <span className="year">(2019)</span>
                                <span className="year">Quartetto Indaco</span>
                                <div className="description">Kernel movement of a computer-assisted piece that creates deterministic but inscrutable connections between material</div>
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