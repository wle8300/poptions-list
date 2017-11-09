import PoptionsList from './PoptionsList'

import React, {Component} from 'react'


class App extends Component {
  constructor () {
    super()
    // this._audioContext = this.createAudioContext()
    this._animationTime = 150
    this._resizeListener = window.addEventListener('resize', () => {

      this.setState({
        width: window.outerWidth,
        height: window.outerHeight,
      })
    })
    this.state = {
      width: window.outerHeight,
      height: window.outerHeight,
    }
  }
  render () {
    return (
      <div style={this.$3064154821488()}>
        <div style={this.$2126869568508()}>Get Started</div>
        <div style={this.$1492007386357()}>Pokémon is a media franchise managed by The Pokémon Company, a Japanese consortium between Nintendo, Game Freak, and Creatures. The franchise copyright is shared by all three companies, but Nintendo is the sole owner of the trademark.</div>
        <PoptionsList
          title="choose a number"
          options={[1, 2, 3, 4]}
        />
        <div style={this.$1492007386357()}>Pokémon is a media franchise managed by The Pokémon Company, a Japanese consortium between Nintendo, Game Freak, and Creatures. The franchise copyright is shared by all three companies, but Nintendo is the sole owner of the trademark.</div>
      </div>
    )
  }
  handlePress () {

    // hide
    // show menu (at x/y-coords)
  }
  // createAudioContext = () => {
  //
  //   var Context = window.AudioContext || window.webkitAudioContext
  //
  //   return new Context()
  // }
  $3064154821488 () {
    return {
      padding: '8vw 0px',
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'center',
      flexDirection: 'column',
      height: this.state.height || '100%',
      transition: `all ${this._animationTime}ms linear`,
      // backgroundColor: this.state.theme.bgColor,
    }
  }
  $2126869568508 () {
    return {
      padding: '0 0 8vw',
      fontSize: '5vw',
      fontWeight: 'bold',
      // color: this.state.theme.accentColor,
    }
  }

  $1492007386357 () {
     return {
       padding: '10vw',
     }
   }
}


export default App