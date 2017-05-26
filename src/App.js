import Color from 'color'
import React from 'react';
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types'


module.exports = createReactClass({
  getInitialState: function () {
    return {
      isHover: false,
      isActive: false,
    }
  },
  getDefaultProps: function () {
    return {
      children: 'Button',
      onClick: function () {
        console.log('clicked.')
      }
    }
  },
  render: function () {
    return (
      <div style={this.styleA()}>
        <button
          onClick={this.props.onClick}
          onMouseOver={() => this.setState({isHover: true})}
          onMouseOut={() => this.setState({isHover: false})}
          onMouseDown={() => this.setState({isActive: true})}
          onMouseUp={() => this.setState({isActive: false})}
          style={this.styleB()}>
          <div style={this.styleC(this.props, this.state)}/>
          <label style={this.styleD(this.props, this.state)}>
            {this.props.children}
          </label>
        </button>
      </div>
    )
  },
  styleA: function () {
    return {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ccc',
    }
  },
  styleB: function () {
    return {
      position: 'relative',
      padding: '0',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
    }
  },
  styleC: function (props, state) {

    const hoverStyles = state.isHover ? {
      borderColor: Color('#aaa').darken(0.1).string(),
      backgroundColor: Color('#aaa').darken(0.1).string(),
      boxShadow: 'none',
      cursor: 'pointer',
    } : {}
    const activeStyles = state.isActive ? {
      borderColor: Color('#aaa').lighten(0.5).string(),
      backgroundColor: Color('#aaa').lighten(1).string(),
      boxShadow: `0 0 20px 0 ${Color('#aaa').lighten(0.4).string()}`,
    } : {}


    return Object.assign({
      position: 'absolute',
      padding: 2,
      width: '100%',
      height: '100%',
      borderRadius: 6,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#aaa',
      backgroundColor: '#aaa',
      transition: 'border 200ms linear, background-color 200ms linear',
    }, hoverStyles, activeStyles)
  },
  styleD: function (props, state) {

    const hoverStyles = state.isHover ? {
      color: Color('#aaa').darken(0.1).string(),
      backgroundColor: Color('#eee').darken(0.1).string(),
      cursor: 'pointer',
    } : {}
    const activeStyles = state.isActive ? {
      color: Color('#aaa').lighten(0.4).string(),
      backgroundColor: Color('#eee').darken(0.25).string(),
    } : {}


    return Object.assign({
      position: 'relative',
      top: 3,
      left: 3,
      display: 'block',
      padding: '0.5rem 1rem',
      fontFamily: '"SF UI Display", Helvetica',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#aaa',
      backgroundColor: '#eee',
      border: 'none',
      transition: 'color 100ms linear, background-color 100ms linear',
      userSelect: 'none',
    }, hoverStyles, activeStyles)
  }
})
