import touchtone from 'touchtone'
import webaudio from 'webaudio'
import React, {Component} from 'react';


class Button extends Component {
  constructor () {
    super()
    this.state = {
      isHover: false,
      isActive: false,
      isResetting: false,
    }
    this._animationTime = 150
  }
  render () {
    return (
      <button
        onClick={() => true}
        onMouseOver={() => this.setState({isHover: true})}
        onMouseOut={() => this.setState({isHover: false, isActive: false})}
        onMouseDown={this.handlePress}
        onTouchStart={this.handlePress}
        onMouseUp={this.handlePressReset}
        onTouchEnd={this.handlePressReset}
        style={this.$3088423514288()}>
        {this.props.children}
      </button>
    )
  }
  handlePress = () => {

    const cipher = touchtone()

    cipher.dial(this.props.tone)

    webaudio(this.props.audioContext, cipher.play()).play()

    this.setState({isActive: true, isResetting: false})
  }
  handlePressReset = () => {

    this.setState({isResetting: true}, () => {

      setTimeout(() => {

        this.setState({isActive: false, isResetting: false})
      }, this._animationTime)
    })
  }
  $3088423514288 = () => {

    const hover = this.state.isHover ? {} : {}
    const active = this.state.isActive ? {
      color: this.props.bgColor,
      backgroundColor: this.props.accentColor,
    } : {}
    const reset = this.state.isResetting ? {
      backgroundColor: 'transparent',
      transition: `all ${this._animationTime}ms ease-out`,
    } : {}

    return Object.assign(
      {},
      {
        display: 'flex',
        // display: '-webkit-inline-box',
        // WebkitBoxPack: 'center',
        // WebkitBoxAlign: 'center',
        flexGrow: 0,
        flexShrink: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        WebkitFlexAlign: 'center',
        msFlexAlign: 'center',
        WebkitAlignItems: 'center',
        WebkitBoxAlign: 'center',
        margin: '2vw',
        padding: '5.2vw',
        width: '20vw',
        height: '20vw',
        color: this.props.accentColor,
        border: `0.35vw solid ${this.props.accentColor}`,
        borderRadius: '100%',
        backgroundColor: this.props.bgColor,
        cursor: 'pointer',
        outline: 'none',
        userSelect: 'none',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        KhtmlUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
      },
      this.props.style,
      hover,
      active,
      reset
    )
  }
}

export default Button
