// import Color from 'color'
import React, {Component} from 'react';


class Button extends Component {
  constructor () {
    super()
    this.state = {
      isHover: false,
      isActive: false,
      isResetting: false,
    }
    this._animationInterval = 150
  }
  render () {
    return (
      <button
        onClick={() => true}
        onMouseOver={() => this.setState({isHover: true})}
        onMouseOut={() => this.setState({isHover: false, isActive: false})}
        onMouseDown={() => this.setState({isActive: true, isResetting: false})}
        onMouseUp={() => this.setState({isResetting: true}, () => setTimeout(() => {
          this.setState({isActive: false, isResetting: false})
        }, this._animationInterval))}
        style={this.$3088423514288()}>
        {this.props.children}
      </button>
    )
  }
  $3088423514288 = () => {

    const hover = this.state.isHover ? {} : {}
    const active = this.state.isActive ? {
      color: this.props.bgColor,
      backgroundColor: this.props.accentColor,
    } : {}
    const reset = this.state.isResetting ? {
      backgroundColor: 'transparent',
      transition: `all ${this._animationInterval}ms ease-out`,
    } : {}

    return Object.assign(
      {},
      {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '1vw',
        height: '1vw',
        padding: '1vw',
        color: this.props.accentColor,
        border: `0.15vw solid ${this.props.accentColor}`,
        borderRadius: '100%',
        backgroundColor: this.props.bgColor,
        cursor: 'pointer',
        outline: 'none',
        userSelect: 'none',
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
