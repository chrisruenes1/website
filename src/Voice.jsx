import React, { Component } from 'react';
import * as _ from 'underscore';
import * as $ from 'jquery';
import Freq from 'midi-freq';
import {
  FREESOUND_API_KEY,
  TEMPO_MIN,
  TEMPO_MAX,
  MS_IN_MINUTE,
  BEATS_IN_MEASURE,
  TUNING_FREQ,
} from './appConfig';

export default class Voice extends Component {
  constructor(props) {
    super(props);
    const tempo = Math.floor(Math.random() * (TEMPO_MAX - TEMPO_MIN)) + TEMPO_MIN;
    this.state = {
      currentUrl: '',
      currentIndex: 0,
      tempo: tempo,
      offsetLeft: this.props.offsetLeft,
      currentQuery: this.props.currentQuery,
    }
  }
  
  componentWillMount() {
    this.calculateNextPitch();
  }
  
  componentDidUpdate(prevProps) {
    if (!prevProps.playing && this.props.playing) {
      this.calculateNextPitch();
    }
  }
  
  setAuthenticatedUrl(responseData, pitchData, fetchedFromCache=false) {
    if (!_.isNull(responseData) && responseData.count > 0) {
      if (!fetchedFromCache) { this.props.setCache(`${this.state.currentQuery}:${pitchData}`, responseData) }
      const sourceUrl = _.sample(responseData.results).previews['preview-hq-mp3'];
      const authenticatedUrl = `${sourceUrl}?token=${FREESOUND_API_KEY}`
      this.props.enqueueCallback(
        () => this.setState({ currentIndex: this.state.currentIndex + 1, offsetLeft: this.state.offsetLeft + 25, currentUrl: authenticatedUrl }),
      );
    }
  }
  
  hanldeError(response) {
  }
  
  async calculateNextPitch() {
    if (!this.props.playing) return;
    const pitchData = this.props.data[this.state.currentIndex];
    if (_.isNull(pitchData)) {
      this.setState({ currentIndex: this.state.currentIndex + 1, offsetLeft: this.state.offsetLeft + 25 });
      const measureLengthInMs = (BEATS_IN_MEASURE * MS_IN_MINUTE) / this.state.tempo;
      window.setTimeout(() => {
        this.calculateNextPitch();
      }, measureLengthInMs);
    } else {
      const cacheKey = `${this.state.currentQuery}:${pitchData}`;
      const cachedResults = this.props.fetchFromCache(cacheKey);
      if (!_.isUndefined(cachedResults)) {
        this.setAuthenticatedUrl(cachedResults, pitchData, true);
      } else {
        if (_.isUndefined(pitchData)) { 
          return 
        }
        this.props.enqueueCallback(() => {
          const url = `https://freesound.org/apiv2/search/text/?query=${this.state.currentQuery}&fields=previews&filter=ac_note_midi:${pitchData} ac_note_confidence:[0.95 TO 1.0] ac_single_event:${this.props.singleEvents}&token=${FREESOUND_API_KEY}`;
          $.ajax({
            url,
            contentType: 'application/json',
            success: response => this.setAuthenticatedUrl(response, pitchData),
            error: response => this.handleError,
          });
        })
      }
    }
  }
  
  render() {
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            marginLeft: this.state.offsetLeft + 125, 
            marginTop: this.props.offsetTop * 100 + 65
          }}>
          {`VOICE ${this.props.offsetTop + 1}`}
        </div>
        <audio 
          src={this.state.currentUrl} 
          onEnded={this.calculateNextPitch.bind(this)}
          crossOrigin="anonymous"
          autoPlay 
        />
      </div>
    )
  }
}