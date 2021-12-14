import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class WeirdMusicList extends Component {
  render() {
    return (
      <div className="app-container">
        <h3>Selected Weird Music Projects</h3>
        <ul>
          <li>
            <div>
              <Link className="pseudo-h4" to="/portfolio/weird/async-one">Async I</Link>
              <span className="year">(2018-19)</span>
              <div className="description">Decomposition of a cue composed for film score; uses asynchronicity to create rhythmically aleatoric music</div>
            </div>
          </li>
          <li>
            <div>
              <a href="https://soundcloud.com/chris-ruenes/melt" target="_blank">
                <h4>Melt</h4>
              </a>
              <span className="year">(2018-19)</span>
              <div className="description">Solo piece for electronically prepared piano. The piano triggers live synthesized samples of its own sound being transformed along partials of samples that change throughout the piece</div>
            </div>
          </li>
          <li>
            <div>
              <a href="https://soundcloud.com/chris-ruenes/41-42a" target="_blank">
                <h4>41-42</h4>
              </a>
              <span className="year">(2014)</span>
              <div className="description">Setting of passage from Moby Dick for tenor, pierrot ensemble, and electronics </div>
            </div>
          </li>
          <li>
            <div>
              <a href="https://soundcloud.com/chris-ruenes/rupt-ures-i-beethovens-fifth-ii-modernism-la-deshumanizacion-del-arte-iii-arvo-part" target="_blank">
                <h4>RUPT URES</h4>
              </a>
              <span className="year">(2013)</span>
              <div className="description">Three movement work of texts about music for small folk ensemble, soprano, and electronics</div>
            </div>
          </li>
        </ul>
        <Link className="link-button-small" to="/">Back</Link>
      </div>
    );
  }
}
