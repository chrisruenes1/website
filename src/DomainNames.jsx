import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DomainNames extends Component {
    render() {
        return (
            <div className='app-container'>
                <h1>Domains</h1>
                <p>In the spirit of <b>Corporate Accountability</b>, I hereby decide to release the names of all domains (ie internet web addresses)
                that I own (through no fault of my own).
                </p>
                <h3>You must notice that, as you pursue most of these links, they will lead you:</h3>
                <ol>
                    <li>To tiny apps I made for friends and family to track work for PhD Qualifying Exams</li>
                    <li>To an <Link to="/examples/error-page" target="_blank" rel="noopener noreferrer">error page</Link>
                    </li>
                    <li>To even smaller apps I made for friends and family to keep track of water consuption (in quarts) in a friendly competition, which are broken</li>
                    <li>Back to the start of this website, but in a new tab</li>
                </ol>
                <h2>Please send your suggestions for what to PUT (ie host) at these domains to ruenes.chris@gmail.com</h2>
                <h3><b>ABSOLUTELY CRITICAL</b>: the subject line should read "What to do about $insertDomainNameHere$"</h3>
                <h4>ENJOY</h4>
                <ul>
                    <li>
                        <a
                            href='http://dooglecom.org'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            dooglecom.org
                        </a>
                    </li>
                    <li>
                        <a
                            href='http://highway2orals.com'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            highway2orals.com
                        </a>
                    </li>
                    <li>
                        <a
                            href='http://askjeems.com'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            askjeems.com
                        </a>
                    </li>
                    <li>
                        <a
                            href='http://chrisruenesmusic.com'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            chrisruenesmusic.com
                        </a>
                    </li>
                    <li>
                        <a
                            href='http://dooglecom.com'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            dooglecom.com
                        </a>
                    </li>
                    <li>
                        <a
                            href='http://siblingquartz19.family'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            siblingquartz19.family
                        </a>
                    </li>
                </ul>
                <Link className="link-button-small" to="/">Back</Link>
            </div>
        )
    }
}