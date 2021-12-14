import React, { Component } from 'react';
import WordArray from 'an-array-of-english-words';
import * as _ from 'underscore';

import Voice from './Voice';

export default class VoiceSet extends Component {

  renderVoices() {
    // A voice set is just an atttempt to make my impulse
    // for 5 voices on a part seem intentional
    return [1,2,3,4,5].map((num, voiceIndex) => (
      <Voice 
        offsetLeft={voiceIndex}
        key={`${this.props.index}:${voiceIndex}`}
        offsetTop={this.props.index}
        data={this.props.voiceData}
        enqueueCallback={this.props.enqueueCallback}
        playing={this.props.playing}
        singleEvents={this.props.singleEvents}
        setCache={this.props.setCache}
        fetchFromCache={this.props.fetchFromCache}
        currentQuery={this.props.currentInstrument}
      />
    ));
  }
  
  render() {
    return (
      <div >
        <div style={{ position: 'absolute', left: '20px', top: (this.props.index + 1) * 100 + 247 }}>{this.props.currentInstrument}</div>
        {this.renderVoices()}
      </div>
    )
  }
}