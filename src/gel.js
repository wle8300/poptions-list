import Color from 'color'
import React from 'react';
import createReactClass from 'create-react-class'
// import PropTypes from 'prop-types'


module.exports = createReactClass({


  // TODO: document the props!!!

  getDefaultProps: function () {
    return {
      children: 'Button',
      onClick: function () {
        console.log('clicked.')
      },
      style: {},
    }
  },
  getInitialState: function () {
    return {
      isHover: false,
      isActive: false,
    }
  },
  render: function () {
    return (
      <button
        onMouseOver={() => this.setState({isHover: true})}
        onMouseOut={() => this.setState({isHover: false})}
        onMouseDown={() => this.setState({isActive: true})}
        onMouseUp={() => this.setState({isActive: false})}
        style={Object.assign({}, this.props.style, this.styleE(this.props, this.state))}>
        {this.props.children}
      </button>
    )
  },
  styleE: function (props, state) {

    const hoverStyles = state.isHover ? {
      backgroundColor: Color(this.props.style.backgroundColor).lighten(0.25).string(),
    } : {}
    const activeStyles = state.isActive ? {
      padding: '0.9rem 1.35rem',
      backgroundColor: Color(this.props.style.backgroundColor).darken(0.1).string(),
      boxShadow: `inset 0 0 4rem 0 ${Color(this.props.style.color).alpha(0.9)}, 0 0 1.5rem 0 ${Color(this.props.style.color).alpha(0.25)}`,
    } : {}


    return Object.assign({}, {
      padding: '1rem 1.5rem',
      backgroundColor: Color(this.props.style.backgroundColor),
      border: 'none',
      color: Color(this.props.style.color),
      fontWeight: 'bold',
      boxShadow: `inset 0 0 4rem 0 ${Color(this.props.style.color).alpha(0.75)}, 0 0 4rem 0 ${Color(this.props.style.color).alpha(0)}`,
      borderRadius: 5,
      cursor: 'pointer',
      transition: 'all 100ms ease-in',
      outline: 'none',
    }, hoverStyles, activeStyles)
  }
})
