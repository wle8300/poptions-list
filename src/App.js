// import PlainButton from './plain'
import GelButton from './gel'

import React from 'react';
import createReactClass from 'create-react-class'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField'
import {CompactPicker} from 'react-color'


module.exports = createReactClass({
  getInitialState: function () {
    return {
      text: 'Submit',
      backgroundColor: 'blue',
      color: 'white',
      canvasColor: '#ccc',
    }
  },
  render: function () {
    return (
      <MuiThemeProvider>
        <div style={this.styleA(this.props, this.state)}>
          {/* <PlainButton/> */}
          <GelButton style={{backgroundColor: this.state.backgroundColor, color: this.state.color}}>
            {this.state.text}
          </GelButton>
          <div style={this.styleB()}>
            <div style={{backgroundColor: 'white', padding: '0.25rem', boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.25)', borderRadius: 4,}}>
              <TextField hintText={'"' +this.state.text+ '"'} underlineShow={false} onChange={this.handleChangeText}/>
            </div>
            <CompactPicker color={this.state.backgroundColor} onChangeComplete={this.handleSelectBackgroundColor}/>
            <CompactPicker color={this.state.color} onChangeComplete={this.handleSelectColor}/>
            <CompactPicker color={this.state.canvasColor} onChangeComplete={this.handleSelectCanvasColor}/>
          </div>
        </div>
      </MuiThemeProvider>
    )
  },
  handleChangeText: function (event, text) {

    if (!text) return this.setState({text: this.getInitialState().text})

    this.setState({text: text})
  },
  handleSelectBackgroundColor: function (color) {

    this.setState({backgroundColor: color.hex})
  },
  handleSelectColor: function (color) {

    this.setState({color: color.hex})
  },
  handleSelectCanvasColor: function (color) {

    this.setState({canvasColor: color.hex})
  },
  styleA: function (props, state) {
    return {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: this.state.canvasColor,
    }
  },
  styleB: function () {
    return {
      position: 'absolute',
      bottom: 0,
      left: 0,
      margin: '1rem',
    }
  }
})
