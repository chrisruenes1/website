import React, { Component } from 'react';
import Features from './features';
import { Link } from 'react-router-dom';
import * as $ from 'jquery';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColorHex: '#e8e1ce',
      shouldUseMarquees: false,
      shouldChangeBackgroundColors: false,
      shouldPepperEmojis: false,
      shouldShowHidden: false,
      emojisToRender: [],
      emojiList: [],
    }
    window.__timeouts = [];
    this.emojiAPIKey = '964c3281d9ff55b5686109f5929205b4a825ae0a';
  }

  showCustomization = Features.customization;
  
  componentDidMount() {
    const emptyArr = [];
    window.intervalId = window.setInterval(() => {
      window.__timeouts.forEach((timeoutId, index, arr) => {
        if (index !== arr.length - 1) {
          window.clearTimeout(timeoutId);
        }
      });
    }, 5000);
    window.emojiIntervalId = window.setInterval(() => {
      this.state.shouldPepperEmojis ?
        this.setState({
          emojisToRender: [
          ...this.state.emojisToRender,
          this.generateRandomEmojiHash(),
        ]}) :
        this.setState({ emojisToRender: emptyArr });
    }, 1000);
    $.ajax({
      url: `https://emoji-api.com/emojis?access_key=${this.emojiAPIKey}`,
      success: function (result) {
        this.setState({
          emojiList: result,
        });
      }.bind(this),
    });
  }
  
  componentWillUnmount() {
    window.clearInterval(window.intervalId);
    window.clearInterval(window.emojiIntervalId);
    window.__timeouts.forEach(timeoutId => window.clearTimeout(timeoutId));
  }
  
  componentDidUpdate() {
    if (this.state.shouldChangeBackgroundColors) {
      this.generateBackgroundColorChangeTimeout();
    }
  }
  
  generateBackgroundColorChangeTimeout() {
    const hexCode = this.generateRandomHexCode();
    const interval = this.generateRandomInterval();
    const timeoutId = window.setTimeout(() => this.setState({ backgroundColorHex: hexCode }), interval);
    window.__timeouts.push(timeoutId);
  }
  
  generateRandomHexCode() {
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  }
  
  generateRandomInterval() {
    return Math.floor(Math.random() * 1500) + 500;
  }
  
  generateRandomEmojiHash() {
    if (this.state.emojiList) {
      const xPos = Math.floor(Math.random() * (window.screen.availWidth * (3/4)));
      const yPos = Math.floor(Math.random() * (window.screen.availHeight / 2));
      const fontSize = Math.floor(Math.random() * 72);
      const index = Math.floor(Math.random() * this.state.emojiList.length);
      const emoji = this.state.emojiList[index];
      return {
        xPos,
        yPos,
        fontSize,
        name: emoji.unicodeName,
        character: emoji.character,
      };
    } return {};
  }
  
  toggleMarqueeState() {
    this.setState({ shouldUseMarquees: !this.state.shouldUseMarquees });
  }
  
  toggleBackgroundColors() {
    this.setState({ shouldChangeBackgroundColors: !this.state.shouldChangeBackgroundColors });
  }
  
  toggleEmojis() {
    this.setState({ shouldPepperEmojis: !this.state.shouldPepperEmojis });
  }

  toggleShowHidden() {
    this.setState({ shouldShowHidden: !this.state.shouldShowHidden });
  }
  
  renderHeader() {
    const headerText = this.state.shouldUseMarquees ? '!!!! Welcome to Chris Ruenes\'s Materials (Online Version) !!!' : 'Chris Ruenes';
    return (
      this.state.shouldUseMarquees ? <marquee>{headerText}</marquee> : <h1>{headerText}</h1>
    )
  }

  renderAdvanced() {
    if (this.state.shouldShowHidden) {
      return <Link to="/domains" className="link-button">Domains</Link>
    } return null
  }
  
  renderEmojis() {
    return this.state.emojisToRender.map((emojiHash, index) => {
      const child = (
        <div>
          <span
            id={`emoji-${index}`}
            key={`emoji-${index}`}
            style={{
              fontSize: `${emojiHash.fontSize}px`,
              display: "block",
              position: "relative",
              left: "35%",
            }}
          >
            {emojiHash.character}
          </span>
          <label
            htmlFor={`emoji-${index}`}
          > 
            {emojiHash.name} 
          </label>
        </div>
      );
      return this.state.shouldUseMarquees ?
        (
          <marquee
            style={{
              position: "absolute",
              left: `${emojiHash.xPos}px`,
              top: `${emojiHash.yPos}px`,
            }}
          >
            {child}
          </marquee>
        ) : (
          <div
            style={{
              position: "absolute",
              left: `${emojiHash.xPos}px`,
              top: `${emojiHash.yPos}px`,
            }}
          >
            {child}
          </div>
        );
    });
  }

  renderCustomization() {
    if (this.showCustomization) {
      return (
        <React.Fragment>
          <h2>Customize your experience</h2>
          <ul>
            <li>
              <input
                name="marquee-option"
                type="checkbox"
                className="checkbox"
                checked={!this.state.shouldUseMarquees}
                onChange={this.toggleMarqueeState.bind(this)}
              />
              <label htmlFor="marquee-option" className="checkbox-label">
                Please prevent the title and any visible emojis from crawling across the screen
              </label>
            </li>
            <li>
              <input
                name="background-option"
                className="checkbox"
                type="checkbox"
                checked={!this.state.shouldChangeBackgroundColors}
                onChange={this.toggleBackgroundColors.bind(this)}
              />
              <label htmlFor="background-option" className="checkbox-label">
                Prevent the background from changing colors at semi-random intervals, if you don't mind. Thanks.
              </label>
            </li>
            <li>
              <input
                name="emoji-option"
                className="checkbox"
                type="checkbox"
                checked={!this.state.shouldPepperEmojis}
                onChange={this.toggleEmojis.bind(this)}
              />
              <label htmlFor="emoji-option" className="checkbox-label">
                Do please try to stop the peppering of the screen by semi-random emojis and their official names, which could teach me something.
              </label>
            </li>
            <li>
              <input
                name="advanced-option"
                className="checkbox"
                type="checkbox"
                checked={!this.state.shouldShowHidden}
                onChange={this.toggleShowHidden.bind(this)}
              />
              <label htmlFor="advanced-option" className="checkbox-label">
                Hide hidden features (Advanced)
              </label>
            </li>
          </ul>
        </React.Fragment>
      )
    } return null;
  }
  
  render() {
    return (
      <div
        className="app-container"
        style={{ backgroundColor: this.state.backgroundColorHex }}
      >
        {this.renderHeader()}
        {this.renderEmojis()}
        {this.renderCustomization()}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <Link to="/scoring" className="link-button squat">Scoring Work</Link>
            <Link to="/smaller-ensemble" className="link-button big">Works for Smaller Ensemble</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/electronic" className="link-button squat">Electronics Work</Link>
            <Link to="/larger-ensemble" className="link-button big">Works for Larger Ensemble</Link>
          </div>
          {this.renderAdvanced()}
        </div>
      </div>
    )
  }
}