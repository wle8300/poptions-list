import Button from './button'

import React, {Component} from 'react';


class App extends Component {
  constructor () {
    super()
    this._audioContext = this.createAudioContext()
    this._animationTime = 150
    this._resizeListener = window.addEventListener('resize', () => {

      this.setState({
        width: window.outerWidth,
        height: window.outerHeight,
      })
    })
    this._themeHat = [
      {
        name: 'iPhone',
        bgColor: "#f5f5f5",
        accentColor: "#444444",
      },
      {
        name: 'Zed',
        bgColor: "#000000",
        accentColor: "#b3ff45",
      },
      {
        name: 'Lakers',
        bgColor: "#ffec42",
        accentColor: "#d400ff",
      },
      {
        name: 'DRAX',
        bgColor: "#000000",
        accentColor: "#ff0000",
      },
      {
        name: 'Cody',
        bgColor: "#595a8c",
        accentColor: "#ffc239",
      },
      {
        name: 'Michael Bolton',
        bgColor: "#f9f9f9",
        accentColor: "#e0cf6c",
      },
      {
        name: 'NASA',
        bgColor: "#e9e9e9",
        accentColor: "#42528e",
      },
      {
        name: 'Pucker up!',
        bgColor: "#97ec63",
        accentColor: "#ff46ed",
      },
      {
        name: 'Diva',
        bgColor: "#f7f7f7",
        accentColor: "#ff46ed",
      },
    ]
    this.state = {
      height: window.outerHeight,
      theme: this._themeHat[0]
    }
  }
  render () {
    return (
      <div style={this.$3064154821488()}>
        <div style={this.$2126869568508()}>{this.state.theme.name}</div>
        <button style={this.$2579351992763()} onClick={this.changeTheme}>Random theme</button>
        <div style={this.$2896590892662()}>
          <Button
            tone="1"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>1</div>
              <div style={this.$2361762005236()}></div>
            </div>
          </Button>
          <Button
            tone="2"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>2</div>
              <div style={this.$2361762005236()}>ABC</div>
            </div>
          </Button>
          <Button
            tone="3"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>3</div>
              <div style={this.$2361762005236()}>DEF</div>
            </div>
          </Button>
          <Button
            tone="4"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>4</div>
              <div style={this.$2361762005236()}>GHI</div>
            </div>
          </Button>
          <Button
            tone="5"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>5</div>
              <div style={this.$2361762005236()}>JKL</div>
            </div>
          </Button>
          <Button
            tone="6"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>6</div>
              <div style={this.$2361762005236()}>MNO</div>
            </div>
          </Button>
          <Button
            tone="7"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>7</div>
              <div style={this.$2361762005236()}>PQRS</div>
            </div>
          </Button>
          <Button
            tone="8"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>8</div>
              <div style={this.$2361762005236()}>TUV</div>
            </div>
          </Button>
          <Button
            tone="9"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>9</div>
              <div style={this.$2361762005236()}>WXYZ</div>
            </div>
          </Button>
          <Button
            tone="*"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3614752369292()}>*</div>
            <div style={this.$2361762005236()}></div>
          </Button>
          <Button
            tone="0"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div>
              <div style={this.$3051674128548()}>0</div>
              <div style={this.$2361762005236()}>+</div>
            </div>
          </Button>
          <Button
            tone="#"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3255975513423()}>#</div>
            <div style={this.$2361762005236()}></div>
          </Button>
        </div>
      </div>
    )
  }
  createAudioContext = () => {

    var Context = window.AudioContext || window.webkitAudioContext

    return new Context()
  }
  changeTheme = () => {
    const newTheme = this._themeHat[Math.floor(Math.random() * this._themeHat.length)]

    this.setState({theme: newTheme})
  }
  $3064154821488 () {
    return {
      padding: '8vw 0px',
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'center',
      flexDirection: 'column',
      height: this.state.height || '100%',
      transition: `all ${this._animationTime}ms linear`,
      backgroundColor: this.state.theme.bgColor,
    }
  }
  $2896590892662 () {
    return {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '80vw',
    }
  }
  $2126869568508 () {
    return {
      padding: '0 0 8vw',
      fontSize: '5vw',
      fontWeight: 'bold',
      color: this.state.theme.accentColor,
    }
  }
  $2579351992763 () {
    return {position: 'fixed', left: '4vw', bottom: '6vw', padding: '1vw'}
  }
  $3051674128548 () {
    return {
      fontSize: '6.25vw',
    }
  }
  $2361762005236 () {
    return {
      fontSize: '2.15vw',
      letterSpacing: '0.2vw',
    }
  }
  $3614752369292 () {
    return {
      fontSize: '14vw',
    }
  }
  $3255975513423 () {
    return {
      fontSize: '9vw',
    }
  }
}


export default App