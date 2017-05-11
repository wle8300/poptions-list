import Color from 'color'
import React from 'react';
import createReactClass from 'create-react-class'
import Styled from 'styled-components'
import PropTypes from 'prop-types'


const App = Styled.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
`


module.exports = createReactClass({
  propTypes: {
    // borderWidth: PropTypes.number,
    // onClick: PropTypes.func,
  },
  getDefaultProps: function () {
    return {
      // borderWidth: 3,
      children: 'Button',
      onClick: function () {
        console.log('clicked.')
      }
    }
  },
  render: function () {

    const Button = Styled.button`
      position: relative;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      &:hover {
        div {
          border-color: ${Color('#999').darken(0.1).string()};
          background-color: ${Color('#aaa').darken(0.1).string()};
          cursor: pointer;
        }
        label {
          color: ${Color('#aaa').darken(0.1).string()};
          background-color: ${Color('#eee').darken(0.1).string()};
          cursor: pointer;
        }
      }
      &:active {
        div {
          border-color: ${Color('#999').lighten(0.5).string()};
          background-color: ${Color('#aaa').lighten(1).string()};
          box-shadow: 0 0 20px 0 ${Color('#aaa').lighten(0.4).string()};
        }
        label {
          color: ${Color('#aaa').lighten(0.4).string()};
          background-color: ${Color('#eee').darken(0.25).string()};
        }
      }
    `
    const Trim = Styled.div`
      position: absolute;
      padding: 2px;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      border: 1px solid #999;
      background-color: #aaa;
      transition : border 200ms linear;
      transition : background-color 200ms linear;
    `
    const Text = Styled.label`
      position: relative;
      top: 3px;
      left: 3px;
      display: block;
      padding: 0.5rem 1rem;
      font-family: "SF UI Display", Helvetica;
      font-size: 1rem;
      font-weight: bold;
      color: #aaa;
      background-color: #eee;
      border: none;
      transition: color 100ms linear;
      transition: background-color 100ms linear;
      user-select: none;
    `

    // color:
    // trim:
    // background:

// color: #999
// fontSize: 1em
// fontFamily: 'whatever'
// onClick: func()
//
// color transitions
// package on npm!

    return (
      <App>
        <Button onClick={this.props.onClick}>
          <Trim/>
          <Text>{this.props.children}</Text>
        </Button>
      </App>
    )
  }
})
