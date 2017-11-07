import Button from './button'

import React, {Component} from 'react';


class App extends Component {
  constructor () {
    super()
    this._audioContext = new AudioContext()
    this._animationTime = 150
    this._resizeListener = window.addEventListener('resize', () => {

      this.setState({height: window.outerHeight})
    })
    this._themeHat = [
      {
        name: 'iPhone Standard',
        bgColor: "#f5f5f5",
        accentColor: "#444444",
      },
      {
        name: 'Zed',
        bgColor: "#000000",
        accentColor: "#b3ff45",
      },
      {
        name: 'LA Clippers',
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
        accentColor: "#fbe56b",
      },
      {
        name: '1980s NASA',
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
            <div style={this.$3051674128548()}>1</div>
            <div style={this.$2361762005236()}></div>
          </Button>
          <Button
            tone="2"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>2</div>
            <div style={this.$2361762005236()}>ABC</div>
          </Button>
          <Button
            tone="3"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>3</div>
            <div style={this.$2361762005236()}>DEF</div>
          </Button>
          <Button
            tone="4"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>4</div>
            <div style={this.$2361762005236()}>GHI</div>
          </Button>
          <Button
            tone="5"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>5</div>
            <div style={this.$2361762005236()}>JKL</div>
          </Button>
          <Button
            tone="6"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>6</div>
            <div style={this.$2361762005236()}>MNO</div>
          </Button>
          <Button
            tone="7"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>7</div>
            <div style={this.$2361762005236()}>PQRS</div>
          </Button>
          <Button
            tone="8"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>8</div>
            <div style={this.$2361762005236()}>TUV</div>
          </Button>
          <Button
            tone="9"
            bgColor={this.state.theme.bgColor}
            accentColor={this.state.theme.accentColor}
            audioContext={this._audioContext}>
            <div style={this.$3051674128548()}>9</div>
            <div style={this.$2361762005236()}>WXYZ</div>
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
            <div style={this.$3051674128548()}>0</div>
            <div style={this.$2361762005236()}>+</div>
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
  componentDidMount () {


  }
  changeTheme = () => {
    const newTheme = this._themeHat[Math.floor(Math.random() * this._themeHat.length)]

    this.setState({theme: newTheme})
  }
  $3064154821488 () {
    return {
      padding: '3vw 0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: this.state.height,
      transition: `all ${this._animationTime}ms linear`,
      backgroundColor: this.state.theme.bgColor,
    }
  }
  $2896590892662 () {
    return {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '47vw',
    }
  }
  $2126869568508 () {
    return {
      color: this.state.theme.accentColor,
      fontSize: '3vw',
      fontWeight: 'bold',
      padding: '0 0 3vw',
    }
  }
  $2579351992763 () {
    return {position: 'fixed', left: '1vw', bottom: '1vw'}
  }
  $3051674128548 () {
    return {
      fontSize: '3.25vw',
    }
  }
  $2361762005236 () {
    return {
      fontSize: '1vw',
      letterSpacing: '0.085vw',
    }
  }
  $3614752369292 () {
    return {
      fontSize: '6vw',
      height: '4vw',
    }
  }
  $3255975513423 () {
    return {
      fontSize: '3vw',
    }
  }
}


export default App