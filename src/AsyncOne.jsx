import React, { Component } from 'react';
import * as _ from 'underscore';
import logo from './logo.svg';
import './App.css';
import midi from './data/midi.json';
import VoiceSet from './VoiceSet'
import Voice from './Voice';
import { INSTRUMENTS } from './appConfig';
import { Link } from 'react-router-dom';

class AsyncOne extends Component {

  constructor(props) {
    super(props);
    this.state = { playing: false, singleEvents: true };
    window.__cache = {};
  }

  enqueueCallback(callback) {
    if (_.isUndefined(window.__queue)) {
      window.__queue = [];
    }
    window.__queue.push(callback);
  }

  dequeueCallback() {
    if (_.isUndefined(window.__queue)) {
      window.__queue = [];
    }
    const callback = window.__queue.shift();
    if (_.isFunction(callback)) { callback(); }
  }

  setCache(key, value) {
    if (!window.__cache[key]) {
      window.__cache[key] = value;
    }
  }

  fetchFromCache(key) {
    return window.__cache[key];
  }

  togglePlayStatus() {
    this.setState({ playing: !this.state.playing });
  }

  toggleSingleEvents() {
    this.setState({ singleEvents: !this.state.singleEvents });
  }

  componentWillMount() {
    this.instrumentsArr = _.shuffle(INSTRUMENTS);
  }

  componentDidMount() {
    window.__interval = window.setInterval(() => this.dequeueCallback(), 500)
  }

  componentWilUnmount() {
    window.clearInterval(window.__interval)
  }

  render() {
    const voiceSets = midi.voices.map((voiceData, index) => (
      <VoiceSet
        key={index}
        index={index}
        voiceData={voiceData}
        enqueueCallback={this.enqueueCallback}
        playing={this.state.playing}
        setCache={this.setCache}
        singleEvents={this.state.singleEvents}
        fetchFromCache={this.fetchFromCache}
        currentInstrument={this.instrumentsArr[index]}
      />
    ));
    return (
      <div className="App">
        <h3>
          Async I
          <Link className="link-button" to="/electronic">Back</Link>
        </h3>
        <section>
          This piece is a decomposition of some music from a film I worked on. The original piece can be found <a href="https://soundcloud.com/chris-ruenes/kiss-scene-midnight-girl" target="_blank">here</a>.
        </section>
        <section>
          Each time the page loads, the instruments are shuffled. Each instrument represents a voice, and each voice has five
          separate instances of it going at the same time.
        </section>
        <section>
          This is largely an experiment in aleatoric rhythm and harmony that comes from intentionally using asynchronous processes.
        </section>
        <section>
          You can watch how the instances move in relation to other instances and other voices.
        </section>
        <section>
          Every time a note plays, it fetches a random sound that is close to right pitch and instrumentation from freesound.org.
        </section>
        <section>
          If you don't like the first version you get (or if there is too much silence), feel free to refresh the page!
        </section>
        <section>
           And, if you want to introduce more randomness in the notes returned, check the option that says "Less Strict" :)
        </section>
        <button
          style={{
            fontSize: '40px',
            marginTop: '10px',
            backgroundColor: 'blue',
            color: 'pink',
            cursor: 'pointer',
            float: 'left',
            marginLeft: '20px',
          }}
          onClick={this.togglePlayStatus.bind(this)}
        >
          {this.state.playing ? "Pause" : "Play"}
        </button>
        <input
          name="less-strict"
          type="checkbox"
          className="checkbox"
          checked={!this.state.singleEvents}
          onChange={this.toggleSingleEvents.bind(this)}
        />
        <label htmlFor="marquee-option" className="checkbox-label">
          Less strict
        </label>
        {voiceSets}
      </div>
    );
  }
}

export default AsyncOne;
